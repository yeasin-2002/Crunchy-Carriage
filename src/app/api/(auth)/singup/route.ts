import { ErrorResponse, successResponse } from "@/helpers";
import db from "@/model";
import bcrypt from "bcrypt";
import chalk from "chalk";

export const POST = async (req: Request) => {
  try {
    const { email, password, name } = await req.json();

    if (!(email && password && name))
      return ErrorResponse(401, `Missing email, password or name`);

    await db.connect();
    const checkUser = await db.User.findOne({ email: email });
    if (checkUser) return ErrorResponse(401, `User already exist`);

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({
      email,
      name,
      password: hashedPassword,
      username: name?.toLocaleLowerCase().split(" ").join("."),
    });

    if (!newUser) return ErrorResponse(401, `Unable to create  user`);
    return successResponse({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error: any) {
    console.log(chalk.bgRed("Error"), error.message);
    return ErrorResponse(error?.message);
  } finally {
    db.disconnect();
  }
};

export const GET = async () => {
  try {
    await db.connect();
    const allUser = await db.User.find({});
    return successResponse({
      message: `Found ${allUser?.length} users`,
      data: allUser,
    });
  } catch (error: any) {
    console.log(chalk.bgRed("Error"), error.message);
    return ErrorResponse();
  } finally {
    await db.disconnect();
  }
};
