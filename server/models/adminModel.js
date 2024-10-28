import mongoose from 'mongoose'


export const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Admin"
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
  },
  image: {
    type: String,
    default: 'https://res.cloudinary.com/dyrzsqvx2/image/upload/v1729695985/xdlzbznthzj5qralg8ea.webp'
  }
})

const AdminModel = mongoose.model('admin', adminSchema)

export default AdminModel;
