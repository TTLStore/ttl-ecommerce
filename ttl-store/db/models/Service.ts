import mongoose from "mongoose";

/**
* @price - Price of the subscription
* @pricePerMember - Price for each member to pay - this includes platform's Fee and subscription fee member has to pay back to the host. This price is used to create Stripe Price object.
* @platformFee - the amount platform will charge for each member. This amount is used when transfer fund to the host
* @max_users - the total number of members that allows on this subscription by service provider subtract by 1 - the host
*/
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: mongoose.Schema.Types.Double, required: true },
  pricePerMember: {type: mongoose.Schema.Types.Double, require: true},
  platformFee: {type : mongoose.Schema.Types.Double, require: true},
  stripePriceId: { type: String, required: true },
  stripeProductId: {type : String, required: true },
  currencyType: { type: String, required: true },
  provider: { type : String, required: true },
  max_users: { type: Number, required: true },
  description: { type: String },
}, { timestamps: true });

const Services = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Services;