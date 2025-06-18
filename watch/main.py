from fastapi.responses import JSONResponse, StreamingResponse, Response
from asgi_correlation_id import CorrelationIdMiddleware, correlation_id
from fastapi.middleware.cors import CORSMiddleware
from statistics import mean, mode, multimode
from PIL import Image, ImageDraw, ImageFont
from contextlib import asynccontextmanager
from datetime import datetime, timedelta
from imutils.video import VideoStream
from typing import Optional, Any
from ultralytics import YOLO
from config import settings
from minio import Minio
from io import BytesIO
from fastapi import (
    status as Status,
    FastAPI,
    Depends,
    Request,
)
from utils import (
    class_names,
    Label,
    JSONException,
    getRedisJson,
    setRedisJson,
)
import redis.asyncio as redis
import numpy as np
import subprocess
import traceback
import tempfile
import asyncio
import uvicorn
import base64
import httpx
import time
import math
import json
import cv2
import io


async def run_tomorrow(task_fn, *args, **kwargs):
    now = datetime.now()
    tomorrow = (now + timedelta(days=1)).replace(
        hour=0, minute=0, second=0, microsecond=0
    )
    delay = (tomorrow - now).total_seconds()

    print(f"Waiting {delay} seconds to run the task tomorrow...")
    await asyncio.sleep(delay)
    await task_fn(*args, **kwargs)


async def cleanRedis():
    try:
        await redis_client.flushdb()
        print("All keys have been deleted.")
    except Exception as e:
        print(f"Failed to clean Redis: {e}")
    finally:
        # Schedule next run regardless of success/failure
        asyncio.create_task(run_tomorrow(cleanRedis))


# lifespan
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("logs - background worker starting now!")
    asyncio.create_task(consumeIncomingRtspLive())
    asyncio.create_task(run_tomorrow(cleanRedis))
    yield  # keeps the app running
    print("logs - shutting down")


# server initial
minio_client = Minio(
    endpoint=settings.minio_hostname,
    access_key=settings.minio_access_key,
    secret_key=settings.minio_secret_key,
    secure=False,
)
redis_client = redis.from_url(url=settings.redis_url, decode_responses=True)
model = YOLO(settings.path_model)
image_type = "image/jpeg"
video_type = "video/mp4"
fourcc_format = "mp4v"
image_format = ".jpeg"
video_format = ".mp4"
default_fps = 30
app = FastAPI(lifespan=lifespan)

# middlewares
app.add_middleware(CorrelationIdMiddleware)  # add extra corrlation id for every request
app.add_middleware(CORSMiddleware, allow_origins="*")


# app
def isStreamAvailable(vs: VideoStream):
    if vs.read() is None:
        print(f"logs - stream not available")
        return False
    return True


def routeValidation(request: Request):
    try:
        user_header = request.headers.get("x-auth-user")
        if not user_header:
            raise Exception("Missing x-auth-user header")
        # Store it for use in endpoints/middleware
        request.state.current_user = json.loads(
            base64.b64decode(user_header).decode("utf-8")
        )
    except Exception as error:
        raise JSONException(
            statusCode=Status.HTTP_401_UNAUTHORIZED,
            message=str(error),
        )


def uploadFrameToMinio(bucket_name: str, object_name: str, data: Any):
    print(f"sending {object_name}")
    if not minio_client.bucket_exists(bucket_name):
        minio_client.make_bucket(bucket_name)
    minio_client.put_object(
        bucket_name, object_name, BytesIO(data), len(data), content_type=image_type
    )


