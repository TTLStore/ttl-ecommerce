import { HTTP_STATUS } from "@/constants";
import { NextRequest } from "next/server";
import serviceControllers from "@/db/controllers/serviceControllers";
import { Service } from "@/types";
import { ServiceSchema } from "@/schema/service.schema";
// Create new services
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  // check body
  const result = ServiceSchema.safeParse(body);
  if (!result.success) {
    return new Response(`${result.error}`, { status: HTTP_STATUS.BAD_REQUEST });
  }
  console.log('continue')
  try {
    // create new service
    const newService = await serviceControllers.createService(body);
    return new Response(JSON.stringify(newService), { status: HTTP_STATUS.CREATED });
  } catch (error : any) {
    return new Response(`${error}`, { status: error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
}


export async function GET() {
  try {
    const services : Service[] = await serviceControllers.getAllServices();
    return new Response(JSON.stringify(services), { status: HTTP_STATUS.OK });
  } catch (error : any) {
    return new Response(`Internal server error, \n ${error}`, { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
}

