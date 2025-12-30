//
import dotenv from "dotenv";
dotenv.config();

const config = {
  node_Env: process.env.NODE_ENV!,
  jwt: {
    refresh_secret: process.env.REFRESH_TOKEN_SECRET!,
    access_secret: process.env.ACCESS_TOKEN_SECRET!,
    refresh_ExpIn: process.env.REFRESH_TOKEN_EXPIRESIN!,
    access_ExpIn: process.env.ACCESS_TOKEN_EXPIRESIN!,
    max_age: Number(process.env.MAX_AGE!) * 24 * 60 * 60 * 1000, // MAX_AGE DAYS,
  },
  bcrypt: { salt_rounds: process.env.PWD_SALT_ROUNDS! },
};

export { config };
