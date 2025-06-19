import { AppError } from "./app-error";

export const throwError = (msg: string, status = 500): never => {
  throw new AppError(msg, status);
};
