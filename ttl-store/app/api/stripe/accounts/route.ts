import userControllers from "@/db/controllers/userControllers";
import createStripeAccount from "@/libs/stripe/createAccount";
import createAccountLink from "@/libs/stripe/createAccountLink";
import { getUser } from "@/libs/auth/getUserName";

const STRIPE_ACCOUNT_TYPE = 'express';

export async function GET() {
  try {
    const account = await createStripeAccount(STRIPE_ACCOUNT_TYPE);

    const user = await getUser();
    
    await userControllers.handlePatchUser({
      userId: user.id, 
      body: {
        stripe_connected_id: account.id 
      }
    });

    const accountLink = await createAccountLink({
      account: account.id,
    });

    return new Response(JSON.stringify({
      accountLink: accountLink.url,
    }), { status: 200 });
    
  } catch (error : any) {
    console.error(error);
    return new Response(error.message, { status: error.status || 500 });
  }
}