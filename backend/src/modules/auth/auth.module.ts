import { authControllers } from "./auth.controller";
import { authService } from "./auth.service";

const AuthService = new authService();

export const AuthController = new authControllers(AuthService);
