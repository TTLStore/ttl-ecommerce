import { HTTP_STATUS } from "@/constants";
import { NextRequest } from "next/server";
import serviceControllers from "@/db/controllers/serviceControllers";
import { Service } from "@/types";

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
  console.log(body);
  if (!isValidService(body)) {
    return new Response("Invalid body", { status: HTTP_STATUS.BAD_REQUEST });
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

function isValidService(body: any) {
  // check if the body mabe contains the fields of a service but not other than these field
  const validKeys: (keyof Service)[] = [
    'id',
    'name',
    'price',
    'currencyType',
    'provider',
    'max_users',
    'description'
  ];
  
  // Check if object is null/undefined or not an object
  if (!body || typeof body !== 'object') return false;
  
  const objKeys = Object.keys(body);
  
  // Check that all present keys are in the valid set
  return objKeys.every(key => validKeys.includes(key as keyof Service));
}