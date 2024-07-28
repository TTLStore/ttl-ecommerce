'use client';

import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaSwimmingPool, FaDoorOpen } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const LINK_STYLE = "flex items-center p-2 text-default-color rounded-lg hover:bg-gray-100/20 group mt-2";

const SIDE_BAR = [
  {
    href: "/profile",
    name: "Profile",
    icon: <CgProfile />
  },
  {
    href: "/create-pool",
    name: "Create Pool",
    icon: <FaDoorOpen/>
  },
  {
    href: "/join-pool",
    name: "Join Pool",
    icon: <FaSwimmingPool/>
  },
  {
    href: "/payment",
    name: "Payment",
    icon: <MdOutlinePayment/>
  }
];

export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside id="default-sidebar" className=" w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-default-blur">
       <ul className="space-y-2 font-medium divide-y-2 divide-gray-50/20">
         {
            SIDE_BAR.map((item, index) => (
              <li key={index} className="group">
                <Link href={item.href} 
                  className={clsx(LINK_STYLE,{'bg-gray-100/20' : pathname.includes(item.href)} )}>
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                </Link>
              </li>
            ))
         }
       </ul>
    </div>
 </aside>
  );
}
