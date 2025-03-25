import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  eligibleDate: { type: Date, required: true }, // Date when the user is eligible to receive the amount
  amount: { type: Number, required: true },
  platformFee: { type: Number, required: true },
  transfered: { type: Boolean, default: false },
}, { timestamps: true });

const Transactions = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transactions;