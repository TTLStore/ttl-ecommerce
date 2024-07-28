
import React from 'react'
import Image from 'next/image';
import Button from './Button';
import { text } from 'stream/consumers';

export type ServiceCardProps = {
  serviceName: string;
  serviceDescription: string;
  imageUrl: string;
}

function ServiceCard({
  serviceName,
  serviceDescription,
  imageUrl,
}: ServiceCardProps) {
  const cardColor = serviceName === 'youtube' ? 'bg-red-500' : serviceName === 'google' ? 'bg-green-500' : serviceName === 'icloud' ? 'bg-blue-500' : 'bg-gray-500';

  return (
    <div className={`rounded-xl shadow-md p-4 min-w-[10em] max-w-[20em] min-h-[25em] flex flex-col hover:scale-110 transition-transform transform ${cardColor} aspect-[2/1]`}>
      <Image src={imageUrl} width={60} height={60} alt={serviceName} className="rounded-full border p-1" />
      <div className="flex-1 flex flex-col justify-around">
        <div className="w-full text-center">
          <h2 className={`text-2xl font-bold capitalize`}>
            {serviceName}</h2>
          <p>{serviceDescription}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-center">
        <Button backgroundColor="bg-[#282828]" label="Subscribe" />
      </div>
    </div>
  )
}

export default ServiceCard