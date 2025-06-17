import './config'
import './config.logging'
import http from 'http'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { checkAuthentication } from '@libs/jwt.lib'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { CustomError } from './libs/error.lib'
import { StatusCodes } from 'http-status-codes'

const pingUntilSuccess = async (
  url: string,
  label: string,
  retryDelay = 5000,
  maxRetries = 10
) => {
  for (let i = 1; i <= maxRetries; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) {
        console.log(`${label} is available`)
        return
      } else {
        console.warn(`responded with status ${res.status} (attempt ${i})`)
      }
    } catch (err: any) {
      console.warn(`failed to ping ${label} (attempt ${i}):`, err.message)
    }
    await new Promise((resolve) => setTimeout(resolve, retryDelay))
  }
  console.error(`[💥] ${label} did not respond after ${maxRetries} attempts`)
}
const customProxyForwarder = (
  proxyReq: http.ClientRequest,
  req: http.IncomingMessage,
  res: http.ServerResponse<http.IncomingMessage>
) => {
  console.log(`[HPM] [${req.method}] ${req.url}`) // outputs: [HPM] GET /watch
  // Forward the custom header
  const xAuthUser = req.headers['x-auth-user']
  if (xAuthUser) {
    proxyReq.setHeader('x-auth-user', xAuthUser)
  }
}

export const Application = express()
Application.use(cors())
Application.use(checkAuthentication)
// todo: proxy to watch service
Application.use(
  '/watch',
  createProxyMiddleware({
    target: process.env.WATCH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/watch': ''
    },
    plugins: [
      (proxyServer, options) => {
        proxyServer.on('proxyReq', customProxyForwarder)
      }
    ]
  })
)
// todo: error handler
Application.use(
  async (
    error: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!error) next()
    logging.warning(error)
    if (error.status == StatusCodes.INTERNAL_SERVER_ERROR) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: `internal server error`
      })
    } else {
      res.status(error?.status ?? StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error?.message?.trim()
      })
    }
  }
)
// todo: proxy to general service
Application.use(
  '/',
  createProxyMiddleware({
    target: process.env.GENERAL_SERVICE_URL,
    changeOrigin: true,
    // pathRewrite: {
    //   '^/': '/'
    // },
    plugins: [
      (proxyServer, options) => {
        proxyServer.on('proxyReq', customProxyForwarder)
      }
    ]
  })
)

const HttpServer: ReturnType<typeof http.createServer> =
  http.createServer(Application)
HttpServer.listen(PORT, async () => {
  logging.log(`Server started on port ${PORT}`)
  logging.divider()
  if (process.env.WATCH_SERVICE_URL) {
    pingUntilSuccess(`${process.env.WATCH_SERVICE_URL}/ping`, 'watch-service')
  }
  if (process.env.GENERAL_SERVICE_URL) {
    pingUntilSuccess(
      `${process.env.GENERAL_SERVICE_URL}/ping`,
      'general-service'
    )
  }
  logging.divider()
})
