import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
  emailVerified: { type: Date},
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Users = mongoose.models.User || mongoose.model("User", userSchema);

export default Users;