import createCheckoutSession from "@/libs/stripe/createCheckoutSession";

export async function POST (req: Request) {
  try {
    const body = await req.json();
    const session = await createCheckoutSession({
      mode: "subscription",
      priceId: body.priceId,
      metadata: {
        poolId: body.poolId,
        hostId : body.hostId,
        memberId : body.memberId
      }
    })

    return new Response (JSON.stringify(session.url));
  } catch (error : any) {
    console.error(error);
    return new Response(error, { status: 500});
  }
}