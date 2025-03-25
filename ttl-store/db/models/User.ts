import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
  phone: { type: String },
  emailVerified: { type: Date, default: null },
  stripe_connected_id: { type: String, default: null },
  country: { type: String, default: null },
}, { timestamps: true });

const Users = mongoose.models.User || mongoose.model("User", userSchema);

export default Users;