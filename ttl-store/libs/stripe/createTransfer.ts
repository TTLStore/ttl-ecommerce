import stripe from "./stripe.config";
export default async function transferToAccount({
  amount,
  currency,
  destination
}: {
  amount: number;
  currency: string;
  destination: string;
}) {
  const transfer = await stripe.transfers.create( {
    amount,
    currency,
    destination,
  })

  return transfer;
}