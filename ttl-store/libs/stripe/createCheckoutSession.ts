import stripe from "./stripe.config";
export default async function createCheckoutSession({
  priceId,
} : {
  priceId: string;
  }
) {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
  });

  return session;
}