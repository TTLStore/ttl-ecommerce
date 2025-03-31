'use server'

import { redirect } from 'next/navigation'
import createCheckoutSession from '@/libs/stripe/createCheckoutSession';


/**
 * Redirect user to payment page
 * @param mode: 'payment' | 'subscription' | 'setup'
 * @param priceId: string
 * 
 */
export async function createCheckout({
  priceId,
  mode = "subscription",
  metadata,
}: {
  mode: 'payment' | 'subscription' | 'setup',
  priceId: string,
  metadata? : any
}) {
  let session = undefined;

  session = await createCheckoutSession({
    mode, priceId, metadata
  });

  redirect(session.url!) // Navigate to the new post page
}