import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    name: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Order = models.Order || model("Order", OrderSchema);
