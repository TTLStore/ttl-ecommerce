'use client';

import React from 'react'
import Link from 'next/link'
import axios from 'axios';
function AccessStripe() {
  const [accountLink, setAccountLink] = React.useState<string | null>(null);

  const handleClick = async () => {
    try {
      const res = await axios.get('/api/stripe/account-links');
      const { accountLink } = res.data;
      setAccountLink(accountLink);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <p>Click the button below to access your stripe account</p>
      <button onClick={handleClick}>Get Access</button>
      {accountLink
        ? <Link
          href={accountLink}
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500"
        >
          Access your Stripe Account here
        </Link>
        : null
      }
    </div>
  )
}

export default AccessStripe