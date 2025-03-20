import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  identifier: String,
  token: String,
  expires: Date
});

const VerificationTokens = mongoose.models.verification_token || mongoose.model('verification_token', tokenSchema);

export default VerificationTokens;