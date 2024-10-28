import mongoose from "mongoose";

export const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  operationTime: {
    days: {
      type: [String],
      required: true,
    },
    timeSlots: {
      type: [[String]],
      required: true,
    },
  },
  doctors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  }],
  image: {
    type: String,
    default: "https://res.cloudinary.com/dyrzsqvx2/image/upload/v1729695985/xdlzbznthzj5qralg8ea.webp"
  }
}, { timestamps: true })

const DepartmentModel = mongoose.model('Department', departmentSchema);

export default DepartmentModel;