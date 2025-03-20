import React from 'react'
import Link from 'next/link'
import serviceControllers from '@/db/controllers/serviceControllers';
import { makeDeepCopy } from '@/utils';
import type { Service, ServiceType } from '@/types';
async function JoinPool() {
  const services : ServiceType[] = makeDeepCopy(await serviceControllers.getAllServices()).map((service : Service) => service.name);

  return (
    <div className="*:mx-4">
      {
        services.map((service : ServiceType) => (
          <Link href={`/join-pool/${service}`}>{service}</Link>
        ))
      }
    </div>
  )
}

export default JoinPool;