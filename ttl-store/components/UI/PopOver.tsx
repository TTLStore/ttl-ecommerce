'use client';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRef, useState } from 'react';
import { useOutSideHook } from '@/hooks';
import { USER_POPOVER } from '@/constants';
function PopOver({
  children
}
  : {
    children: React.ReactNode;
  }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useOutSideHook(ref, () => setOpen(false));

  return (
    <Popover className="relative" >
          <PopoverButton>{children}</PopoverButton>
          <PopoverPanel anchor="bottom end" className="flex flex-col divide-y divide-white/5 rounded-xl bg-default-blur [--anchor-gap:var(--spacing-5)] *:text-white/50 p-4 me-2 mt-2 backdrop-blur-md">
            {
              USER_POPOVER.map((item) => (
                <Link href={item} key={item} className="block rounded-lg py-2 px-3 transition hover:bg-white/95 hover:text-black/90 capitalize">
                  {item}
                </Link>
              ))
            }
            <button className="block rounded-lg py-2 px-3 transition hover:bg-white/95 hover:text-black/90" onClick={() => signOut()}>Sign Out</button>
          </PopoverPanel>
    </Popover>
  )
}

export default PopOver