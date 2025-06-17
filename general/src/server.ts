import './config'
import './config.redis'
import './config.logging'
import './config.database'
import http from 'http'
import express from 'express'
import helmet from 'helmet'
import { liveRouter } from '@routes/live.route'
import { userRouter } from '@routes/user.route'
import type { Request, Response } from 'express'
import { reportRouter } from '@routes/report.route'
import { streamRouter } from '@routes/stream.route'
import { corsHandler } from '@middlewares/header.middleware'
import { loggingHandler } from '@middlewares/logging.middleware'
import { pagination } from '@middlewares/pagination.middleware'
import { errorHandler, notFoundHandler } from '@middlewares/page.middleware'

export const Application = express()
logging.log('Logging & configuration')
Application.use(corsHandler)
Application.use(express.urlencoded({ extended: true }))
Application.use(express.json())
Application.use(pagination(10))
Application.use(loggingHandler)
Application.use(
  helmet({
    hidePoweredBy: true
  })
)
logging.divider()
logging.log('Check database connection')
testDBConnection()
testRedisConnection()
logging.divider()
logging.log('Loading routes')
Application.use('/user', userRouter)
Application.use('/stream', streamRouter)
Application.use('/live', liveRouter)
Application.use('/report', reportRouter)
Application.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'pong',
    success: true
  })
})
Application.use(notFoundHandler)
Application.use(errorHandler)
logging.divider()
const HttpServer: ReturnType<typeof http.createServer> =
  http.createServer(Application)
HttpServer.listen(PORT, () => {
  logging.log(`Server started on port ${PORT}`)
  logging.divider()
})
export const ShutdownServer = (callback: any) =>
  HttpServer && HttpServer.close(callback)
