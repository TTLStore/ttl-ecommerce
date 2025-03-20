'use client';

import { useState, createContext, useContext } from 'react';
import type { Service } from '@/types';
const PoolContext = createContext<{
  serviceType: string;
  service: Service | undefined;
  setService: React.Dispatch<React.SetStateAction<Service | undefined>>;
}>({
  serviceType: '',
  service: undefined,
  setService: () => {}
});

export const usePool = () => useContext(PoolContext);
export default function PoolProvider({ children }: { children: React.ReactNode }) {
  const [serviceType] = useState('');
  const [service, setService] = useState<Service | undefined>(undefined);

  const value = { serviceType, service, setService };
  return (
    <PoolContext.Provider value={value}>
      {children}
    </PoolContext.Provider>
  );
}