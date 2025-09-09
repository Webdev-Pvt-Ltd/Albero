import { NextFunction, Request, Response } from 'express'
import httpResponse from '../util/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'
import prisma from '../util/prisma'

interface ContactBody {
    name: string
    email: string
    phone?: string
    message: string
}

export default {
    contact: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, phone, message } = req.body as ContactBody

            if (!name || !email || !message) {
                return res.status(400).json({ error: 'Name, email, and message are required.' })
            }

            const contact = await prisma.contact.create({
                data: { name, email, phone, message }
            })

            return httpResponse(req, res, 200, responseMessage.SUCCESS, contact)
        } catch (err) {
            return httpError(next, err, req, 500)
        }
    }
}
