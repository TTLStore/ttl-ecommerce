
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Button from './Button';

export type ServiceCardProps = {
  cardBackgroundImage: StaticImageData;
  serviceName: string;
  serviceDescription: string;
  imageUrl: StaticImageData;
}

function ServiceCard({
  cardBackgroundImage,
  serviceName,
  serviceDescription,
  imageUrl,
}: ServiceCardProps) {

  return (
    <div className="rounded-3xl min-h-[30rem] max-w-2xl min-w-xl shadow-md flex flex-col pb-4">
      <div style={{
        backgroundImage: `url(${cardBackgroundImage.src})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '10rem',
        width: '100%',
        position: 'relative',
      }}
        className="rounded-t-3xl"
      >
        <div className="absolute top-1/2 right-5 bg-white rounded-full h-16 w-16 p-4 aspect-square -translate-y-1/2 flex items-center" >
          <Image className="w-full" src={imageUrl} width={0} height={0} alt={serviceName} />
        </div>
      </div>
      <div className="mt-12 px-4 flex-1">
        <div className="flex-1 flex flex-col justify-around">
          <div className="w-full">
            <h2 className={`text-3xl font-[650] capitalize`}>
              {serviceName}</h2>
            <p className="mt-4 text-sm w-2/3">{serviceDescription}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-12 px-4 ">
        <Button size='small' className="!border !border-black !px-3 !py-2 !min-w-48" backgroundColor="bg-[#282828]" label="Subscribe" />
        <Image className='w-auto' src="/images/logo.svg" alt="logo" width={0} height={0} />
      </div>
    </div>
  )
}

export default ServiceCard