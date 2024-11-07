'use server';

import { auth } from "@/authentication/auth.config";
export async function getUser() {
  const session = await auth();
  if (session) {
    return session.user!;
  }
}