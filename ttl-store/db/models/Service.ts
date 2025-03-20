import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Double, required: true },
  currencyType: { type: String, required: true },
  provider: { type : String, required: true },
  max_users: { type: Number, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const Services = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Services;