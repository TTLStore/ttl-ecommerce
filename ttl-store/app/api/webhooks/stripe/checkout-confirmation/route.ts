import { NextRequest } from "next/server";
import { handleCheckoutCompleted } from "./handleCheckoutCompleted";

type Metadata = {
  userId : string,
  hostId : string,
  poolId : string
}

export async function POST(req: NextRequest) {
  const event = await req.json();
  let metadata : Metadata;
  switch(event.type) {
    case 'checkout.session.completed':
      metadata = event.data.object.metadata;
      console.log("checkout session completed: ", metadata);
      handleCheckoutCompleted({
        userId : metadata.userId,
        hostId : metadata.hostId,
        poolId : metadata.poolId
      }).catch(error => {
        console.error(error);
        // TODO: notify administators
      })

      break;
    // case 'payment_intent.succeeded':
    //   // Handle successful payment
    //   metadata = event.data.object.metadata;
    //   console.log("payment_intent.succeeded : " , metadata);
    //   handleSuccessfulPayment({
    //     userId : metadata.userId,
    //     poolId : metadata.poolId,
    //   }).catch (error => {
    //     console.error(error);
    //     // TODO : notify administrators
    //   });
    //   break;
  }
  
  return new Response(JSON.stringify({ received: true }), {status: 200});
}