import { HTTP_STATUS } from "@/constants";
import { NextRequest } from "next/server";
import serviceControllers from "@/db/controllers/serviceControllers";
import { ServiceSchema } from "@/schema/service.schema";
// Get service by id
export async function GET(
  request: NextRequest,
  {params}:{ params: Promise<{ serviceId: string }>}
) {
  const { serviceId } = await params;
  if (!serviceId) {
    return new Response("Invalid serviceId", { status: HTTP_STATUS.BAD_REQUEST });
  }

  try {
    // get service by id
    const service = await serviceControllers.getServiceById(serviceId);
    return new Response(JSON.stringify(service), { status: HTTP_STATUS.OK });
  } catch (error : any) {
    return new Response(`Internal server error, \n ${error}`, { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
}

// Edit service
export async function PUT(
  request: NextRequest, 
  {params}:{ params: Promise<{ serviceId: string }>}
) {
  const { serviceId } = await params;
  if (!serviceId) {
    return new Response("Invalid serviceId", { status: HTTP_STATUS.BAD_REQUEST });
  }
  
  const body = await request.json();
  const serviceParseResult = ServiceSchema.safeParse(body)
  if (!serviceParseResult.success) {
    return new Response(JSON.stringify({message : serviceParseResult.error}), { status: HTTP_STATUS.BAD_REQUEST });
  }

  try {
    // edit service
    const updatedService = await serviceControllers.editService(serviceId, body);
    return new Response(JSON.stringify(updatedService), { status: HTTP_STATUS.OK });
  } catch (error : any) {
    return new Response(`Internal server error, \n ${error}`, { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }

  //return new Response("Edit service", { status: HTTP_STATUS.OK });
}