import Joi from 'joi'
import { randomUUID } from 'crypto'
import { user } from '@xprisma/client'
import { ROLE } from '@libs/constant.lib'
import { isValidSchema } from '@libs/joi.lib'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthorizedError } from '@libs/error.lib'
import { Request, Response, NextFunction } from 'express'
import { generatePassword, validatePassword } from '@libs/hash.lib'
import {
  generateAccessToken,
  generateRefreshToken,
  isRefreshTokenExist
} from '@libs/jwt.lib'
/**
 * [POST] User register.
 */
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().uuid().optional(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
      }).required(),
      req.body
    )
    if (
      (await database.user.count({
        where: {
          OR: [
            {
              email: {
                contains: req.body.email?.trim()
              }
            },
            {
              id: req.body.id
            }
          ]
        }
      })) > 0
    ) {
      throw new BadRequestError('user already registered')
    }
    req.body.password = await generatePassword(req.body.password)
    const createdUser = await database.$transaction(async (ctx) => {
      const userPayload = await ctx.user.create({
        data: {
          ...req.body,
          id: req.body.id ?? randomUUID()
        }
      })

      delete req.body.password
      await ctx.audit.create({
        data: {
          entityId: userPayload.id,
          entityName: 'user',
          fieldName: JSON.stringify(Object.keys(userPayload)),
          fieldValue: JSON.stringify(userPayload),
          userId: userPayload.id
        }
      })
      return userPayload
    })
    const [accessToken, userAccessPayload] = await generateAccessToken(
      createdUser as user
    )
    const [refreshToken, _] = await generateRefreshToken(
      userAccessPayload.authenticationId
    )
    res.status(StatusCodes.CREATED).json({
      success: true,
      result: {
        ...createdUser,
        accessToken,
        refreshToken
      }
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [POST] User login.
 */
export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
      }).required(),
      req.body
    )
    const existingUser = await database.user.findFirst({
      where: {
        email: {
          contains: req.body.email?.trim()
        }
      },
      select: {
        name: true,
        password: true,
        email: true,
        id: true,
        isVerified: true,
        updatedDate: true,
        createdDate: true,
        photo: true,
        roles: true
      }
    })
    if (!existingUser) {
      throw new BadRequestError(
        `user with email ${req.body.email?.trim()} not found`
      )
    }
    const isPasswordValid = await validatePassword(
      existingUser.password,
      req.body.password
    )
    if (!isPasswordValid) {
      throw new BadRequestError(`password does not match`)
    }
    const [accessToken, userPayload] = await generateAccessToken(
      existingUser as user
    )
    const [refreshToken, _] = await generateRefreshToken(
      userPayload.authenticationId
    )
    res.status(StatusCodes.OK).json({
      success: true,
      result: {
        ...userPayload,
        accessToken,
        refreshToken
      }
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [GET] User data for logged user.
 */
export const getForLoggedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const existingUser = await database.user.findFirst({
      where: {
        id: req.user?.id
      }
    })
    res.status(StatusCodes.OK).json({
      success: true,
      result: existingUser
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [PATCH] User data edit for logged user.
 */
export const userUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        email: Joi.string().email().optional(),
        name: Joi.string().optional(),
        password: Joi.string().min(8).optional()
      }).required(),
      req.body
    )
    if (!(Object.keys(req.body).length > 0)) {
      throw new BadRequestError('body atleast have 1 field')
    }
    const updatedUser = await database.$transaction(async (ctx) => {
      if (req.body.password) {
        req.body = {
          ...req.body,
          password: await generatePassword(req.body.password)
        }
      }
      const user = await ctx.user.update({
        where: {
          id: req.user?.id
        },
        data: { ...req.body, updatedDate: new Date() }
      })
      req.body.password = null
      await ctx.audit.create({
        data: {
          entityId: req.user!.id,
          entityName: 'user',
          fieldName: JSON.stringify(Object.keys(user)),
          fieldValue: JSON.stringify(user),
          userId: req.user!.id
        }
      })
      return user
    })
    res.status(StatusCodes.CREATED).json({
      success: true,
      result: updatedUser
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [PATCH] User data edit for admin.
 */
export const userUpdateForAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().required(),
        name: Joi.string().optional(),
        isVerified: Joi.boolean().optional(),
        roles: Joi.array()
          .items(Joi.string())
          .custom((value, helpers) => {
            const allowed = Object.values(ROLE)
            const invalid = value.filter(
              (role: string) => !allowed.includes(role)
            )
            if (invalid.length > 0) {
              return helpers.error('any.invalid', { value })
            }
            return value
          }, 'roleValidation')
          .optional()
      }).required(),
      req.body
    )
    const updatedUser = await database.$transaction(async (ctx) => {
      const update = await ctx.user.update({
        where: {
          id: req.body.id
        },
        data: { ...req.body, updatedDate: new Date() }
      })
      await ctx.audit.create({
        data: {
          entityName: 'user',
          entityId: req.body.id,
          fieldName: JSON.stringify(Object.keys(update)),
          fieldValue: JSON.stringify(update),
          userId: req.user!.id
        }
      })
    })
    res.status(StatusCodes.CREATED).json({
      success: true,
      result: updatedUser
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [GET] get users data for admin.
 */
export const getUserListForAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().optional(),
        name: Joi.string().optional(),
        email: Joi.string().optional(),
        userIds: Joi.array().items(Joi.string()).optional()
      }).prefs({ convert: true }),
      req.populatedQuery
    )
    const orQuery: any[] = []
    if (req.populatedQuery?.id) {
      orQuery.push({
        id: req.populatedQuery?.id
      })
      orQuery.push({
        id: {
          in: req.populatedQuery?.userIds
        }
      })
    }
    if (req.populatedQuery?.name) {
      orQuery.push({
        name: {
          contains: req.populatedQuery?.name
        }
      })
    }
    if (req.populatedQuery?.email) {
      orQuery.push({
        email: {
          contains: req.populatedQuery?.email?.toString()?.trim()?.toLowerCase()
        }
      })
    }
    const foundUsers = await database.user.findMany({
      where: {
        OR: orQuery?.length > 0 ? orQuery : undefined
      },
      skip: req.page,
      take: req.limit
    })
    res.status(StatusCodes.OK).json({
      success: true,
      result: foundUsers
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [GET] get logged user notification.
 */
export const getNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await database.notification.findMany({
      where: {
        userId: req.user?.id
      },
      skip: req.page,
      take: req.limit
    })
    res.status(StatusCodes.OK).json({
      success: true,
      result
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [POST] create notification for logged user.
 */
export const createNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        id: Joi.string().uuid().optional(),
        link: Joi.string().optional(),
        photo: Joi.string().optional(),
        caption: Joi.string().optional(),
        entityId: Joi.string().uuid().optional(),
        entityName: Joi.string().optional(),
        status: Joi.string().optional(),
        title: Joi.string().required(),
        description: Joi.string().required()
      }).required(),
      req.body
    )
    const id = req.body?.id ?? randomUUID()
    await database.$transaction(async (ctx) => {
      const result = await ctx.notification.create({
        data: {
          ...req.body,
          userId: req.user?.id,
          id
        }
      })
      res.status(StatusCodes.CREATED).json({
        success: true,
        result
      })
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [GET] get logged user or admin audit.
 */
export const getAudit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        entityId: Joi.string().uuid().required(),
        entityName: Joi.string().optional()
        // isShowMine: Joi.boolean().optional().default(false)
      }).prefs({ convert: true }),
      req.populatedQuery
    )
    const query = Object.assign({}, req.populatedQuery)
    const result = await database.audit.findMany({
      where: {
        ...(Object.values(query)?.length > 0
          ? {
              OR: [
                {
                  entityId: query?.entityId as string | undefined
                },
                {
                  entityName: {
                    contains: (query?.entityName as string | undefined)?.trim()
                  }
                }
              ]
            }
          : {})
        // userId:
        //   req.user?.roles?.includes(ROLE.Admin) &&
        //   (req.populatedQuery?.isShowMine == 'false' ||
        //     req.populatedQuery?.isShowMine == undefined)
        //     ? ((req.populatedQuery?.userId as string) ?? undefined)
        //     : req.user?.id
      },
      include: {
        user: true
      },
      skip: req.page,
      take: req.limit
    })
    res.status(StatusCodes.OK).json({
      success: true,
      result
    })
  } catch (error) {
    next(error)
  }
}
/**
 * [POST] refesh user access token.
 */
export const createAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await isValidSchema(
      Joi.object({
        token: Joi.string().required()
      }).required(),
      req.body
    )
    const foundRefreshTokenPayload = isRefreshTokenExist(req.body.token)
    if (!(foundRefreshTokenPayload as any)?.id) {
      throw new UnauthorizedError('session invalid')
    }
    // todo: prevent bypass using access token
    const foundAuthenticationData = await database.authentication.findFirst({
      where: {
        id: (foundRefreshTokenPayload as any).id
      },
      include: {
        user: true
      }
    })
    if (!foundAuthenticationData) {
      throw new UnauthorizedError('please sign-in again')
    }

    const [accessToken, userAccessPayload] = await generateAccessToken({
      ...foundAuthenticationData?.user,
      authenticationId: foundAuthenticationData.id
    } as any)

    res.status(StatusCodes.CREATED).json({
      success: true,
      result: {
        token: accessToken
      }
    })
  } catch (error) {
    next(error)
  }
}
