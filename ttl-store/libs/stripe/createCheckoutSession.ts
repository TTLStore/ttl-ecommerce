import stripe from "./stripe.config";
export default async function createCheckoutSession({
  mode,
  priceId,
  metadata = {},
} : {
  mode: "subscription" | "payment" | "setup"
  priceId: string;
  metadata? : any
  }
) {
  const session = await stripe.checkout.sessions.create({
    mode,
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata : {...metadata},
    payment_intent_data : {
      metadata: {...metadata}
    },
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
  });

  return session;
}