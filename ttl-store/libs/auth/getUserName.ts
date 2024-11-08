'use server';

import { auth } from "@/authentication/auth.config";
import { UserSession } from "@/types";
export async function getUser() : Promise<UserSession | null> {
  const session = await auth();
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