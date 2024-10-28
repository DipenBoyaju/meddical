import BlogModel from "../models/blodModel.js";

export const createBlog = async (req, res) => {
  const { image, category, author, title, description, views, likes } = req.body;

  try {
    const newBlog = new BlogModel({
      image,
      category,
      author,
      title,
      description,
      views: views || 0,
      likes: likes || 0,
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message: 'Blog created successfully'
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Failed to create blog', error });
  }

}

export const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, category, author, title, description, views, likes } = req.body;
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      id,
      {
        image,
        category,
        author,
        title,
        description,
        views,
        likes,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully'
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({
      message: 'Failed to update blog', error
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await BlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      message: 'Failed to delete blog', error
    });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();

    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      message: 'Failed to retrieve blogs', error
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      message: 'Failed to retrieve blog', error
    });
  }
};