import { HTTP_STATUS } from "@/constants";
import { NextRequest } from "next/server";
import serviceControllers from "@/db/controllers/serviceControllers";
import type { ServiceZodType } from "@/schema/service.schema"
import { ServiceSchema } from "@/schema/service.schema";
import { createProduct } from "@/libs/stripe/products/createProduct";
import { deleteProduct } from "@/libs/stripe/products/deleteProduct";
import { formatZodErrors, convert2Cents } from "@/utils";
// Create new services
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  // check body
  const result = ServiceSchema.safeParse(body);
  if (!result.success) {
    return new Response(`${formatZodErrors(result.error)}`, { status: HTTP_STATUS.BAD_REQUEST });
  }
  let priceId, productId;
  
  try {
    // create new service
    const res = await createProduct({
      name : result.data.name,
      currency: result.data.currencyType,
      unit_amount: convert2Cents(result.data.price) ,
      interval: 'month',
      description: result.data.description
    });

    priceId = res.priceId;
    productId = res.productId;

    const newService = await serviceControllers.createService({
      ...result.data,
      stripePriceId: priceId,
      stripeProductId: productId
    });
    return new Response(JSON.stringify(newService), { status: HTTP_STATUS.CREATED });
  } catch (error : any) {
    if (productId) { // clean up if there any error occurs
      deleteProduct(productId);
    }
    return new Response(`${error}`, { status: error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
}


export async function GET() {
  try {
    const services : ServiceZodType[] = await serviceControllers.getAllServices();
    return new Response(JSON.stringify(services), { status: HTTP_STATUS.OK });
  } catch (error : any) {
    return new Response(`Internal server error, \n ${error}`, { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
}

