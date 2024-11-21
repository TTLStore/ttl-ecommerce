import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  price_per_user: { type: Number, required: true },
  provider: { type : String, required: true },
  max_users: { type: Number, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const Services = mongoose.models.Service || mongoose.model("Service", serviceSchema);