import { successResponse } from "@/helpers";
import { connectDB } from "@/helpers/connectDB";
import db from "@/model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    // const allUser = await db.User.find();
    return successResponse({ message: "Success" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed" },
      {
        status: 500,
      }
    );
  }
};
