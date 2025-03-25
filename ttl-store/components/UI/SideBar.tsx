'use client';

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import SignOutButton from "./SignOutButton";
import { SIDE_BAR } from "@/constants";
const LINK_STYLE = "flex items-center p-2 text-default-color rounded-lg hover:bg-gray-100/20 group mt-2";



export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside id="default-sidebar" className="h-screen transition-transform sm:translate-x-0 bg-gray-800 min-w-60 text-white" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-default-blur">
        <div className='flex flex-col h-full'>
          <ul className="space-y-2 font-medium divide-y-2 divide-gray-50/20 flex-1">
            {
              SIDE_BAR.map((item, index) => (
                <li key={index} className="group">
                  <Link href={item.href}
                    className={cn(LINK_STYLE, { 'bg-gray-100/20': pathname.includes(item.href) })}>
                    <item.icon/>
                    <span className="ml-2">{item.name}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
          <SignOutButton className="w-full mt-4 hover:bg-slate-500 rounded-lg px-4 py-2" />
        </div>
      </div>
    </aside>
  );
}
