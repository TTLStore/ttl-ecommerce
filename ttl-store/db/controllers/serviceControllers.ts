import { Service } from "@/types";
import dbConnect from "../dbConnect";
import { Services } from "../models";
import mongoose from "mongoose";

const serviceControllers = {
  async createService(service: Service) {
    try {
      await dbConnect();
      return await Services.create(service);
    } catch (error : any) {
      throw new Error(error);
    }
  },

  async getServiceById(serviceId: string) {
    try {
      await dbConnect();
      const id = new mongoose.Types.ObjectId(serviceId);
      return await Services.findById(id);
    }
    catch (error : any) {
      throw new Error(error);
    }
  },

  async getAllServices() {
    try {
      await dbConnect();
      return await Services.find();
    } catch (error : any) {
      throw new Error(error);
    }
  },

  async editService(serviceId: string, newService: Service) {
    try {
      await dbConnect();
      const id = new mongoose.Types.ObjectId(serviceId)
      const service = await Services.findById(id);
      if (!service) {
        throw new Error("Service not found");
      }

      return await Services.findByIdAndUpdate(id, newService, { new: true });

    } catch (error : any) {
      throw new Error(error);
    }
  }

};

export default serviceControllers;