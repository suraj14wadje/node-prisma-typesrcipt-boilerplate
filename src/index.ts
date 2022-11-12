import app from './app'
import { APP_PORT } from '@/config/config'
import logger from './config/logger'

app.listen(APP_PORT, () => {
  logger.info(`server listening on ${APP_PORT}`)
})

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception: ' + err)
})
