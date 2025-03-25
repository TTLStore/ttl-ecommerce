import stripe from "./stripe.config";


/* Check if the account details have been submitted
  if  the account has been submitted, return true
  else return false
*/
export default async function checkAccountDetails(accountId: string) : Promise<boolean> {
  const account = await stripe.accounts.retrieve(accountId);

  return account.details_submitted;
}