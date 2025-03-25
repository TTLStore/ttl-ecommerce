import { MAX_POOL_MEMBERS, SERVICES } from "@/constants";
import mongoose from "mongoose";

const poolSchema = new mongoose.Schema({
  poolType: {
    type: String,
    required: true,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  maxMembers: {
    type: Number,
    default: MAX_POOL_MEMBERS,
    required: true,
    min: 1,
    max: MAX_POOL_MEMBERS,
  },
  currentMembers: {
    type: Number,
    default: 1,
    min: 1,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

const Pools = mongoose.models.Pool || mongoose.model("Pool", poolSchema);

export default Pools;