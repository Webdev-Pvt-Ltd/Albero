import { Router } from 'express'
import apiController from '../controller/apiController'
import rateLimit from '../middleware/rateLimit'

const router = Router()

// This is the test error endpoint
router.route('/self').get(apiController.self)

// Health check endpoint
router.route('/health').get(rateLimit, apiController.health)

export default router
