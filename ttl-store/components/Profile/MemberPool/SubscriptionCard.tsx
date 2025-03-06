'use client'
import { Button } from '@/components/UI';
import React from 'react'
import axios from 'axios';
type SubscriptionCardProps = {
  poolId: string;
  poolType: string;
  maxMembers: number;
  currentMembers: number;
  description: string;
}


function SubscriptionCard( 
  {poolId, poolType, maxMembers, currentMembers, description} : SubscriptionCardProps
) {
  const handleJoinPool = async () => {
    const answer = confirm('Are you sure you want to join this pool?');
    if (!answer) {
      return;
    }

    try {
      const res = await axios.patch(`/api/pools`, {
        poolId,
      })

      if (res.status !== 200) {
        const message = res.data.message || 'Error joining pool';
        throw new Error(message);
      }
      alert('Successfully joining the subcription - go to your subscription management?');
    } catch (error : any) {
      console.error('Error joining pool', error);
      alert(error);
    }
    
  }

  return (
    <div className="border border-slate-50/50 shadow-md hover:shadow-lg transition p-4 rounded-md">
      <h3>Pool Type: {poolType}</h3>
      <p>Max Members: {maxMembers}</p>
      <p>Current Members: {currentMembers}</p>
      <p>Description: {description}</p>
      <Button onClick={handleJoinPool} >Join Pool</Button>
    </div>
  )
}

export default SubscriptionCard