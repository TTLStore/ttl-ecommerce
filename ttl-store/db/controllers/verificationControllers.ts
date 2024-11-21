import { Users, VerificationTokens } from "../models";
import dbConnect from "../dbConnect";
import { generateRandom32BitsString } from "@/utils";
const verificationControllers : Record<string, CallableFunction> = {
  createVerificationToken: async (userId : string) => {
    try {
      await dbConnect();
      const verificationToken = new VerificationTokens({
        identifier: userId,
        token: generateRandom32BitsString(),
        expires: new Date(Date.now()+ 1000 * 60 * 60 * 24), // 24 hours
      });
      await verificationToken.save();
      return verificationToken.token;
    } catch (error) {
      console.log("Error creating verification token", error);
      throw error;
    }
  },
  verifyToken: async (token : string) => {
    try {
      await dbConnect();
      console.log("Verifying token", token);
      const verificationToken = await VerificationTokens.findOne({ token });
      if (!verificationToken) {
        return false; 
      }

      if (verificationToken.expires < new Date()) {
        return false;
      }
      // update the user's emailVerified field to true
      const userId = verificationToken.identifier as string;
      // delete the token after it's verified
      await VerificationTokens.deleteOne({ token });
      // REPLACE with update user's emailVerified field to current date
      await Users.findByIdAndUpdate(userId, { emailVerified: new Date() });

      return true;
    } catch (error) {
      console.log("Error verifying token", error);
      throw error;
    }
  }
}

export default verificationControllers;