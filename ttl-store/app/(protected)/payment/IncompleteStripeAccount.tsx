import React from 'react'
import createAccountLink from '@/libs/stripe/createAccountLink'
import Link from 'next/link'

async function IncompleteStripeAccount({
  stripe_account_id
} : {
  stripe_account_id: string
}) {
  const accountLink = await createAccountLink({
    account: stripe_account_id
  })
  return (
    <div>
    You have not completed the onboarding process. Please follow the link below to complete the process.
    <Link href={accountLink.url}>Continue onboarding process with Stripe</Link>
  </div>
  )
}

export default IncompleteStripeAccount