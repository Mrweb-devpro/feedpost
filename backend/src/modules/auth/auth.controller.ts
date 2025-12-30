import { config } from "../../config/env.config";
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
  signup = asyncWrapper(async (req, res, next) => {
    const body = req.body;
    const signupResult = await this.authService.signup(body);
    const loginResult = await this.authService.login({
      email: signupResult.data.email,
      password: body.password,
    });

    const response: ApiResponse = {
      success: true,
      message: signupResult.message,
      data: loginResult,
    };

    res
      .cookie("jwt", loginResult.refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: config.node_Env === "production",
        maxAge: config.jwt.max_age,
      })
      .status(201)
      .json(response);
  });

  //--login
  login = asyncWrapper(async (req, res) => {
    const body = req.body;
    const result = await this.authService.login(body);

    const response: ApiResponse = {
      success: true,
      message: result.message,
      token: result.accessToken,
      data: result.data,
    };

    res
      .cookie("jwt", result.refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: config.node_Env === "production",
        maxAge: config.jwt.max_age,
      })
      .status(200)
      .json(response);
  });
}
