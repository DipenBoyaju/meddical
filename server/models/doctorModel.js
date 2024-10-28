import mongoose from 'mongoose'

export const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  availability: {
    days: {
      type: [String],
      required: true,
    },
    timeSlots: {
      type: [[String]],
      required: true,
    },
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/dyrzsqvx2/image/upload/v1729695921/s8ev3gpitl8pe2g4e2oc.webp"
  }
}, { timestamps: true })

const DoctorModel = mongoose.model('Doctor', doctorSchema);

export default DoctorModel;