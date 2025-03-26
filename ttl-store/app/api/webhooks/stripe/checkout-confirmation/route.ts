import { log } from "@/utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const event = await req.json();

  switch(event.type) {
    case 'payment_intent.succeeded':
      // Handle successful payment
      log('succeeded', 'blue');
      break;
    case 'payment_intent.attched':
      // Handle failed payment
      log('succeeded', 'green');
      break;
    
    case 'payment_intent.created':
      log('created', 'purple');

    // ... other events
    default:
      log(`Unhandled event type ${event.type}`, 'cyan');
  }
  
  return new Response(JSON.stringify({ received: true }), {status: 200});
}