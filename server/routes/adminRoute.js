import express from 'express'
import { changePicture, editPassword, login, logout, signUp } from '../controllers/adminController.js'


const router = express.Router()

router.route('/signup').post(signUp)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/changePassword/:id').patch(editPassword)
router.route('/changeImage/:id').patch(changePicture)

export default router