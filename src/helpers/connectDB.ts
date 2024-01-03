import Chalk from "chalk";
import mongoose from "mongoose";
import { databaseUrl } from "./env";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(databaseUrl);
      console.log(Chalk.green.bold("MongoDB Connected"));
    }
  } catch (error: any) {
    console.log(Chalk.green.bold("MongoDB Connection Failed"));
    console.log(error.message);
  }
};
