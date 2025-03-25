"use client";

import { handleSignOut } from "@/libs/auth/handleSignOut";
import { Button } from "@headlessui/react";


export default function SignOutButton({
  className
}: {
  className : string
}) {
  return (
   <Button className={className} onClick={() => handleSignOut()}>Sign Out</Button>
  );
}