import { UserSession } from "@/types";
import Image from "next/image";
import PopOver from "./PopOver";
import { RiArrowDownSLine } from "react-icons/ri";
import { USER_POPOVER } from '@/constants';
export default function LogoUser({ user }: { user: UserSession }) {
  const { name, image } = user;
  console.log('user', user);
  return (
    <PopOver list={USER_POPOVER}>
      <div className="flex items-center gap-x-2 data-[focus]:bg-slate-800">
        <RiArrowDownSLine className="text-primary" size={32} />
        <span>My account</span>
        <Image src={image} width={0} height={0} sizes={'100%'} alt="logo" className="rounded-full aspect-square w-10" />

      </div>
    </PopOver>
  );
}