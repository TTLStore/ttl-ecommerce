'use server';

import { auth } from "@/authentication/auth.config";
/**
 * 
 * @returns UserSession | null
 * {name, image, email, userId}
 */
export async function getUser() : Promise<any | null> {
  const session = await auth();

  if (session?.user) {
    return session.user;
  }

  return null;
}