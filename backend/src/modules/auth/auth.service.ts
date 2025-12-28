import { prisma } from "../../../prisma";
import { PWD_SALT_ROUNDS } from "../../config/env.config";
import { AppError } from "../../middlewares/errorhandler.middleware";
import { SignupDataType } from "../../schema/auth.schema";
import bcrypt from "bcrypt";

export class authService {
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
      throw new AppError(409, "User with this email already exists");
    }

    if (usernameExists) {
      throw new AppError(409, "User with this username already exists");
    }

    //  hash the password
    const hashPwd = await bcrypt.hash(password, Number(PWD_SALT_ROUNDS));

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
}
