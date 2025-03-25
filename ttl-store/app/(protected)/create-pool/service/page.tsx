'use client';

import { usePool } from '@/provider/PoolProvider';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { Service } from '@/types';
import axios from 'axios';

export default function Service() {
  const router = useRouter();
  const { setService } = usePool();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {

      const { data } = await axios.get('/api/services');
      setServices(data);
    }
    fetchServices();
  }, []);

  const handleSelectService = (serviceName : string) => {
    setService(services.find(service => service.name === serviceName) as Service);

    router.push('./service-info');
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-black">Pick your subscription</h1>
      <p>Here you can select the service you want to share with others</p>
      <div className="mt-6">
        {services.map((service , index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleSelectService(service.name)}
          >
            {service.name}
          </button>
        ))
        }
      </div>
    </div>
  );
}