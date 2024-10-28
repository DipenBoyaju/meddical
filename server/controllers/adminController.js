import bcrypt from 'bcryptjs'
import AdminModel from '../models/adminModel.js';
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
  const { email, password, image } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const existingUser = await AdminModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const newAdmin = new AdminModel({
      email,
      password: hashedPassword,
      image,
    })

    await newAdmin.save();

    res.status(201).json({
      success: true,
      message: 'Admin Created'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(200).json({
        success: false,
        message: 'All fields are required'
      })
    }

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        success: false,
        message: 'Admin not found'
      })
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect credentials'
      });
    }

    const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'Strict'
    });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      admin,
      token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
}

export const editPassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    if (!password) {
      return res.status(200).json({
        success: false,
        message: 'Field should not be empty'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await AdminModel.findByIdAndUpdate(id,
      { $set: { password: hashedPassword } },
      { new: true }
    )
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: 'Admin with the provided email not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Password updated successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error updating password',
      error: error.message,
    });
  }
}

export const changePicture = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  try {
    const admin = await AdminModel.findByIdAndUpdate(id,
      { $set: { image } },
      { new: true }
    )
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: 'Admin not found',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Image updated successfully',
      admin
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error updating image',
      error: error.message,
    });
  }
}