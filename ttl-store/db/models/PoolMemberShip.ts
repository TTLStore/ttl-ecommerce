import { PoolMemberRole } from "@/types";
import mongoose from "mongoose";

const poolMembershipSchema = new mongoose.Schema({
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  leftAt: { type: Date },
  role: {
    type: String,
    enum: PoolMemberRole,
  },
  confirmedPayment: { type: Boolean, default: false }, // true when user's payment is confirmed
  verified: { type: Boolean, default: false }, // true if host and user has confirmed
}, { timestamps: true });

const PoolMemberships = mongoose.models.PoolMembership || mongoose.model("PoolMembership", poolMembershipSchema);

export default PoolMemberships;