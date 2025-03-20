import { Pools, PoolMemberships } from "../models";
import dbConnect from "../dbConnect";
import { PoolMemberRole } from "@/types";
import mongoose from "mongoose";
const poolControllers: Record<string, CallableFunction> = {
  handlePatchPool: async ({ userId, poolId }: { userId: string, poolId: string }) => {

    try {
      await dbConnect();
      const pool = await Pools.findById(poolId);
      if (!pool) {
        throw { message: "Pool not found", status: 404 };
      }

      // increase currentMembers by 1
      if (pool.currentMembers === pool.maxMembers) {
        throw { message: "Pool is full", status: 400 };
      }
      pool.currentMembers += 1;
      pool.members.push(userId);
      await pool.save();

      // add user to poolMemberships
      await PoolMemberships.create({ userId, poolId, role: PoolMemberRole.Member });
    } catch(error: any) {
    console.error("Error updating pool: ", error);
    throw error;
    }
  },

  /**
   * 
   * @param userId
   * @param poolType
   * @param page
   * @param limit
   * @returns 
   */
  handleGetPools: async ({ userId, poolType, page, limit }: { userId: string, poolType: string, page: number, limit : number }) => {
    try {
      await dbConnect();
      const pools = await Pools.aggregate([
        {
          $match: {
            // Exclude pools created by the user
            createdBy: { $ne: new mongoose.Types.ObjectId(userId)  },
            poolType: poolType,
            isPublic: true,
            isOpen: true,
            // Exclude pools where the user is already a member
            members: { $ne: new mongoose.Types.ObjectId(userId) },
            // Check if the pool is full
            $expr: { $lt: ["$currentMembers", "$maxMembers"]
             }
          }
        }
      ]);

    
      // Pagination logic
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedPools = pools.slice(startIndex, endIndex);
      
      // populate 
      const paginatedPoolsPopulated = await Pools.populate(paginatedPools, {
        path: 'createdBy', select : 'name image'
      })
      // Return paginated pools
      return paginatedPoolsPopulated;
    } catch (error: any) {
      console.error("Error fetching pools: ", error);
      throw error;
    }
  },

  handlePostPool: async ({ userId, body }: { userId: string, body: any }) => {
    try {
      await dbConnect();
      const newPool = new Pools({
        createdBy: userId,
        poolType: body.poolType,
        maxMembers: body.maxMembers,
        isOpen: body.isOpen,
        isPublic: body.isPublic,
        description: body.description,
        members : [userId]
      });
      const newPoolMemberShip = new PoolMemberships({
        userId,
        poolId: newPool._id,
        role: PoolMemberRole.Admin,
      });
      await newPoolMemberShip.save();
      await newPool.save();
    } catch (error: any) {
      console.error("Error creating pool: ", error);
      throw error;
    }
  }
};

export default poolControllers;