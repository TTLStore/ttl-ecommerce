'use client'

import { SERVICES } from '@/constants'
import { Pool } from '@/types'
import React, {useEffect, useState} from 'react'

function JoinPool() {
  const [openPools, setOpenPools] = useState<Pool[]>([])
  const [selectedService, setSelectedService] = useState<string>('')

  useEffect(() => {
    const fetchPools = async () => {
      const res = await fetch(`http://localhost:3001/pools?service=${selectedService}`)
      const data = await res.json()
      setOpenPools(data)
    }

    if (selectedService) {
      fetchPools()
    }
  }, [selectedService])
  return (
    <div>
      <form>
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
        {
          openPools.map((pool : Pool) => (
            <div key={pool.id}>
              <h3>{pool.poolType}</h3>
              <p>{pool.createdBy}</p>
              <p>{pool.currentMembers}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default JoinPool