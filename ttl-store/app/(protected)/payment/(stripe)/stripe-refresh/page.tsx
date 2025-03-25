import React from 'react'

async function page() {
  return (
    <p>
      - The link is expired (a few minutes went by since the link was created).
      - The user already visited the URL (the user refreshed the page or clicked back or forward in the browser).
      - Your platform is no longer able to access the account.
      - The account has been rejected.

      - Follow the link to complete onboarding process
      https://docs.stripe.com/connect/collect-then-transfer-guide?platform=web&connect-account-creation-pattern=typed&payment-ui=checkout#handle-users-havent-completed-onboarding
    </p>
  )
}

export default page