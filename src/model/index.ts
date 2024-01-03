import { connectDB } from "@/helpers";
import chalk from "chalk";
import mongoose from "mongoose";

import { Category } from "./Category";
import { Order } from "./Orders";
import { Product } from "./Product";
import { User } from "./User";

const db = {
  Category,
  Order,
  Product,
  User,
  connect: () => connectDB(),
  disconnect: () => mongoose.connection.close(),
};

export { Category, Order, Product, User };
export default db;
