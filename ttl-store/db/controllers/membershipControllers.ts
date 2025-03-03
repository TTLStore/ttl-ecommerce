import { PoolMemberships } from "../models";
import mongoose from "mongoose";
import dbConnect from "../dbConnect";

const membershipControllers: Record<string, CallableFunction> = {
  handleGetMemberships: async ({ userId }: { userId: string }) => {
    try {
      await dbConnect();
      const memberships = await PoolMemberships.find({ userId });
      return memberships;
    } catch (error: any) {
      console.error("Error fetching memberships: ", error);
      throw error;
    }
  },

  handleSingleMembership: async ({ membershipId }: { membershipId: string }) => {
    try {
      await dbConnect();
      const membership = await PoolMemberships.findById(new mongoose.Types.ObjectId(membershipId));
      return membership;
    } catch (error: any) {
      console.error("Error fetching membership: ", error);
      throw error;
    }
  }
};

export default membershipControllers;