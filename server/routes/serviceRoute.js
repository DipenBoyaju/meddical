import express from 'express'
import { createService, deleteService, editService, getAllServices } from '../controllers/serviceController.js'


const router = express.Router()

router.route('/createService').post(createService);
router.route('/editService/:id').patch(editService);
router.route('/getAllServices').get(getAllServices);
router.route('/deleteService/:id').delete(deleteService)

export default router