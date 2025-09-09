import { Router } from 'express'
import rateLimit from '../middleware/rateLimit'
import contactController from '../controller/contactController'

const router = Router()

// Health check endpoint
router.route('/contact').get(rateLimit, contactController.contact)

export default router
