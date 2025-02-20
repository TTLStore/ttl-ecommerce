'use client'

import { SERVICES } from '@/constants'
import { Pool } from '@/types'
import axios from 'axios'
import React, {useEffect, useState} from 'react'

function JoinPool() {
  const [openPools, setOpenPools] = useState<Pool[]>([])
  const [selectedService, setSelectedService] = useState<string>('')

  // useEffect(() => {
  //   const fetchPools = async () => {
  //     const res = await axios.get(`/api/pools?service=${selectedService}`)
  //     const data = res.data
  //     setOpenPools(data)
  //   }

  //   if (selectedService) {
  //     fetchPools()
  //   }
  // }, [selectedService])

  const handleFormSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const service = (formData.get('poolType') as string);

    const res = await axios.get(`/api/pools?poolType=${service}`)
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
        {
          openPools.map((pool : Pool) => (
            <div key={pool.id}>
              <pre>{JSON.stringify(pool, null, 2)}</pre>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default JoinPool