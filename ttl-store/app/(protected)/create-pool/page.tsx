'use client';

import { useState } from 'react';
import { PoolForm } from '@/components/CreatePool';

export default function CreatingPoolPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="max-w-md mx-auto mt-10">
      
      <PoolPageContent isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
    </div>
  );
}

function PoolPageContent({ isSubmitted, setIsSubmitted } : 
  { 
    isSubmitted: boolean
    setIsSubmitted: (value: boolean) => void
  }) {
  if (isSubmitted) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6 text-black">Pool created successfully</h2>
        <p className="text-black">You can now view your pool in the dashboard</p>
        <p>Have a new subscription to share?</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsSubmitted(false)}
        >
          Create another pool
        </button>
      </div>
    )
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-black">Create a New Pool</h1>
      <PoolForm setIsSubmitted={setIsSubmitted} />
    </div>
    
  );
}