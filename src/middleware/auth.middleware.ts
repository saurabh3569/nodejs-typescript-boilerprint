import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { throwError } from "../utils/throw-error";
import { env } from "../configs/env.config";
import { ERROR_MESSAGES } from "../constants/message.constant";

interface JwtPayload {
  userId: string;
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throwError(ERROR_MESSAGES.UNAUTHORIZED_ACCESS, 401);
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    (req as any).user = { id: decoded.userId };
    next();
  } catch (err) {
    throwError(ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
  }
};