def framesIntoRecordVideoUploadToMinio(
    bucket_name: str, folder_name: str, fps: int = default_fps
):
    output_name = f"{folder_name}/video{video_format}"
    try:
        frames = sorted(
            list(
                minio_client.list_objects(
                    bucket_name, prefix=f"{folder_name}/", recursive=True
                )
            ),
            key=lambda x: x.object_name,
        )
        if not frames:
            raise ValueError(
                f"No frames found in MinIO under the given folder {folder_name}"
            )

        # get first frame to get size
        first_data = minio_client.get_object(bucket_name, frames[0].object_name).read()
        first_array = np.asarray(bytearray(first_data), dtype=np.uint8)
        first_frame = cv2.imdecode(first_array, cv2.IMREAD_COLOR)
        height, width, _ = first_frame.shape

        # temp file for video
        with tempfile.NamedTemporaryFile(suffix=video_format) as tmp:
            fourcc = cv2.VideoWriter.fourcc(*fourcc_format)
            out = cv2.VideoWriter(tmp.name, fourcc, fps, (width, height))

            for frame in frames:
                data = minio_client.get_object(bucket_name, frame.object_name).read()
                np_data = np.asarray(bytearray(data), dtype=np.uint8)
                frame = cv2.imdecode(np_data, cv2.IMREAD_COLOR)
                if frame is not None:
                    out.write(frame)
            out.release()
            # make another temp file for faststart-processed video
            with tempfile.NamedTemporaryFile(suffix=video_format) as faststart_tmp:
                # create moov atom to start using ffmpeg
                subprocess.run(
                    [
                        "ffmpeg",
                        "-y",
                        "-i",
                        tmp.name,
                        "-c:v",
                        "libx264",
                        "-preset",
                        "ultrafast",
                        "-pix_fmt",
                        "yuv420p",
                        "-movflags",
                        "+faststart",
                        faststart_tmp.name,
                    ],
                    check=True,
                )

                # Upload faststart video to MinIO
                minio_client.fput_object(
                    bucket_name=bucket_name,
                    object_name=output_name,
                    file_path=faststart_tmp.name,
                    content_type=video_type,
                )

            # # Upload video from temp file
            # tmp.seek(0)
            # minio_client.fput_object(
            #     bucket_name=bucket_name,
            #     object_name=output_name,
            #     file_path=tmp.name,
            #     content_type=video_type,
            # )
    except:
        raise GeneratorExit
    finally:
        print()


def resizeImage(frame, width: int = None, height: int = None):
    if frame is None:
        return None

    if width >= 1920 or height >= 1080:
        width = 1920
        height = 1080

    if width == None or height == None:
        return frame

    return cv2.resize(frame, (width, height))


