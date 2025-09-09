import { Router } from 'express'
import contactController from '../controller/contactController'

const router = Router()

// Health check endpoint
router.route('/contact').post(contactController.contact)

export default router
