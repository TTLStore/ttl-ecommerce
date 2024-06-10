import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  type: { type: String, required: true },
  providerAccountId: { type: String, required: true },
  access_token: { type: String, required: true },
  expires_at: { type: Date, required: true },
  scope: { type: String, required: true },
  token_type: { type: String, required: true },
  id_token: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Accounts = mongoose.models.Account || mongoose.model("Account", accountSchema) ;

export default Accounts;