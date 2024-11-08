"use server";

import { signOut } from "@/authentication/auth.config";

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.error(error);
    throw error;
  }
}