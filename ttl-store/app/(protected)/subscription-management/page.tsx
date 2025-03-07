
import React from 'react'
import { auth } from '@/authentication/auth.config'
import membershipControllers from '@/db/controllers/membershipControllers';
import Link from 'next/link';
import type { Pool, PoolMemberShip } from '@/types';

async function SubscriptionManagement() {
  const session = await auth();
  if (!session || !session.user) {
    return (
      <div>
        <p>Unauthorized</p>
      </div>
    )
  }

  const subscriptions : PoolMemberShip[] = await membershipControllers.handleGetMemberships({ userId: session.user.id});
  if (!subscriptions || subscriptions.length === 0) {
    return (
      <div>
        <p>No subscriptions found</p>
      </div>
    )
  }

  return (
    <>
      <p>Manage your subscriptions here.</p>
      {/* Add your subscription management components here */}
      {
        subscriptions.map(subscription=> (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        ))
      }
    </>
  )
}

function SubscriptionCard({
  subscription
}: {
  subscription: PoolMemberShip
}) {
  const {
    id, poolId, userId, role
  } = subscription;
  console.log(subscription);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Id {subscription.id}</h3>
          <p className="text-gray-600 mb-4">Role: {subscription.role}</p>
          <p className="text-gray-600 mb-4">Type: {(subscription.poolId as Pool).poolType}</p>
        </div>
      </div>
      <Link 
        href={`/subscription-management/${subscription.id}`}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        View Details
        <svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  )
}

export default SubscriptionManagement