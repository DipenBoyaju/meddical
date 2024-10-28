import express from 'express'
import { createAppointment, getAllAppointments } from '../controllers/appointmentController.js';

const router = express.Router()

router.route('/bookAppointment').post(createAppointment)
router.route('/getAllAppointment').get(getAllAppointments)


export default router;