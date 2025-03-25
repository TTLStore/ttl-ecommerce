import stripe from "./stripe.config";
/**
 * This funtion creates a stripe connected account
 * Check https://docs.stripe.com/api/accounts/create for more details
 * @param accountType express or standard, default is express
 * @returns account object
 */
export default async function createStripeAccount(accountType: 'express' | 'standard' = 'express') {
  const account = await stripe.accounts.create({
    type: accountType,
  });

  return account;
}