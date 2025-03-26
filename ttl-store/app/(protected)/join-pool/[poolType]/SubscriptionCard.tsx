'use client'
import { Button } from '@/components/UI';
import React from 'react'
import { Pool, User } from '@/types';
import { createCheckout } from './createCheckoutSession.action';

//TODO: data passed into this component need to have mode and priceId
function SubscriptionCard( 
  props : Pool
) {
  const {_id, poolType, maxMembers, currentMembers, description, createdBy}  = props;

  return (
    <div className="border border-slate-50/50 shadow-md hover:shadow-lg transition p-4 rounded-md">
      <h3>Pool Type: {poolType}</h3>
      <p>Owner: {(createdBy as User).name}</p>
      <p>Max Members: {maxMembers}</p>
      <p>Current Members: {currentMembers}</p>
      <p>Description: {description}</p>
      <Button onClick={() => createCheckout({
        mode : 'payment',
        priceId: 'price_1QM0uARrUcErZsa63ZzDCdJO'
      })} >Request to join</Button>
    </div>
  )
}

export default SubscriptionCard