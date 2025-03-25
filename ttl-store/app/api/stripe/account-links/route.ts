import { getUser } from "@/libs/auth/getUserName";
import createAccountLink from "@/libs/stripe/createAccountLink";

export async function GET() {
  try {
    const user = await getUser();
    if (!user.stripe_connected_id) {
      return new Response("You don't have a Stripe Connected Account" , { status: 400 });
    }

    const accountLink = await createAccountLink({
      account: user.stripe_connected_id,
    });

    return new Response(JSON.stringify({
      accountLink: accountLink.url,
    }), { status: 200 });

  } catch (error : any) {
    console.error(error);
    return new Response(error.message, { status: error.status || 500 });
  }
}