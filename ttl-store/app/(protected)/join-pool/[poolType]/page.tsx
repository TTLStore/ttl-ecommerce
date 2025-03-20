import React from 'react'
import poolControllers from '@/db/controllers/poolControllers'
import { SERVICES } from '@/constants';
import ServiceNotFound from './ServiceNotFound';
import { getUser } from '@/libs/auth/getUserName';
import type { Pool } from '@/types';
import SubscriptionCard from '@/components/Profile/MemberPool/SubscriptionCard';
import { makeDeepCopy } from '@/utils';
type Params = Promise<{ poolType: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function Service(props: {
  params: Params
  searchParams: SearchParams
}) {
  const userId = await getUser();
  const { poolType } = await props.params;
  if (!SERVICES.includes(poolType as 'youtube' | 'google' | 'icloud'))
    return <ServiceNotFound />

  const { page, limit } = await props.searchParams;

  // make a deep copy because nextjs shows warning that only plain object can be passed to client component, this converts ObjectId into string
  const availableServices = makeDeepCopy(await poolControllers.handleGetPools({
    userId, poolType,
    page: page ? page : 1,
    limit: limit ? limit : 10
  }))
  return (
    <div>
      <PoolList pools={availableServices} />

    </div>
  )
}

function PoolList({ pools }: { pools: Pool[] }) {
  if (pools.length === 0) {
    return <p>No open subscription found. Be the first to share</p>
  }
  return (
    <div>
      {
        pools.map((pool: Pool) => {
          return (
            <SubscriptionCard key={pool._id!} _id={pool._id!}
            isOpen={pool.isOpen}
            members={pool.members}
            isPublic={pool.isPublic}
            createdBy={pool.createdBy}
            poolType={pool.poolType}
            maxMembers={pool.maxMembers}
            currentMembers={pool.currentMembers}
            description={pool.description}
          />
          )
        })
      }
    </div>
  )
}

export default Service