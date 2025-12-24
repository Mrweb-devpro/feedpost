// const { prisma ("../prisma/index");
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
    const body = req.body;

    const result = await this.authService.signup(body);

    const response: ApiResponse = {
      success: true,
      message: result.message,
      data: result,
    };

    res.status(201).json(response);
  });

  //--login
}
