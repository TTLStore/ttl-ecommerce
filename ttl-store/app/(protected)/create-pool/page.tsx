'use client';

import { Button } from '@/components/UI';
import { useRouter } from 'next/navigation';

export default function CreatingPoolPage() {
  const router = useRouter();
  return (
    <div className="max-w-md mx-auto mt-10">
      <Button onClick={() => 
        router.push('./create-pool/service')
      }>Share your subscription</Button>
    </div>
  );
}

