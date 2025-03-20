"use client";

import { handleSignOut } from "@/libs/auth/handleSignOut";
import Button from "./Button";

export default function SignOutButton() {
  return (
   <Button onClick={handleSignOut}>Sign Out</Button>
  );
}