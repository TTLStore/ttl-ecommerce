import mongoose from "mongoose";

/**
 * Payment Schema
 * 
 * @description this schema defines the structure of a payment when a user pays for a subscription 
 */

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  amount: { type: mongoose.Schema.Types.Double, required: true },
  currentcy: { type: String, required: true },
  status: { type: String, required: true, enum: ["pending", "success", "failed", "refunded"], default : "pending" },
}, { timestamps: true });

const Payments = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payments;