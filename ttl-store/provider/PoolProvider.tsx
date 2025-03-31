'use client';

import { ServiceZodType } from '@/schema/service.schema';
import { useState, createContext, useContext } from 'react';

const PoolContext = createContext<{
  serviceType: string;
  service: ServiceZodType | undefined;
  setService: React.Dispatch<React.SetStateAction<ServiceZodType | undefined>>;
}>({
  serviceType: '',
  service: undefined,
  setService: () => {}
});

export const usePool = () => useContext(PoolContext);
export default function PoolProvider({ children }: { children: React.ReactNode }) {
  const [serviceType] = useState('');
  const [service, setService] = useState<ServiceZodType | undefined>(undefined);

  const value = { serviceType, service, setService };
  return (
    <PoolContext.Provider value={value}>
      {children}
    </PoolContext.Provider>
  );
}