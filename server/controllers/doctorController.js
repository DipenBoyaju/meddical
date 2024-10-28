import DoctorModel from "../models/doctorModel.js"

export const addDoctor = async (req, res) => {
  try {
    const { name, contact, joinDate, specialization, department, days, image } = req.body;


    if (!name || !contact || !specialization || !joinDate) {
      return res.status(400).json({
        success: false,
        message: 'Department not found',
      });
    }

    const newDoctor = new DoctorModel({
      name,
      contact,
      joinDate,
      specialization,
      department,
      availability: { days, timeSlots: req.body.timeSlots },
      image: image
    });

    const savedDoctor = await newDoctor.save();

    res.status(201).json({
      success: true,
      message: 'Doctor added successfully',
      doctor: savedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding doctor: ' + error.message,
    });
  }
};

export const editDoctor = async (req, res) => {

  const { id } = req.params;
  const { name, contact, joinDate, specialization, department, days, image, timeSlots } = req.body;

  try {
    if (!name || !contact || !specialization || !joinDate) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    const updatedDoctor = await DoctorModel.findByIdAndUpdate(
      id,
      {
        name, contact, joinDate, specialization, department, availability: { days, timeSlots }, image,
      },
      { new: true, runValidators: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Doctor updated successfully',
      doctor: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating doctor: ' + error.message,
    });
  }
};


export const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDoctor = await DoctorModel.findByIdAndDelete(id);

    if (!deletedDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const getAllDoctor = async (req, res) => {
  try {
    const doctor = await DoctorModel.find();

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const singleDoctor = await DoctorModel.findById(id);

    if (!singleDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: singleDoctor,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};