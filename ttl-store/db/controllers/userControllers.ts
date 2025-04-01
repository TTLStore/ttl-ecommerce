import { Users } from '@/db/models';
import dbConnect from "@/db/dbConnect";
import mongoose from 'mongoose';
import type { User } from '@/types';
interface UserController {
  /** 
   * This function handles the PATCH request to update a user's profile.
   * @param body - includes any fields that User includes
   */
  handlePatchUser:  ({ userId, body }: { userId: string, body: Record<string, any> }) => Promise<User>,

  /**
   * Get user
   * @param userId user id 
   * @returns User object
   */
  handleGetUser: (userId : string) => Promise<User>,
}

const userControllers: UserController = {

  handlePatchUser: async ({ userId, body }: { userId: string, body: Record<string, any> }) => {
    try {
      await dbConnect();

      const user = await Users.findById(userId);
      if (!user) {
        throw { message: "User not found", status: 404 };
      }

      const updatedUser = await Users.findOneAndUpdate({ _id: userId }, body, { new: true });
      return updatedUser;
    } catch (error: any) {
      throw {
        message: error.message || "Unknown Error updating user",
        status: error.status || 500
      };
    }
  },

  handleGetUser: async (userId) => {
    try {
      await dbConnect();
      const user = await Users.findById(userId);
      if (!user) {
        throw { message: "User not found", status: 404 };
      }
      return user;
    } catch (error: any) {
      throw {
        message: error.message || "Unknown Error getting user",
        status: error.status || 500
      };
    }
  }
};

export default userControllers;