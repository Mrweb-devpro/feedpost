import type { NextFunction, Request, Response } from "express";

type AsyncWrapperType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export function asyncWrapper(fn: AsyncWrapperType): AsyncWrapperType {
  // return async (req, res, next) => {
  //   try {
  //     await fn(req, res, next);
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  return fn;
}
