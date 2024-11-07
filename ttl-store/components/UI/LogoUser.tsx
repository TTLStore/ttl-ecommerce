import { UserSession } from "@/types";
import Image from "next/image";
import PopOver from "./PopOver";

export type LogoProps = {
  user : UserSession;
};
export default function Logo({
  user
}: LogoProps) {
  const { name, image } = user;
  return (
    <PopOver>
      <div className="flex items-center gap-x-2 data-[focus]:bg-slate-800">
        <div>Hello, {name}</div>
        <Image src={image} width={0} height={0} sizes={'100%'} alt="logo" className="rounded-full aspect-square w-10" />
      </div>
    </PopOver>
  );
}