import mongoose from "mongoose";

const hostConfirmationSchema = new mongoose.Schema({
  hostId : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  poolId : { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  memberId : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

const HostConfirmations = mongoose.models.HostConfirmation || mongoose.model("HostConfirmation", hostConfirmationSchema);

export default HostConfirmations;