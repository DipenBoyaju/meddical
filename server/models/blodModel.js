import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
}, { timestamps: true, });

const BlogModel = mongoose.model('Blog', blogSchema);

export default BlogModel
