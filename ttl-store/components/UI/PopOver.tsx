'use client';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useOutSideHook } from '@/hooks';
import { handleSignOut } from '@/libs/auth/handleSignOut';
import type { UserPopover } from '@/constants';
function PopOver({
  children,
  list,
}
  : {
    children: React.ReactNode;
    list: UserPopover[];
  }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useOutSideHook(ref, () => setOpen(false));

  return (
    <Popover className="relative" >
          <PopoverButton>{children}</PopoverButton>
          <PopoverPanel anchor="bottom end" className="flex flex-col divide-y divide-white/5 rounded-xl [--anchor-gap:var(--spacing-5)] *:text-neutral-black p-4 me-2 mt-2 bg-white  shadow-2xl">
            {
              list.map((item : UserPopover) => (
                <Link href={item.href} key={item.name} className="block rounded-lg py-2 px-3 transition hover:bg-gray-100 capitalize">
                  {item.name}
                </Link>
              ))
            }
            <button className="block rounded-lg py-2 px-3 transition hover:bg-gray-100 capitalize" onClick={() => handleSignOut()}>Sign Out</button>
          </PopoverPanel>
    </Popover>
  )
}

export default PopOver