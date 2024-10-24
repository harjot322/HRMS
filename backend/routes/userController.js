import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler'; 
import jwt from 'jsonwebtoken'; // Ensure you import jwt
import bcrypt from 'bcryptjs'; // Import bcrypt

// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, department, position } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create user
  const user = new User({
    name,
    email,
    password,
    department,
    position,
  });

  // Save user to the database
  const createdUser = await user.save();

  // Send response
  res.status(201).json({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    token: generateToken(createdUser._id),
  });
});

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// Function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export { registerUser, authUser };
