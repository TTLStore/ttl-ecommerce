'use client'
import { Button } from '@/components/UI';
import React from 'react'
import axios from 'axios';
import { Pool, User } from '@/types';

function SubscriptionCard( 
  props : Pool
) {
  const {_id, poolType, maxMembers, currentMembers, description, createdBy}  = props;
  console.log(_id);
  const handleJoinPool = async () => {
    const answer = confirm('Are you sure you want to join this pool?');
    if (!answer) {
      return;
    }

    try {
      const res = await axios.patch(`/api/pools`, {
        _id,
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
      <p>Owner: {(createdBy as User).name}</p>
      <p>Max Members: {maxMembers}</p>
      <p>Current Members: {currentMembers}</p>
      <p>Description: {description}</p>
      <Button onClick={handleJoinPool} >Request to join</Button>
    </div>
  )
}

export default SubscriptionCard