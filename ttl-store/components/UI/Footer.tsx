import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { icons } from '@/assets/icons'
import { VscGlobe } from "react-icons/vsc";
function Footer() {
  return (
    <footer
    >
      <div className='wrapper'>
        <Link href="/">
          <Image width={256} height={256} src="/images/sharehub-logo.svg" alt="logo" />
        </Link>

        <div className='flex justify-between mt-10'>
          <div className='min-w-[200px] flex flex-col gap-y-2'>
            <p>Make with love &hearts;</p>
            <div className='flex justify-start gap-x-2'>
              <Image width={24} height={24} src={icons.fbicon} alt="facebook" />
              <Image width={24} height={24} src={icons.linkedIn} alt="linkedin" />
            </div>
            <span className='flex bg-[#333333] text-white text-center ps-8 pe-4 py-2 rounded-xl items-center justify-between w-full'>
              English <VscGlobe size={28} />
            </span>
          </div>
          <div>Online help pages</div>
          <div>Privacy</div>
          <div>Hot topics</div>
        </div>
      </div>
      <div className='bg-primary  w-full'>
        <div className="wrapper text-white flex justify-between">
          <p>&copy; Copyright 2024 ShareHub. All Right Reserved</p>
          <div className='flex uppercase gap-x-10'>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer