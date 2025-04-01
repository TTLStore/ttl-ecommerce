import { PoolMemberships } from "../models";
import mongoose from "mongoose";
import dbConnect from "../dbConnect";
import { PoolMemberShip } from "@/types";

interface MemberShipControllers {
  handleGetMemberships({ userId }: { userId: string }): Promise<PoolMemberShip[]>,
  handleSingleMembership({ membershipId }: { membershipId: string }): Promise<any>,

  /**
   * Update membership,
   * if membershipId is provided, then it uses membershipId to update
   * otherwise it uses a pair of userId and poolId to update membership
   * @param membershipId key to find membership
   * @param { userId, poolId } key to find membership
   */
  handleUpdateMembership(
    { membershipId, userId, poolId, update} : 
    { membershipId?: string, 
      userId?: string, 
      poolId?: string, 
      update : any }): Promise<boolean>
}

const membershipControllers: MemberShipControllers = {
  handleGetMemberships: async ({ userId }: { userId: string }) => {
    try {
      await dbConnect();
      let memberships = await PoolMemberships.find({ userId }, {
        poolId: 1, userId: 1, role: 1
      }).populate("poolId", "poolType")
      return memberships;
    } catch (error: any) {
      console.error("Error fetching memberships: ", error);
      throw error;
    }
  },

  handleSingleMembership: async ({ membershipId }: { membershipId: string }) => {
    try {
      await dbConnect();
      let membership = await PoolMemberships.findById(new mongoose.Types.ObjectId(membershipId)).populate({
        path: "poolId",
        populate: {
          path: "members",
          select: "name image email",
          model: "User"
        }
      })

      return membership;
    } catch (error: any) {
      console.error("Error fetching membership: ", error);
      throw error;
    }
  },

  handleUpdateMembership: async ({ membershipId, userId, poolId , update}) => {
    try {

      await dbConnect();
      if (membershipId)
        await PoolMemberships.findByIdAndUpdate(membershipId, update);
      else if (userId && poolId)
        await PoolMemberships.findOneAndUpdate({
          poolId, userId: userId
        }, update);
      else {
        throw "ether memsberhipId or (userId and poolId) must be provided"
      }
      return true;
    } catch (error: any) {
      console.error(`cannot update membership: ${error}`);
      throw {
        message: `cannot update membership: ${error}`,
        status: 400
      };
    }
  },

};

export default membershipControllers;