'use client'

import { SERVICES } from '@/constants'
import { Pool } from '@/types'
import axios from 'axios'
import React, { useState } from 'react'
import SubscriptionCard from '@/components/Profile/MemberPool/SubscriptionCard'

// Function to fetch pools based on the selected service
async function fetchPools(poolType : string, page : number = 1, limit : number = 10) {
  return await axios.get(`/api/pools`, {
    params: {
      poolType,
      page,
      limit
    }
  })
}

function JoinPool() {
  const [openPools, setOpenPools] = useState<Pool[]>([])

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const service = (formData.get('poolType') as string);

    const res = await fetchPools(service);
    if (res.status !== 200) {
      console.error('Error fetching pools');
      return;
    }
    // Assuming the response data is an array of pools
      // Update the state with the fetched pools
    const data = res.data;
    setOpenPools(data);
    console.log(data);

  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='poolType'>Pool Type</label>
          <select name='poolType'>
            <option value=''>Select Pool Type</option>
            {
              SERVICES.map((service, idx) => (
                <option key={idx} value={service}>{service}</option>
              ))
            }
          </select>
        </div>

        <button type='submit'>Find Pools</button>
      </form>

      <div>
        <h2>Open Pools</h2>
        <PoolList pools={openPools} />
      </div>
    </div>
  )
}

function PoolList({ pools }: { pools: Pool[] }) {
  if (pools.length === 0) {
    return <p>No open pools found.</p>
  }
  return (
    <div>
      {
        pools.map((pool: Pool) => (
          <SubscriptionCard key={pool._id} poolId={pool._id} poolType={pool.poolType} maxMembers={pool.maxMembers} currentMembers={pool.currentMembers} description={pool.description} />
        ))
      }
    </div>
  )
}

export default JoinPool