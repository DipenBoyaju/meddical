import mongoose from "mongoose";


export const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'https://img.freepik.com/free-vector/doctor-with-medical-service-icons_24877-51508.jpg'
  }
}, { timestamps: true })

const ServiceModel = mongoose.model('Service', serviceSchema)

export default ServiceModel;