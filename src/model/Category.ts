import { Schema, model } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

export const Category = model("Category", CategorySchema);
