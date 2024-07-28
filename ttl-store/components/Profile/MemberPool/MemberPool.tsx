import { FETCH_MEMBERSHIP } from '@/constants'
import React from 'react'
import type {  PoolMemberShip } from '@/types'
import { formatMMDDYYYY } from '@/libs/date';

async function MemberPool({id} : {id: string}) {
  const activePools : PoolMemberShip[] = await fetch(`${FETCH_MEMBERSHIP}?userId=${1}`).then(res => res.json()).catch(err => console.log(err)) as PoolMemberShip[];
  console.log(activePools)
  return (
    <div>
      <pre>
       In pools: {activePools && activePools.length}
      </pre>
      <div className="flex flex-row justify-between gap-10 flex-wrap">
      {
        activePools.map((pool : PoolMemberShip) => (
          <div key={pool.id} className="border border-slate-50/50 shadow-md hover:scale-105 transition p-4 rounded-md">
            <h3>Pool Id: {pool.poolId}</h3>
            <p>Role: {pool.role}</p>
            <p>Joined at: {formatMMDDYYYY(pool.joinAt)}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default MemberPool