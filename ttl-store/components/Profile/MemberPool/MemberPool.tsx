'use client'

import React, { useState, useEffect } from 'react'
import type {  PoolMemberShip } from '@/types'
import { formatMMDDYYYY } from '@/libs/date';
import axios from 'axios';
function MemberPool() {
  const [activePools, setActivePools] = useState<PoolMemberShip[]>([]);

  useEffect(() => {
    const getMemberPools = async () => {
      const res = await axios.get('/api/memberships');
      setActivePools(res.data);
    }

    getMemberPools();
  },[])

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
            <p>Joined at: {formatMMDDYYYY(pool.joinedAt)}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default MemberPool