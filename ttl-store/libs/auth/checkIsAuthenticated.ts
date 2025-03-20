'use server';

import { auth } from "@/authentication/auth.config";

export async function checkIsAuthenticated() {
  const session = await auth();
  if (!session) {
    return false;
  }
  return true;
}