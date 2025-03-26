import { Service } from "@/types";
import dbConnect from "../dbConnect";
import { Services } from "../models";
import mongoose from "mongoose";
import type { ServiceZodType } from "@/schema/service.schema";
interface ServiceControllers {
  /**
   * Creates a new service.
   * @param service - The service object to create.
   * @returns The created service.
   */
  createService: (service: ServiceZodType) => Promise<ServiceZodType>;

  /**
   * Retrieves a service by its ID.
   * @param serviceId - The ID of the service to retrieve.
   * @returns The found service.
   */
  getServiceById: (serviceId: string) => Promise<ServiceZodType | null>;

  /**
   * Retrieves all services.
   * @returns An array of services.
   */
  getAllServices: () => Promise<ServiceZodType[]>;

  /**
   * Updates an existing service.
   * @param serviceId - The ID of the service to update.
   * @param newService - The updated service object.
   * @returns The updated service.
   */
  editService: (serviceId: string, newService: ServiceZodType) => Promise<ServiceZodType | null>;
}


const serviceControllers : ServiceControllers = {
  async createService(service: ServiceZodType) {
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

  async editService(serviceId: string, newService: ServiceZodType) {
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