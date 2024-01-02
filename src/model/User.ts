import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    order: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
