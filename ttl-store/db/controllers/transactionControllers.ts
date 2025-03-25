import dbConnect from "../dbConnect";
import { Transactions } from "../models";
import mongoose from "mongoose";

const transactionController : Record<string, CallableFunction> = {
  updateTransaction : async ({
    transactionId
  }: {
    transactionId: string;
  }) => {
    try {
      dbConnect();
      await Transactions.findByIdAndUpdate(new mongoose.Types.ObjectId(transactionId), { transfered: true });
      return true;
    } catch (error : any) {
      throw {
        message: error.message || `Error updating transactionId: ${transactionId}`,
        status: error.status || 500,
      }
    }
  },

  getTransactions : async () => {
    try {
      dbConnect();
      return await Transactions.find({transfered: false}).populate("hostId", "stripe_connected_id");
    } catch (error : any) {
      throw {
        message: error.message || "Error fetching transactions",
        status: error.status || 500,
      }
    }
  }
}

export default transactionController;