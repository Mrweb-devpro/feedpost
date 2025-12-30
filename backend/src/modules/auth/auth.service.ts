import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";

import { prisma } from "../../../prisma";
import { config } from "../../config/env.config";
import { AppError } from "../../middlewares/errorhandler.middleware";
import { LoginDataType, SignupDataType } from "../../schema/auth.schema";

export class authService {
  private generateToken(
    type: "access" | "refresh",
    {
      email,
      id,
      role,
    }: {
      email: string;
      id: string;
      role: string;
    }
  ) {
    const secret = config.jwt[`${type}_secret`] as string;
    return jwt.sign({ email, id, role }, secret, {
      expiresIn: config.jwt[`${type}_ExpIn`],
    } as SignOptions);
  }

  //-- signup service
  async signup(data: SignupDataType) {
    const { interests, email, password, terms, username, firstname, lastname } =
      data;

    // check if user with the email or username exists
    const [emailExists, usernameExists] = await Promise.all([
      prisma.authUser.findUnique({
        where: { email },
        select: { id: true },
      }),
      prisma.user.findUnique({
        where: { username },
        select: { id: true },
      }),
    ]);

    if (emailExists) {
      throw new AppError(
        409,
        "This email is already registered by another user"
      );
    }

    if (usernameExists) {
      throw new AppError(409, "This username is already taken");
    }

    //  hash the password
    const hashPwd = await bcrypt.hash(
      password,
      Number(config.bcrypt.salt_rounds)
    );

    // construct the fullname
    const fullName =
      !firstname && !lastname ? null : `${firstname || ""} ${lastname || ""}`;

    // create the user
    const user = await prisma.authUser.create({
      data: {
        email,
        password: hashPwd,
        terms,
        user: {
          create: {
            username,
            fullName,
            firstname,
            lastname,
            interests,
          },
        },
      },
      include: { user: true },
    });

    // return the response
    return {
      message: "Signup was successful",
      data: user,
    };
  }
  //-- login service
  async login(data: LoginDataType) {
    const { email, password } = data;

    // check data
    if (!email || !password)
      throw new AppError(401, "Both email and password are required");

    // check if user with email exist
    const foundUser = await prisma.authUser.findUnique({
      where: { email },
      include: { user: true },
      omit: {
        provider: true,
        providerId: true,
        refreshToken: true,
      },
    });

    if (!foundUser)
      throw new AppError(404, "No account with this email was found");

    // check password is correct
    if (!(await bcrypt.compare(password, foundUser.password as string)))
      throw new AppError(401, "Invalid credentials");

    // generate needed tokens
    const accessToken = this.generateToken("access", foundUser);
    const refreshToken = this.generateToken("refresh", foundUser);

    // update the users record with the new data
    await prisma.authUser.update({
      where: { id: foundUser.id },
      data: {
        refreshToken,
      },
    });

    const { password: pwdHash, ...userData } = foundUser;

    return {
      accessToken,
      refreshToken,
      data: userData,
      message: "✅Login Successful",
    };
  }
}
