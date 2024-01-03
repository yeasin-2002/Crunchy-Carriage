import { ErrorResponse, successResponse } from "@/helpers";
import db from "@/model";

export const GET = async (req: Request) => {
  try {
    await db.connect();
    const allProduct = await db.Product.find();
    return await successResponse(allProduct);
  } catch (error: any) {
    return ErrorResponse(error?.message);
  } finally {
    db.disconnect();
  }
};
