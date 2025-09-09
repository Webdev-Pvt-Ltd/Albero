// src/config/cron.ts
import { CronJob } from 'cron'
import https from 'https'
import http from 'http'
import config from './config'
import logger from '../util/logger'

// Function to perform health check
const healthCheck = (): void => {
    const url = config.SERVER_URL

    if (!url) {
        logger.error('SERVER_URL is not defined in config')
        return
    }

    const client = url.startsWith('https') ? https : http

    client
        .get(url + '/api/v1/health', (res) => {
            if (res.statusCode === 200) {
                logger.info(`Health check passed for ${url}, status: ${res.statusCode}`)
            } else {
                logger.warn(`Health check failed for ${url}, status: ${res.statusCode}`)
            }
        })
        .on('error', (err: Error) => {
            const message = err && typeof err.message === 'string' ? err.message : String(err)
            logger.error(`Health check error for ${url}: ${message}`)
        })
}

// Run job every 8 minutes
const job = new CronJob(
    '*/8 * * * *', // cron expression
    healthCheck, // onTick
    null, // onComplete
    true, // start immediately
    'Asia/Kolkata' // timezone
)

export default job
