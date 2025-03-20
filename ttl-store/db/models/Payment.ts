import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  amount: { type: mongoose.Schema.Types.Double, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

const Payments = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payments;