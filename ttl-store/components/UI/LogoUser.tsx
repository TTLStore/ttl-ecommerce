import { UserSession } from "@/types";
import { Session } from "next-auth";
import Image from "next/image";
import { signOut } from "next-auth/react";
import PopOver from "./PopOver";

export type LogoProps = {
  session: Session & UserSession;
};
export default function Logo({
  session
}: LogoProps) {
  const { name, image } = session;
  return (
    <PopOver>
      <div className="flex items-center gap-x-2 data-[focus]:bg-slate-800">
        <div>Hello, {name}</div>
        <Image src={image} width={0} height={0} sizes={'100%'} alt="logo" className="rounded-full aspect-square w-10" />
      </div>
    </PopOver>
  );
}