import DepartmentModel from "../models/departmentModel.js"



export const createDepartment = async (req, res) => {
  const { name, description, days, doctors, timeSlots, image } = req.body;
  try {
    if (!name || !description || !days || !timeSlots) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const existingDepartment = await DepartmentModel.findOne({ name });
    if (existingDepartment) {
      return res.status(400).json({
        success: false,
        message: 'Department with this name already exists'
      });
    }
    const newDepartment = new DepartmentModel({
      name,
      description,
      operationTime: {
        days,
        timeSlots,
      },
      doctors,
      image,
    });

    await newDepartment.save();

    return res.status(201).json({
      success: true,
      message: 'Department created successfully',
    });
  } catch (error) {
    console.error("Error creating department:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const editDepartment = async (req, res) => {
  const { id } = req.params;
  const { name, description, days, doctors, timeSlots, image } = req.body;

  try {
    if (!name || !description || !days || !timeSlots) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }
    const updatedDepartment = await DepartmentModel.findByIdAndUpdate(
      id,
      {
        name, description, operationTime: {
          days,
          timeSlots,
        }, doctors, image
      },
      { new: true, runValidators: true }
    );

    if (!updatedDepartment) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Department updated successfully!",
      data: updatedDepartment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const deleteDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDepartment = await DepartmentModel.findByIdAndDelete(id);

    if (!deletedDepartment) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Department deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const getAllDepartment = async (req, res) => {
  try {
    const services = await DepartmentModel.find();

    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const getDepartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const singleDepartment = await DepartmentModel.findById(id);

    if (!singleDepartment) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: singleDepartment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

