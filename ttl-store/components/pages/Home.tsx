import React from 'react';
import { ServiceCard } from '@/components/UI';
import { SERVICES_INFO } from '@/constants';

const SLOGAN = "Choose from our wide range of services";

function Home() {
  return (
    <div id="main" className="w-full min-h-screen mx-auto flex flex-col" >
      <div className="w-full text-center flex-1 flex flex-col justify-around">
        <div>
          <h1 className="text-4xl font-bold mb-2 text-white">Services</h1>
          <p className="text-lg text-gray-500">{SLOGAN}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-around ">
        <div className="h-full w-screen border-y-[1px] border-y-slate-500">
          <div className="flex sm:flex-row flex-col justify-around items-center px-10 py-12 gap-10 max-w-[1440px] mx-auto">
            {
              SERVICES_INFO.map((service, index) => (
                <ServiceCard
                  key={index}
                  serviceName={service.name}
                  serviceDescription={service.description}
                  imageUrl={service.imageUrl}
                />
              ))
            }
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home