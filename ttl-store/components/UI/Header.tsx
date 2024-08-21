'use client';

import React from 'react'
import Button from './Button'
import LogoUser from './LogoUser'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { UserSession } from '@/types';
import { Session } from 'next-auth';
import Link from 'next/link';
function Header() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 py-4 rounded-b-md backdrop-blur-3xl border-b-[1px] border-slate-500 px-4 z-10">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <Link href="/">TTL - Store</Link>
        {
          session ? (
            <LogoUser 
              session={session.user as UserSession & Session}
            />
          ) : (
            <Button 
              label="Sign In" 
              size="small" 
              backgroundColor="bg-primary-600"  
              onClick={() => signIn()}
            />
          )
        }
        
      </div>
    </header>
  )
}

export default Header