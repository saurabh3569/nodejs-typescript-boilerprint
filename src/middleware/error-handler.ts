import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error";
import { ERROR_MESSAGES } from "../constants/message.constant";

const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;

  console.error(`[ERROR] ${req.method} ${req.path} →`, err);

  res.status(status).json({
    success: false,
    message,
  });
};

export default errorHandler;
