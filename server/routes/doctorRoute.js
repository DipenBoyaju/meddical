import express from 'express'
import { addDoctor, deleteDoctor, editDoctor, getAllDoctor, getDoctorById } from '../controllers/doctorController.js';

const router = express.Router()

router.route('/addDoctor').post(addDoctor);
router.route('/editDoctor/:id').patch(editDoctor);
router.route('/getAllDoctor').get(getAllDoctor);
router.route('/deleteDoctor/:id').delete(deleteDoctor)
router.route('/getDoctorById/:id').get(getDoctorById)

export default router