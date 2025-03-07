'use client';

import { usePool } from "@/provider/PoolProvider";
import { PoolForm } from "@/components/CreatePool";
import { redirect } from "next/navigation";
import { useState } from "react";
export default function ServiceInfo() {
  const { service, setService } = usePool();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Reset all values before returning to create-pool
  const handleShareAnotherService = () => {
    setService(undefined);
    setIsSubmitted(false);
    redirect("/create-pool");
  }

  // if no service is selected. This is for when user reload the page
  if (!service) {
    redirect("/create-pool");
  }

  // Allow user know when the they have share their subscription successfully
  if (isSubmitted) {
    return (
      <div>
        <h1 className="text-xl font-bold mb-6 text-black">Pool created successfully</h1>
        <p className="text-black">You can now view your pool in the dashboard</p>
        <p>Have a new subscription to share?</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleShareAnotherService()}
        >
          Create another pool
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-black">Service Information</h1>
      <PoolForm poolInfo={service} setIsSubmitted={setIsSubmitted}/>
    </div>
  );
}