import createTransfer from "@/libs/stripe/createTransfer";

export async function POST (req: Request) {
  try {
    const body = await req.json();
    const transfer = await createTransfer({
      amount: body.amount,
      currency: body.currency,
      destination: body.destination,
    });

    return new Response(JSON.stringify({transfered : true}), { status: 200 });
  } catch (error : any) {
    console.error(error);
    return new Response(error.message, { status: error.status || 500 });
  }
}