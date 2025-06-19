import { ROLE } from '@libs/constant.lib'
import { BadRequestError, InternalServerError } from '@libs/error.lib'
import { isValidSchema } from '@libs/joi.lib'
import { live, Prisma, user } from '@xprisma/client'
import { randomUUID } from 'crypto'
import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'

const urlRegex = new RegExp(/^\/[^\s]+$/)
const urlValidation = Joi.string().pattern(urlRegex).messages({
  'string.pattern.base': 'only path allowed'
})
/**
 * Generate live data for logged user or admin.
 */
export const generateLive = async (
  body: Awaited<ReturnType<typeof database.live.create>>,
  user: user,
  ctx: Prisma.TransactionClient
) => {
  try {
    const foundLive = await database.live.findFirst({
      where: {
        id: body.id
      },
      include: {
        user: true,
        stream: true
      }
    })
    const minutes = Number(body?.expiryTimeInMinutes ?? 5)
    const liveId = body.id ?? randomUUID()
    const live =
      foundLive ??
      (await ctx.live.create({
        data: {
          id: liveId,
          path: `${process.env.WATCH_SERVICE_LIVE_ENDPOINT}/${liveId}`,
          streamId: body.streamId,
          userId: user.id,
          expiryTimeInMinutes: Math.floor(Date.now() / 1000) + minutes * 60 // s
        },
        include: {
          user: true,
          stream: true
        }
      }))
    await ctx.audit.create({
      data: {
        entityId: live.id,
        entityName: 'live',
        fieldName: Object.keys(live).toString(),
        fieldValue: JSON.stringify(live)
      }
    })
    // save and sent to redis
    const liveStringify = JSON.stringify(live)
    await redis.SET(live.id, liveStringify)
    return live
  } catch (error) {
    throw new InternalServerError((error as Error).message)
  }
}
/**
 * [POST] Create live data for logged user or admin.
 */
export const createLive = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        streamId: Joi.string().uuid().required(),
        expiryTimeInMinutes: Joi.number().optional()
      }).required(),
      req.body
    )
    if (
      req.body.streamId &&
      !(
        (await database.stream.count({
          where: {
            id: req.body.streamId
          }
        })) > 0
      )
    ) {
      throw new BadRequestError('stream not found')
    }
    const createdLive = await database.$transaction(
      async (ctx) => await generateLive(req.body as any, req.user!, ctx)
    )
    res.status(StatusCodes.CREATED).json({
      success: true,
      result: createdLive,
      message: 'session will vanish next day'
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [PATCH] Live data edit for logged user or admin.
 */
export const updateLive = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().uuid().required(),
        expiryTimeInMinutes: Joi.number().optional()
      }).required(),
      req.body
    )
    if (
      !(
        (await database.live.count({
          where: {
            id: req.body.id
          }
        })) > 0
      )
    ) {
      throw new BadRequestError(`live with id ${req.body.id} not found`)
    }
    if (!(Object.keys(req.body).length > 1)) {
      throw new BadRequestError('body atleast have something to update with')
    }
    const updatedLive = await database.$transaction(async (ctx) => {
      const date = new Date()
      const expiryTimeInMinutes = new Date(
        date.setMinutes(
          date.getMinutes() + +(req.body?.expiryTimeInMinutes ?? 5)
        )
      )
      delete req.body.expiryTimeInMinutes
      req.body.updatedDate = new Date()
      const live = await ctx.live.update({
        where: {
          id: req.body.id,
          userId: req.user?.id
        },
        data: expiryTimeInMinutes
          ? {
              ...req.body,
              expiryTimeInMinutes
            }
          : req.body
      })
      await ctx.audit.create({
        data: {
          entityId: live.id,
          entityName: 'live',
          fieldName: Object.keys(live).toString(),
          fieldValue: JSON.stringify(live)
        }
      })
      return live
    })
    res.status(StatusCodes.OK).json({
      success: true,
      result: updatedLive
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [GET] Live data for logged user or admin.
 */
export const getLive = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        isShowMine: Joi.boolean().optional().default(false),
        id: Joi.string().uuid().optional(),
        userId: Joi.string().uuid().optional(),
        streamId: Joi.string().uuid().optional(),
        path: urlValidation.optional()
        // expiryDate: Joi.object({
        //   gt: Joi.date().optional(),
        //   gte: Joi.date().optional(),
        //   lt: Joi.date().optional(),
        //   lte: Joi.date().optional()
        // }).optional()
      }).prefs({ convert: true }),
      req.populatedQuery
    )
    const orQuery: any[] = []
    if (req.populatedQuery?.id) {
      orQuery.push({
        id: req.populatedQuery?.id
      })
    }
    if (req.populatedQuery?.streamId) {
      orQuery.push({
        streamId: req.populatedQuery?.streamId
      })
    }
    // if (req.populatedQuery?.expiryDate) {
    //   orQuery.push({
    //     expiryDate: req.populatedQuery?.expiryDate
    //   })
    // }
    if (req.populatedQuery?.path) {
      orQuery.push({
        path: {
          contains: req.populatedQuery.path
        }
      })
    }
    const foundLive = await database.live.findMany({
      where: {
        OR: orQuery?.length > 0 ? orQuery : undefined,
        userId:
          req.user?.roles?.includes(ROLE.Admin) &&
          (req.populatedQuery?.isShowMine == 'false' ||
            req.populatedQuery?.isShowMine == undefined)
            ? ((req.populatedQuery?.userId as string) ?? undefined)
            : req.user?.id
      },
      skip: req.page,
      take: req.limit
    })
    res.status(StatusCodes.ACCEPTED).json({
      success: true,
      result: foundLive
    })
  } catch (error) {
    next(error)
  }
}
