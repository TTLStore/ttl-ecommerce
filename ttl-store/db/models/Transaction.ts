import mongoose from "mongoose";

/**
 * Transaction Schema
 * 
 * @description this schema defines the structure of a transaction in Stripe
 * when a user is eligible to receive the money from members of the pool
 */
const transactionSchema = new mongoose.Schema({
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  eligibleDate: { type: Date, required: true }, // Date when the user is eligible to receive the amount
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: "usd" },
  platformFee: { type: Number, required: true },
  transfered: { type: Boolean, default: false },
}, { timestamps: true });

const Transactions = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transactions;