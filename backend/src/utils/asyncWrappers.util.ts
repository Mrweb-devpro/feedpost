import type { NextFunction, Request, Response } from "express";
import { AppError } from "../middlewares/errorhandler.middleware";

type AsyncWrapperType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export function asyncWrapper(fn: AsyncWrapperType): AsyncWrapperType {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error instanceof AppError) {
        res
          .status(error.statusCode)
          .json({ success: false, message: error.message });
      } else
        res.status(500).json({
          success: false,
          error,
          message: "Something went wrong. Please try again.",
        });
    }
  };
  // return fn;
}
