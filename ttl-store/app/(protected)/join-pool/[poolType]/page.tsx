import React from 'react'
import poolControllers from '@/db/controllers/poolControllers'
import { getUser } from '@/libs/auth/getUserName';
import type { Pool, Service } from '@/types';
import SubscriptionCard from './SubscriptionCard';
import { makeDeepCopy } from '@/utils';
import Link from 'next/link';
import serviceControllers from '@/db/controllers/serviceControllers';
import { ServiceZodType } from '@/schema/service.schema';
type Params = Promise<{ poolType: string }>;
type SearchParams = Promise<{ [key: string]: string | undefined }>;

async function Service(props: {
  params: Params
  searchParams: SearchParams
}) {
  const userId = await getUser();
  const { poolType } = await props.params;
  const parsedPoolType = decodeURIComponent(poolType);

  const {page, limit} = await props.searchParams;
  

  // make a deep copy because nextjs shows warning that only plain object can be passed to client component, this converts ObjectId into string
  const availableServices = await poolControllers.handleGetPools({
    userId, poolType : parsedPoolType,
    page: page ? parseInt(page) : 1,
    limit: limit ? parseInt(limit) : 10
  });

  const service = await serviceControllers.getServiceByName(parsedPoolType);
  return (
    <div>
      <PoolList pools={makeDeepCopy(availableServices)} service={makeDeepCopy(service!)} />
    </div>
  )
}

function PoolList({ pools , service }: { pools: Pool[], service : ServiceZodType }) {
  if (pools.length === 0) {
    return <p>No open subscription found. Be the first to 
      <Link href="/create-pool" className='mx-1 underline text-blue-500'>share</Link>
    </p>
  }

  return (
    <div>
      {
        pools.map((pool: Pool) => {
          return (
            <SubscriptionCard key={pool.id!}
            pool={pool}
            service={service}
          />
          )
        })
      }
    </div>
  )
}

export default Service