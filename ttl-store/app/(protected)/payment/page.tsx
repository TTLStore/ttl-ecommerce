import React from 'react'
import { getUser } from '@/libs/auth/getUserName'
import checkAccountDetails from '@/libs/stripe/checkAccountDetails'
import CreateStripeAccount from './CreateStripeAccount';
import AccessStripe from './AccessStripe'
import IncompleteStripeAccount from './IncompleteStripeAccount'

async function Payment() {
  const user = await getUser();
  if (!user.stripe_connected_id) {
    return (
      <CreateStripeAccount />
    )
  }

  if (!checkAccountDetails(user.stripe_connected_id)) {
    return (
      <IncompleteStripeAccount stripe_account_id={user.stripe_connected_id} />
    )
  }

  return (
    <AccessStripe />
  )
}

export default Payment

