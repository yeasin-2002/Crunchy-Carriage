import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    image: { type: String, required: true },
    bgImg: { type: String },
    stock: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

export const Product = model("Product", ProductSchema);
