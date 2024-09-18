import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Payments = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payments;