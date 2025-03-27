import { HTTP_STATUS } from "@/constants";
import { NextRequest } from "next/server";
import serviceControllers from "@/db/controllers/serviceControllers";
import { ServiceSchema } from "@/schema/service.schema";
import { updateProducts } from "@/libs/stripe/products/updateProduct";
import { deleteProduct } from "@/libs/stripe/products/deleteProduct";
// Get service by id
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ serviceId: string }> }
) {
  const { serviceId } = await params;
  if (!serviceId) {
    return new Response("Invalid serviceId", { status: HTTP_STATUS.BAD_REQUEST });
  }

  try {
    // get service by id
    const service = await serviceControllers.getServiceById(serviceId);
    return new Response(JSON.stringify(service), { status: HTTP_STATUS.OK });
  } catch (error: any) {
    return new Response(`Internal server error, \n ${error}`, { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
}

// Edit service
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ serviceId: string }> }
) {
  const { serviceId } = await params;
  if (!serviceId) {
    return new Response("Invalid serviceId", { status: HTTP_STATUS.BAD_REQUEST });
  }

  const body = await request.json();
  const serviceParseResult = ServiceSchema.safeParse(body)
  if (!serviceParseResult.success) {
    return new Response(JSON.stringify({ message: serviceParseResult.error }), { status: HTTP_STATUS.BAD_REQUEST });
  }

  try {
    // edit service
    const updatedService = await serviceControllers.editService(serviceId, body);
    // update stripe product
    return new Response(JSON.stringify(updatedService), { status: HTTP_STATUS.OK });
  } catch (error: any) {
    return new Response(`Internal server error, \n ${error}`, { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }

  //return new Response("Edit service", { status: HTTP_STATUS.OK });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ serviceId: string }> }
) {
  try {
    const { serviceId } = await params;

    const service = await serviceControllers.deleteService(serviceId);

    if (service.stripeProductId)
      await deleteProduct(service.stripeProductId);

    return new Response(JSON.stringify({
      message:
        "OK"
    }), { status: 200 })
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({
      error: error.message || 'unexpected error',
      status: error.status || 500,
    }), { status: error.status || 500 })
  }
}