import { AppError } from "../../middlewares/errorhandler.middleware";
import { ApiResponse } from "../../types";
import { asyncWrapper } from "../../utils/asyncWrappers.util";
import { authService } from "./auth.service";

export class authControllers {
  private authService: authService;

  constructor(AuthService: authService) {
    this.authService = AuthService;
  }

  //-- generate refresh token
  //-- generate access token

  //-- oauth login

  //-- signup
  signup = asyncWrapper(async (req, res) => {
    try {
      const body = req.body;
      const result = await this.authService.signup(body);

      const response: ApiResponse = {
        success: true,
        message: result.message,
        data: result,
      };

      res.status(201).json(response);
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
  });

  //--login
}
