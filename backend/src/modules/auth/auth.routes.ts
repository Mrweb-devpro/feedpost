import express from "express";
import { validateSchema } from "../../schema/validate.schema";
import { LoginSchema, SignupSchema } from "../../schema/auth.schema";
import { AuthController } from "./auth.module";

const authRouter = express.Router();

// SIGNUP ROUTER
authRouter.post("/signup", validateSchema(SignupSchema), AuthController.signup);
authRouter.post("/login", validateSchema(LoginSchema), AuthController.login);

export default authRouter;
