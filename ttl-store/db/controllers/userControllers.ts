import { Users } from '@/db/models';
import dbConnect from "@/db/dbConnect";
const userControllers: Record<string, CallableFunction> = {
  /** 
   * This function handles the PATCH request to update a user's profile.
   * @param body - includes any fields that User includes
   */
  handlePatchUser: async ({userId, body} : {userId: string, body: Record<string, any>}) => {
    try {
      await dbConnect();
      const user = await Users.findById(userId);
      if (!user) {
        throw { message: "User not found", status: 404 };
      }
    
      const updatedUser = await Users.findOneAndUpdate({_id : userId}, body, { new: true });
      return { updatedUser };
    } catch (error : any) {
      console.error("Error updating user: ", error);
      throw error;
    }
  },
};

export default userControllers;