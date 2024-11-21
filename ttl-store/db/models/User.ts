import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
  phone: { type: String },
  emailVerified: { type: Date, default: null },
  password: { type: String },
}, { timestamps: true });

const Users = mongoose.models.User || mongoose.model("User", userSchema);

export default Users;