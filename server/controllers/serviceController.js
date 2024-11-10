import ServiceModel from "../models/serviceModel.js";

export const createService = async (req, res) => {
  const { title, description, image } = req.body;
  try {
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newService = new ServiceModel({
      title,
      description,
      image
    });

    await newService.save();

    res.status(201).json({
      success: true,
      message: "Service created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const editService = async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  try {
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const updatedService = await ServiceModel.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service updated successfully!",
      data: updatedService,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await ServiceModel.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await ServiceModel.find();

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
};

export const getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const singleService = await ServiceModel.findById(id);

    if (!singleService) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: singleService,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchService = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({
      success: false,
      message: 'No query parameter provided',
    });
  }

  try {
    const services = await ServiceModel.find({
      title: { $regex: query, $options: 'i' },
    });

    return res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
