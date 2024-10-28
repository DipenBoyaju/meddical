import express from 'express'
import { createBlog, deleteBlog, editBlog, getAllBlogs, getBlogById } from '../controllers/blogController.js'


const router = express.Router()

router.route('/createBlog').post(createBlog)
router.route('/editBlog/:id').patch(editBlog)
router.route('/deleteBlog/:id').post(deleteBlog)
router.route('/getAllBlog').get(getAllBlogs)
router.route('/getBlogById/:id').get(getBlogById)

export default router