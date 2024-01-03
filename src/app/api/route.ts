import { ErrorResponse, successResponse } from "@/helpers";
import db from "@/model";

export const GET = async () => {
  try {
    await db.connect();
    const allUser = await db.User.find();
    return successResponse(allUser);
  } catch (error: any) {
    console.log(error.message);
    return ErrorResponse();
  }
};
