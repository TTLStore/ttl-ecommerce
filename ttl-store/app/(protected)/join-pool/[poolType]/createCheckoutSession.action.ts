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
  mode,
  priceId
}: {
  mode: 'payment' | 'subscription' | 'setup',
  priceId: string
}) {
  let session = undefined;

  session = await createCheckoutSession({
    mode, priceId
  });

  redirect(session.url!) // Navigate to the new post page
}