import { metadata } from "@/app/layout";
import { NextRequest } from "next/server";
import { handleCheckoutCompleted } from "./handleCheckoutCompleted";

type CheckoutMetadata = {
  userId : string,
  poolId : string
}

export async function POST(req: NextRequest) {
  const event = await req.json();
  switch(event.type) {
    case 'checkout.session.completed':
      // console.log(event)
      // const metadata : CheckoutMetadata = event.data.object.metadata;
      // handleCheckoutCompleted({
      //   userId : metadata.userId,
      //   poolId : metadata.poolId
      // }).catch(error => {
      //   console.error(error);
      //   // TODO: notify administators
      // })

      break;
    case 'payment_intent.succeeded':
      // Handle successful payment
      console.log(event.data.object.metadata);
      break;
    case 'payment_intent.attched':
      // Handle failed payment
      break;
    
    case 'payment_intent.created':
      break;
    // ... other events
    default:
     break;
  }
  
  return new Response(JSON.stringify({ received: true }), {status: 200});
}