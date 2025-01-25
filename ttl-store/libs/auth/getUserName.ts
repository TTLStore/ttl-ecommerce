'use server';

import { auth } from "@/authentication/auth.config";
import { UserSession } from "@/types";
import { User } from "next-auth";
/**
 * 
 * @returns UserSession | null
 * {name, image, email, userId}
 */
export async function getUser() : Promise<any | null> {
  const session = await auth();
  console.log('session from getUser: ', session);
  if (session?.user) {
    return session.user;
  }

  return null;
}