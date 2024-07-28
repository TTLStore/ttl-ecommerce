import mongoose from "mongoose";
export const POOL_ROLES = ["admin", "member"]

const poolMembershipSchema = new mongoose.Schema({
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  joinedAt: { type: Date, default: Date.now },
  leftAt: { type: Date },
  role: {
    type: String,
    enum: POOL_ROLES,
    default: "member",
  },
});

const PoolMemberships = mongoose.models.PoolMembership || mongoose.model("PoolMembership", poolMembershipSchema);

export default PoolMemberships;