import { Button } from '@/components/UI'
import Link from 'next/link';
import React from 'react'
import { IoPaperPlaneSharp } from "react-icons/io5";
function BackButton() {
  return (
    <Link href="/">
      <Button className="flex border-2 border-primary items-center text-primary bg-transparent group">
        <IoPaperPlaneSharp color="#0f2ba4" className=" rotate-45 me-4 group-hover:rotate-[225deg] transition-all" size={"1.5rem"}/>
        Back to home
      </Button>
    </Link>
  )
}

export default BackButton