import { NextFunction, Response, Request } from "express";
import { ZodError, ZodSchema } from "zod";

export function validateSchema(Schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      Schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formatted = error?.issues?.map((err: any) => ({
          path: err.path.join("."),
          message: err.message,
        }));
        return res.status(400).json({
          success: false,
          messsage: "Request body data does not match with schema",
          errors: formatted,
        });
      }
      next(error);
    }
  };
}