def createTextImage(
    text,
    width=1920,
    height=1080,
    bg_color="black",
    text_color="white",
    font_path=None,
    font_size=250,
):
    img = Image.new("RGB", (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    if font_path:
        font = ImageFont.truetype(font_path, font_size)
    else:
        font = ImageFont.load_default()
    # centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    # draw text on image
    draw.text((x, y), text, font=font, fill=text_color)
    # save image to bytes buffer
    buffer = io.BytesIO()
    img.save(buffer, format="JPEG")
    buffer.seek(0)  # rewind buffer to the beginning
    return buffer.getvalue()


def captureModelFrameTask(frame: Optional[np.ndarray] | Any | None):
    if frame is None:
        return False

    predictions = model.track(
        source=frame, conf=0.5, line_width=1, device=settings.device
    )

    if predictions[0] is None:
        return False

    thickness = 2
    # Process the predictions (e.g., draw bounding boxes)
    for prediction in predictions:
        boxes = prediction.boxes
        data_prediction = json.loads(prediction.tojson())
        idx: int = 0
        for box in boxes:
            # x1, y1, x2, y2 = box.xyxy[0]
            # bounding boxes
            x1, y1, x2, y2 = box.xyxy[0]
            x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)

            # confidence
            confidence = math.ceil(box.conf[0] * 100) / 100

            # class name
            cls_idx = int(box.cls[0])

            # draw bounding box and get Label
            if type(class_names[0]) is Label:
                curr_class: str = class_names[cls_idx].name  # type: ignore
                color: tuple[int, int, int] = class_names[cls_idx].color  # type: ignore
                cv2.rectangle(frame, (x1, y1), (x2, y2), color, thickness)
            else:
                curr_class: str = class_names[cls_idx]  # type: ignore
                color: tuple[int, int, int] = class_names[cls_idx].color
                cv2.rectangle(frame, (x1, y1), (x2, y2), color, thickness)

            # Label
            # Label text with outline
            lbl = f"[{data_prediction[idx].get('track_id')}] {curr_class}: {confidence}"
            org = (x1, y1)
            font = cv2.FONT_HERSHEY_SIMPLEX
            font_scale = 0.7
            text_thickness = 2
            line_type = cv2.LINE_AA
            outline_color = (255, 255, 255)  # Black (0, 0, 0); white (255, 255, 255)
            cv2.putText(
                frame,
                lbl,
                org,
                font,
                font_scale,
                outline_color,
                text_thickness - 1,
                line_type,
            )
            cv2.putText(
                frame, lbl, org, font, font_scale, color, text_thickness - 1, line_type
            )
            idx += 1

    # Convert the image into image_format
    _, encoded_image = cv2.imencode(image_format, frame)

    # return image
    return frame, encoded_image.tobytes(), predictions[0].tojson()


async def captureModelTask(vs: VideoStream):
    frame = vs.read()
    if frame is None:
        return None, None
    # captureModelFrameTask have to be non async
    return await asyncio.to_thread(captureModelFrameTask, frame)


async def captureFrameTask(vs: VideoStream):
    frame = vs.read()
    if frame is None:
        return None, None
    _, encoded_frame = cv2.imencode(image_format, frame)
    return frame, encoded_frame.tobytes()


async def captureTask(
    id: str, width: int | None, height: int | None, is_prediction_enabled: bool = False
):
    data = await getRedisJson(rd=redis_client, key=id)
    if data is None:
        yield (
            b"--frame\r\n"
            b"Content-Type: "
            + image_type.encode("utf-8")
            + b"\r\n\r\n"
            + createTextImage("your live session is invalid")
            + b"\r\n"
        )
        return
    try:
        rtsp_url = data["stream"]["url"]
        vs = VideoStream(src=rtsp_url).start()

        while data.get("expiryTimeInMinutes") is None or time.time() < int(
            data.get("expiryTimeInMinutes")
        ):
            # Run processing in parallel
            data = await getRedisJson(rd=redis_client, key=id)
            if data is None:
                break

            expiry = data.get("expiryTimeInMinutes")
            if expiry is not None and int(time.time()) > int(expiry):
                break

            if is_prediction_enabled:
                frame, encoded_frame, prediction = await captureModelTask(vs)
            else:
                frame, encoded_frame = await captureFrameTask(vs)

            if frame is None or encoded_frame is None:
                break

            yield (
                b"--frame\r\n"
                b"Content-Type: "
                + image_type.encode("utf-8")
                + b"\r\n\r\n"
                + encoded_frame
                + b"\r\n"
            )

        if int(time.time()) > int(data.get("expiryTimeInMinutes", 0)):
            yield (
                b"--frame\r\n"
                b"Content-Type: "
                + image_type.encode("utf-8")
                + b"\r\n\r\n"
                + createTextImage(
                    "your live session has reached time limit. Reload to extend the limit"
                )
                + b"\r\n"
            )
    except Exception as e:
        traceback.print_exc()
        raise GeneratorExit
    finally:
        if vs is not None:
            vs.stop()
        print(f"capture live with {id} stopped")


@app.get("/live/{liveId}")
async def liveStream(
    request: Request,
    liveId: str,
    width: int = None,
    height: int = None,
    prediction: bool = False,
):
    liveData = await getRedisJson(rd=redis_client, key=liveId)
    if liveData is not None and liveData.get("expiryTimeInMinutes") is None:
        liveData["expiryTimeInMinutes"] = int(time.time()) + 1 * 60
        await setRedisJson(rd=redis_client, key=liveId, value=liveData)
    return StreamingResponse(
        captureTask(
            id=liveId, is_prediction_enabled=prediction, width=width, height=height
        ),
        media_type="multipart/x-mixed-replace; boundary=frame",
    )


@app.get("/live/{liveId}/extend-more-minutes")
async def liveStream(request: Request, liveId: str):
    try:
        if redis_client.exists(liveId) == False:
            raise Exception(f"your live with id {liveId} does not exist")

        liveData = await getRedisJson(rd=redis_client, key=liveId)
        liveData["expiryTimeInMinutes"] = (
            # int(liveData.get("expiryTimeInMinutes")) + 1 * 60
            int(time.time())
            + 1 * 60
        )
        await setRedisJson(rd=redis_client, key=liveId, value=liveData)
        return JSONResponse(
            content={
                "message": "live time extended susccessfully",
                "success": True,
            }
        )
    except Exception as e:
        raise JSONException(
            statusCode=Status.HTTP_404_NOT_FOUND,
            message=str(e),
        )


async def recordLiveStream(id: str):
    print(f"logs - recordLiveStream running for report id {id}")
    try:
        reportData = await getRedisJson(rd=redis_client, key=id)
        if reportData is None:
            raise Exception("Report data is not available")
        liveData = await getRedisJson(rd=redis_client, key=reportData["liveId"])
        if liveData is None:
            raise Exception("Live data is not available")
        user_data = liveData["user"]
        report_id = reportData["id"]
        rtsp_url = liveData["stream"]["url"]
        expiry_ts = reportData["expiryTimeInMinutes"]
        user_data_encoded = base64.b64encode(json.dumps(user_data).encode()).decode()
        request_header = {
            "x-from-internal": "true",  # headers must be strings
            "x-auth-user": user_data_encoded,
        }
        items = []
        frame_count = 0
        start_time = time.time()
        vs = VideoStream(src=rtsp_url).start()
        if not isStreamAvailable(vs):
            raise Exception("Stream is not available")
        while expiry_ts is None or time.time() < int(expiry_ts):
            # predict
            frame, prediction_frame, prediction = await captureModelTask(vs)
            # store frames
            object_name = f"{report_id}/{frame_count}{image_format}"
            print(f"logs - sending {object_name}")
            await asyncio.to_thread(
                uploadFrameToMinio, settings.minio_bucket, object_name, prediction_frame
            )
            # todo: store items
            items.append(json.loads(prediction))
            async with httpx.AsyncClient() as client:
                await client.patch(
                    f"{settings.general_service_url}/report/items",
                    json={
                        "reportId": report_id,
                        "items": [{"data": prediction}],
                    },
                    headers=request_header,
                )
            await asyncio.sleep(1 / default_fps)  # ~30 FPS, sent 1 frame every 33ms
            frame_count += 1
        # todo: make the video
        duration = time.time() - start_time
        actual_fps = frame_count / duration if duration > 0 else 1
        await asyncio.to_thread(
            framesIntoRecordVideoUploadToMinio,
            settings.minio_bucket,
            f"{report_id}",
            actual_fps,
        )
        # todo: update report data
        # set mean, mod per track_id
        # add classes
        class_mapping = {}
        for item in items:
            for frame in item:
                track_id = frame["track_id"]
                cls = frame["class"]
                if track_id not in class_mapping:
                    class_mapping[track_id] = []
                class_mapping[track_id].append(cls)
        # find mean and mode per track_id
        calculation_result = {}
        for track_id, conf_list in class_mapping.items():
            mean_value = sum(conf_list) / len(conf_list)
            mode_value = multimode(conf_list)
            mean_index = int(round(mean_value))
            mode_index = mode_value[0] if isinstance(mode_value, list) else mode_value

            # stays index at 4 max
            mean_index = max(0, min(mean_index, len(class_names) - 1))
            mode_index = max(0, min(mode_index, len(class_names) - 1))

            calculation_result[track_id] = {
                "mean": class_names[mean_index].name,
                "mode": class_names[mode_index].name,
            }
        # update
        async with httpx.AsyncClient() as client:
            # url example http://localhost:9000/default/c2c451b6-ac65-4a39-9471-6894b9a09c92/video.mp4
            await client.patch(
                f"{settings.general_service_url}/report",
                json={
                    "id": report_id,
                    "recordUrl": f"{settings.minio_hostname_public}/default/{report_id}/video{video_format}",
                    "thumbnailUrl": f"{settings.minio_hostname_public}/default/{report_id}/0{image_format}",
                    "calculatedClass": json.dumps(calculation_result),
                },
                headers=request_header,
            )
        # todo: add success notification
        async with httpx.AsyncClient() as client:
            await client.post(
                f"{settings.general_service_url}/user/notification",
                json={
                    "entityId": report_id,
                    "entityName": "Report",
                    "title": f"Recording is finished",
                    "caption": reportData["title"] or None,
                    "description": f"You can see it now!",
                },
                headers=request_header,
            )
    except Exception as e:
        traceback.print_exc()
        # todo: add falsy notification
        async with httpx.AsyncClient() as client:
            await client.post(
                f"{settings.general_service_url}/user/notification",
                json={
                    "entityId": report_id,
                    "entityName": "Report",
                    "title": f"Recording is failed",
                    "caption": reportData["title"] or None,
                    "description": f"Something is wrong with the streaming",
                },
                headers=request_header,
            )
    finally:
        if vs is not None:
            vs.stop()
        print(f"record capture with {id} stopped")
        raise GeneratorExit


async def consumeIncomingRtspLive():
    pubsub = redis_client.pubsub()
    await pubsub.subscribe(settings.redis_channel)
    print(f"logs - consumeIncomingRtspLive subscribed to {settings.redis_channel}")
    # track tasks
    running = set()
    async for message in pubsub.listen():
        if message["type"] != "message":
            continue
        data = message["data"]
        if isinstance(data, bytes):
            reportId = data.decode("utf-8")
        else:
            reportId = data
        # spawn a new task for each message immediately
        task = asyncio.create_task(recordLiveStream(reportId))
        running.add(task)
        task.add_done_callback(lambda t: running.discard(t))
    # if pubsub ever ends, wait for all
    if running:
        await asyncio.wait(running)


@app.get("/ping")
async def ping(request: Request):
    try:
        return JSONResponse(status_code=200, content={"message": "pong"})
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


if __name__ == "__main__":
    print("logs - api starting")
    # Run the FastAPI server in the main thread
    uvicorn.run(app, host=settings.host, port=settings.port)
