import { MAX_POOL_MEMBERS, SERVICES } from "@/constants";
import mongoose from "mongoose";

const poolSchema = new mongoose.Schema({
  poolType: {
    enum: SERVICES,
    type: String,
    required: true,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
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
  }
});

const Pools = mongoose.models.Pool || mongoose.model("Pool", poolSchema);

export default Pools;