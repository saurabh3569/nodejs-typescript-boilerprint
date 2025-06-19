import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { throwError } from "../utils/throw-error";
import { env } from "../configs/env.config";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants/message.constant";

// Register a new user
const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throwError(ERROR_MESSAGES.USER_EXISTS, 409);
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: SUCCESS_MESSAGES.REGISTER_SUCCESS });
  } catch (err) {
    next(err);
  }
};

// Login existing user
const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      throwError(ERROR_MESSAGES.USER_NOT_FOUND, 404);
      return;
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throwError(ERROR_MESSAGES.INVALID_CREDENTIALS, 400);
      return;
    }

    // Create JWT
    const token = jwt.sign({ userId: user._id }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
      data: { token, user: { name: user.name, email: user.email } },
    });
  } catch (err) {
    next(err);
  }
};

// Get user details
const getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = (req as any).user?.id;

  try {
    // Find user
    const user = await User.findById(userId);
    if (!user) {
      throwError(ERROR_MESSAGES.USER_NOT_FOUND, 404);
      return;
    }

    res.status(200).json({
      message: SUCCESS_MESSAGES.GET_USER_SUCCESS,
      data: { user: { name: user.name, email: user.email } },
    });
  } catch (err) {
    next(err);
  }
};

export { register, login, getUser };
