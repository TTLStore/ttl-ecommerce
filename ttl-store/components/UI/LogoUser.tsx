import { UserSession } from "@/types";
import Image from "next/image";
import PopOver from "./PopOver";
import { User } from "next-auth";


export default function LogoUser({ user }: { user: UserSession }) {
  const { name, image } = user;
  console.log('user', user);
  return (
    <PopOver>
      <div className="flex items-center gap-x-2 data-[focus]:bg-slate-800">
        
        <Image src={image} width={0} height={0} sizes={'100%'} alt="logo" className="rounded-full aspect-square w-10" />
        <div>Hi, {name}</div>
      </div>
    </PopOver>
  );
}