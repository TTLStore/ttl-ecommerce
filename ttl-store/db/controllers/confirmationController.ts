import { HostConfirmations,  Pools,  UserConfirmations } from "../models";
import dbConnect from "../dbConnect";
import Transactions from "../models/Transaction";
import { addDays } from "@/libs/date";
const confirmationController : Record<string, CallableFunction>  = {
  hostConfirmation : async ({
    hostId,
    poolId,
    memberId
  } : {
    hostId: string;
    poolId: string;
    memberId: string;
  }) => {
    try {
      dbConnect();
      const hostConfirm = await HostConfirmations.create({ hostId, poolId, memberId });
      return hostConfirm._id;
    } catch (error : any) {
      throw {
        message: error.message || "Error creating host confirmation",
        status: error.status || 500,
      }
    }
    
  },

  userConfirmation : async ({
    userId,
    poolId,
    amount
  } : {
    userId: string;
    poolId: string;
    amount: number;
  }) => {
    try {
      dbConnect();
      const userConfirm = new UserConfirmations({ userId, poolId });
      await userConfirm.save();
      await userConfirm.populate("poolId");


      const transfaction = await Transactions.create({
        poolId,
        hostId: userConfirm.poolId.hostId,
        userId,
        eligibleDate: addDays(new Date(), 30),
        amount: amount,
        platformFee: 0.1 * amount,
      })
      return transfaction._id;
    } catch (error : any) {
      throw {
        message: error.message || "Error creating user confirmation",
        status: error.status || 500,
      }
    }
  }
}