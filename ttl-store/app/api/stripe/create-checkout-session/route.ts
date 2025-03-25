import createCheckoutSession from "@/libs/stripe/createCheckoutSession";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const session = await createCheckoutSession({
      priceId: body.priceId
    });
    return new Response(JSON.stringify({
      url: session.url,
    }), { status: 200 });
  } catch (error : any) {
    console.error(error);
    return new Response(error.message, { status: error.status || 500 });
  }
}