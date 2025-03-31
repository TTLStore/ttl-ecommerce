'use client'
import { Button } from '@/components/UI';
import React from 'react'
import { Pool, User } from '@/types';
import { createCheckout } from './createCheckoutSession.action';
import { ServiceZodType } from '@/schema/service.schema';
import { useSession } from 'next-auth/react';


function SubscriptionCard({
  pool,
  service
} : {
  service: ServiceZodType,
  pool : Pool
}
) {
  const {id, poolType, maxMembers, currentMembers, description, hostId}  = pool;
  const { data : session } = useSession();

  return (
    <div className="border border-slate-50/50 shadow-md hover:shadow-lg transition p-4 rounded-md">
      <h3>Pool Type: {poolType}</h3>
      <p>Owner: {(hostId as User).name}</p>
      <p>Max Members: {maxMembers}</p>
      <p>Current Members: {currentMembers}</p>
      <p>Description: {description}</p>
      <Button onClick={() => createCheckout({
        priceId: service.stripePriceId!,
        mode : 'subscription',
        metadata: {
          poolId: id,
          hostId: pool.hostId,
          memberId: session?.user?.id
        }
      })} >Request to join</Button>
    </div>
  )
} 

export default SubscriptionCard