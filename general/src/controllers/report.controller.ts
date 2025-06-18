import Joi from 'joi'
import { ROLE } from '@libs/constant.lib'
import { isValidSchema } from '@libs/joi.lib'
import { StatusCodes } from 'http-status-codes'
import { generateLive } from './live.controller'
import { BadRequestError } from '@libs/error.lib'
import { Request, Response, NextFunction } from 'express'
import { randomUUID } from 'crypto'
/**
 * [GET] Report data for logged user or admin.
 */
export const getReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().uuid().optional(),
        userId: Joi.string().uuid().optional(),
        title: Joi.string().optional(),
        recordUrl: Joi.string().optional(),
        withItems: Joi.boolean().optional().default(false),
        isShowMine: Joi.boolean().optional().default(false)
      }).prefs({ convert: true }),
      req.populatedQuery
    )
    const orQuery: any[] = []
    if (req.populatedQuery?.id) {
      orQuery.push({
        id: req.populatedQuery?.id
      })
    }
    if (req.populatedQuery?.title) {
      orQuery.push({
        title: {
          contains: req.populatedQuery?.title
        }
      })
    }
    if (req.populatedQuery?.recordUrl) {
      orQuery.push({
        recordUrl: {
          contains: req.populatedQuery?.recordUrl
        }
      })
    }
    const foundReport = await database.report.findMany({
      where: {
        OR: orQuery?.length > 0 ? orQuery : undefined,
        userId:
          req.user?.roles?.includes(ROLE.Admin) &&
          (req.populatedQuery?.isShowMine == 'false' ||
            req.populatedQuery?.isShowMine == undefined)
            ? ((req.populatedQuery?.userId as string) ?? undefined)
            : req.user?.id
      },
      include: {
        reportItems: req.populatedQuery?.withItems == 'true' ? true : undefined
      },
      skip: req.page,
      take: req.limit
    })
    res.status(StatusCodes.ACCEPTED).json({
      success: true,
      result: foundReport
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [POST] Create report data for logged user or admin.
 */
export const createReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().uuid().optional(),
        title: Joi.string().required(),
        description: Joi.string().optional(),
        // liveId: Joi.string().uuid().required(),
        // items: Joi.array()
        //   .items(
        //     Joi.object({
        //       id: Joi.string().uuid().optional(),
        //       data: Joi.string().required(),
        //     }).required()
        //   )
        //   .optional(),
        // live body
        streamId: Joi.string().uuid().required(),
        expiryTimeInMinutes: Joi.number().required()
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
    // if (
    //   req.body.liveId &&
    //   !(
    //     (await database.live.count({
    //       where: {
    //         id: req.body.liveId,
    //       },
    //     })) > 0
    //   )
    // ) {
    //   throw new BadRequestError("live not found");
    // }
    const createReport = await database.$transaction(async (ctx) => {
      // let items = req.body.items;
      const liveBody = {
        id: randomUUID(), //req.body.liveId,
        streamId: req.body.streamId
      }
      delete req.body.streamId
      delete req.body.items
      const report = await ctx.report.create({
        data: {
          ...req.body,
          userId: req.user?.id,
          expiryTimeInMinutes:
            Math.floor(Date.now() / 1000) +
            (req.body?.expiryTimeInMinutes ?? 5) * 60
        }
      })
      await ctx.audit.create({
        data: {
          entityId: report.id,
          entityName: 'report',
          fieldName: Object.keys(report).toString(),
          fieldValue: JSON.stringify(report)
        }
      })
      // if (Array.isArray(items) && items?.length > 0) {
      //   items = items.map((item) => ({
      //     ...item,
      //     id: item?.id ?? randomUUID(),
      //     reportId: report.id,
      //   }));
      //   await ctx.reportItems.createMany({
      //     data: items,
      //   });
      //   items = items.map(
      //     (
      //       item: Awaited<ReturnType<typeof ctx.reportItems.findMany>>[number]
      //     ) => item.id
      //   );
      //   items = await ctx.reportItems.findMany({
      //     where: {
      //       id: {
      //         in: items,
      //       },
      //     },
      //   });
      //   await ctx.audit.createMany({
      //     data: items.map(
      //       (
      //         item: Awaited<ReturnType<typeof ctx.reportItems.findMany>>[number]
      //       ) => ({
      //         entityId: item.id,
      //         entityName: "reportItems",
      //         fieldName: Object.keys(item).toString(),
      //         fieldValue: JSON.stringify(item),
      //       })
      //     ),
      //   });
      //   return {
      //     ...report,
      //     items,
      //   };
      // }
      return await generateLive(
        {
          ...liveBody,
          reportId: report.id
        } as any,
        req.user!,
        ctx
      )
    })
    res.status(StatusCodes.CREATED).json({
      success: true,
      result: createReport,
      message: 'session will vanish next day'
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [PATCH] Report data edit for logged user or admin.
 */
export const updateReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().uuid().required(),
        title: Joi.string().optional(),
        description: Joi.string().optional(),
        thumbnailUrl: Joi.string().optional(),
        recordUrl: Joi.string().optional(),
        calculatedClass: Joi.string().optional()
      }).required(),
      req.body
    )
    if (!req.isInternal) {
      // todo: prevent outsider to update this field
      delete req.body.calculatedClass
    }
    if (
      !(
        (await database.report.count({
          where: {
            id: req.body.id
          }
        })) > 0
      )
    ) {
      throw new BadRequestError(`report with id ${req.body.id} not found`)
    }
    if (!(Object.keys(req.body).length > 1)) {
      throw new BadRequestError('body atleast have something to update with')
    }
    const updatedReport = await database.$transaction(async (ctx) => {
      req.body.updatedDate = new Date()
      const report = await ctx.report.update({
        where: {
          id: req.body.id
        },
        data: req.body
      })
      await ctx.audit.create({
        data: {
          entityId: report.id,
          entityName: 'report',
          fieldName: Object.keys(req.body).toString(),
          fieldValue: JSON.stringify(req.body),
          userId: req.user?.id
        }
      })
      return report
    })
    res.status(StatusCodes.OK).json({
      success: true,
      result: updatedReport
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [PATCH] Report data items edit for logged user or admin.
 */
export const updateReportItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        reportId: Joi.string().uuid().optional(),
        items: Joi.array()
          .items(
            Joi.object({
              id: Joi.string().uuid().optional().default(randomUUID()),
              data: Joi.string().required()
            }).required()
          )
          .required()
      }).required(),
      req.body
    )

    if (
      !req.body.reportId &&
      !(
        (
          await database.reportItems.findMany({
            where: {
              id: {
                in: req.body.items?.map(
                  (
                    item: Awaited<
                      ReturnType<typeof database.reportItems.findMany>
                    >[number]
                  ) => item.id
                )
              }
            }
          })
        )?.length > 0
      )
    ) {
      throw new BadRequestError(`none of report items were found`)
    }
    const updatedReportItems = await database.$transaction(async (ctx) => {
      req.body.items = req.body.items?.map((item: any) => ({
        ...item,
        id: item.id ?? randomUUID()
      }))
      await Promise.all(
        req.body.items?.map(
          async (
            item: Awaited<ReturnType<typeof ctx.reportItems.findMany>>[number]
          ) => {
            await ctx.reportItems.upsert({
              where: {
                id: item.id
              },
              update: item,
              create: {
                ...item,
                reportId: req.body.reportId
              }
            })
          }
        )
      )
      await ctx.audit.createMany({
        data: req.body.items?.map(
          (
            item: Awaited<ReturnType<typeof ctx.reportItems.findMany>>[number]
          ) => ({
            entityId: item.id,
            entityName: 'reportItems',
            fieldName: Object.keys(item).toString(),
            fieldValue: JSON.stringify(item),
            userId: req.user?.id
          })
        )
      })
      return await ctx.reportItems.findMany({
        where: {
          id: {
            in: req.body.items?.map(
              (
                item: Awaited<
                  ReturnType<typeof ctx.reportItems.findMany>
                >[number]
              ) => item.id
            )
          }
        }
      })
    })
    res.status(StatusCodes.OK).json({
      success: true,
      result: updatedReportItems
    })
  } catch (error) {
    next(error)
  }
}
