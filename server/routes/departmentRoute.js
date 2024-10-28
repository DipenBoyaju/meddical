import express from 'express'
import { createDepartment, deleteDepartment, editDepartment, getAllDepartment, getDepartmentById } from '../controllers/departmentController.js';

const router = express.Router()

router.route('/createDepartment').post(createDepartment);
router.route('/editDepartment/:id').patch(editDepartment);
router.route('/getAllDepartment').get(getAllDepartment);
router.route('/deleteDepartment/:id').delete(deleteDepartment)
router.route('/getDepartmentById/:id').get(getDepartmentById)

export default router