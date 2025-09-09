// src/middleware/rateLimit.ts
import { NextFunction, Request, Response } from 'express'
import { rateLimiterPostgres } from '../config/rateLimiter'
import httpError from '../util/httpError'
import responseMessage from '../constant/responseMessage'

export default async (req: Request, _: Response, next: NextFunction) => {
    if (!rateLimiterPostgres) {
        return httpError(next, new Error('Rate limiter not initialized'), req, 500)
    }

    try {
        await rateLimiterPostgres.consume(req.ip ?? 'unknown') // consume 1 point per request
        next()
    } catch {
        httpError(next, new Error(responseMessage.TOO_MANY_REQUESTS), req, 429)
    }
}
