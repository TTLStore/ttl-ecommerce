import stripe from "./stripe.config";
const ACCOUNT_TYPE = 'account_onboarding';

export default async function createAccountLink({
  account
} : {
  account: string;
}){

  const accountLink = await stripe.accountLinks.create({
    account,
    refresh_url: `${process.env.NEXT_PUBLIC_URL}/payment/stripe-refresh`,
    return_url: `${process.env.NEXT_PUBLIC_URL}/payment`,
    type: ACCOUNT_TYPE,
  });

  return accountLink;
}