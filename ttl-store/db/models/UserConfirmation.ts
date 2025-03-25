import mongoose from "mongoose";

const userConfirmationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
}, { timestamps: true });

const UserConfirmations = mongoose.models.UserConfirmation || mongoose.model("UserConfirmation", userConfirmationSchema);

export default UserConfirmations;