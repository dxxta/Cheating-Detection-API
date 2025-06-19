# Bye-Cheating

Integrated API system for cheating detection using CCTV, rtsp protocol and YOLOv7 Algorithm

## Preview

![API image result](media/thumbnail.jpeg)

> Here is our demo

- [Demo](https://youtu.be/VgCMW_pBqNY?si=NtY42vDjLopSq8mr)

## Requirements

### Hardware

| Component              | Minimum                                             | Recommended\*                                   | Maximum   |
| ---------------------- | --------------------------------------------------- | ----------------------------------------------- | --------- |
| CPU socket             | 1.3 GHz (64-bit processor) or faster for multi-core | 3.1 GHz (64-bit processor) or faster multi-core | 2 sockets |
| Memory (RAM)           | 4 GB                                                | -                                               | -         |
| Hard disks and storage | 10 GB hard disk with a 20 GB system partition       | -                                               | No limit  |

### Packages

- `node 20` or latest
- `python 3.12`
- `fastapi`, more detail docs [official website](https://fastapi.tiangolo.com/)
- `redis`, more detail docs [official website](https://redis.io/)
- `docker & docker compose`, more detail docs [official website](https://www.docker.com/)

## Installation

1. Open a terminal and go inside main root folder
2. Run docker compose up -d
3. You can access localhost using default port, running at 3030
