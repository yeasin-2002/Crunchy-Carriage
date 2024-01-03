import { ErrorResponse, successResponse } from "@/helpers";
import db from "@/model";
import bcrypt from "bcrypt";
import chalk from "chalk";

export const POST = async (res: Request) => {
  try {
    const { email, password } = await res.json();
    if (!(email && password))
      return ErrorResponse(401, `Missing email or password`);

    await db.connect();
    const findUser = await db.User.findOne({ email });
    if (!findUser) return ErrorResponse(401, `User not found`);

    const matchPassword = await bcrypt.compare(password, findUser.password);
    if (!matchPassword) return ErrorResponse(401, `Invalid password`);

    // authCookies.set();
    return successResponse({
      message: "User logged in successfully",
      data: findUser,
    });
  } catch (error: any) {
    console.log(chalk.bgRed("Error"), error.message);
    return ErrorResponse();
  } finally {
    db.disconnect();
  }
};
