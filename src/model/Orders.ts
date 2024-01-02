import { Schema, model } from "mongoose";



const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    name: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);
