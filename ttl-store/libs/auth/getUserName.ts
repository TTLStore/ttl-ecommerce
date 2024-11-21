'use server';

import { auth } from "@/authentication/auth.config";
import { UserSession } from "@/types";
/**
 * 
 * @returns UserSession | null
 * {name, image, email, userId}
 */
export async function getUser() : Promise<UserSession | null> {
  const session = await auth();
  console.log('session from getUser: ', session);
  if (session?.user) {
    return {
      name: session.user.name || "No name",
      image: session.user.image || "",
      email: session.user.email || "",
      userId: session.user.id || ""
    }
  }

  return null;
}