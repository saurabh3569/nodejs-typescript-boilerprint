import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const validateRequest = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const messages = error.details.map((d) => d.message);
      res.status(400).json({ errors: messages });
      return;
    }

    next();
  };
};

export default validateRequest;
