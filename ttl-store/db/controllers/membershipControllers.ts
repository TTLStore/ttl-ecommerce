import { PoolMemberships } from "../models";
import mongoose from "mongoose";
import dbConnect from "../dbConnect";
import { PoolMemberShip } from "@/types";

interface MemberShipControllers  {
  handleGetMemberships({ userId }: { userId: string}) : Promise<PoolMemberShip[]>,
  handleSingleMembership({ membershipId }: { membershipId: string}) : Promise<any>,
  // handleUpdateMembership({ userId } : { userId: string}) : Promise<boolean>
}

const membershipControllers: MemberShipControllers = {
  handleGetMemberships: async ({ userId }: { userId: string}) => {
    try {
      await dbConnect();
      let memberships = await PoolMemberships.find({ userId }, {
        poolId : 1, userId: 1, role : 1
      }).populate("poolId", "poolType")
      return memberships;
    } catch (error: any) {
      console.error("Error fetching memberships: ", error);
      throw error;
    }
  },

  handleSingleMembership: async ({ membershipId }: { membershipId: string}) => {
    try {
      await dbConnect();
      let membership = await PoolMemberships.findById(new mongoose.Types.ObjectId(membershipId)).populate({
        path: "poolId",
        populate : {
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

  // async handleUpdateMembership({ membershipId }) {
  //   try {
  //     await dbConnect();
  //     await PoolMemberships.findOneAndUpdate({userId : user})
  //   }
  // },

};

export default membershipControllers;