import mongoose from 'mongoose'


export const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Others'],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true
  },
  message: {
    type: String,
  }
}, { timestamps: true })

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

export default AppointmentModel;