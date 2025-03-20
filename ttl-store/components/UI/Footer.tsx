import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { icons } from '@/assets/icons'
import { VscGlobe } from "react-icons/vsc";
function Footer() {
  return (
    <footer>
      <div className='wrapper'>
        <Link href="/">
          <Image width={256} height={256} src="/images/sharehub-logo.svg" alt="logo" />
        </Link>

        <div className='flex mobile:flex-col gap-y-4 justify-between mt-10 mb-28'>
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
      {/* 
        Quesiton: how to make the footer width 100% of the screen width?
        Answer: Add a div with a background color of primary color and width of 100vw
        Q: But its parent has a width of 1440px and margin of auto, how can I make it full width?

      */}
      <div className='bg-primary ~py-8/12 ~text-sm/base'>
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