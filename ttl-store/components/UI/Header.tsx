'use client';

import React from 'react'
import Button from './Button'
import LogoUser from './LogoUser'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { UserSession } from '@/types';
import { Session } from 'next-auth';
import Link from 'next/link';
import Image from 'next/image';
import { icons } from '@/assets/icons';
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

function Header2() {
  const { data: session } = useSession();
  return (
    <header className="w-full">
      <div className="wrapper flex items-center">
        <Link href="/" className='w-1/2'>
          <Image width={128} height={128} src="/images/sharehub-logo.svg" alt="logo" />
        </Link>

        <nav className="w-1/2 flex justify-between items-center space-x-4 text-primary">
          <Link href="/services" className=" rounded-3xl bg-primary text-white px-4 py-2">Subscription</Link>
          <Link href="/about">
            <Button
              label="About"
              size="small"
            />
          </Link>
          <Link href="/help-center">
            <Button
              label="Help Center"
              size="small"
            />
          </Link>
          <span> | </span>
          {
            session ? (
              <LogoUser
                session={session.user as UserSession & Session}
              />
            ) : (
              <Button
                label="Login"
                size="small"

                onClick={() => signIn()}
              />
            )
          }
          <Button size='small'>
            <div className="flex justify-center items-center gap-2">
              <Image className='text-primary' width={24} height={24} src={icons.globe} alt="globe" />
              VN
            </div>
          </Button>
        </nav>

      </div>
    </header>
  )
}

export default Header2