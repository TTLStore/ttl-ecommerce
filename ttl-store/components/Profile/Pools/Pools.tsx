import { FETCH_POOLS } from '@/constants'
import React from 'react'
import type { Pool } from '@/types'
import { formatMMDDYYYY } from '@/libs/date';
import axios from 'axios';

async function Pools({id} : {id: string}) {
  const activePools : Pool[] = await axios.get(`${FETCH_POOLS}?createdBy=${id}`).then(res => res.data).catch(err => console.log(err)) as Pool[];


  return (
    <div>
      <pre>
       active pools: {activePools && activePools.length}
      </pre>
      <div className="flex flex-row justify-between gap-2">
      {
        activePools.length && activePools.map((pool : Pool) => (
          <div key={pool.id}>
            <h3>{pool.poolType}</h3>
            <p>Created by: {pool.createdBy}</p>
            <p>Created at: {formatMMDDYYYY(pool.createdAt)}</p>
            <p>Updated at: {pool.updatedAt || 'N/A'}</p>
            <p>Max Members: {pool.maxMembers}</p>
            <p>Current Members: {pool.currentMembers}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Pools