'use client';

import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import { Button } from '@headlessui/react';
function CreateStripeAccount() {
  const [accountLink, setAccountLink] = React.useState<string | null>(null);

  const handleClick = async () => {
    try {
      const res = await axios.get('/api/stripe/accounts');
      const { accountLink } = res.data;
      setAccountLink(accountLink);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <p>We partner with Stripe to securely handle your funds</p>
      <Button className="bg-slate-600 rounded m-2 p-5 "onClick={handleClick}>Create an Account with Stripe</Button>
      {accountLink
        ? <Link
          href={accountLink}
          target="_blank"
          rel="noreferrer"
        >
          Click here for onboarding process with Stripe
        </Link>
        : null
      }
    </div>
  )
}

export default CreateStripeAccount