"use server";

import { signIn } from "@/authentication/auth.config";

export default async function emailSignIn(email: string) {
  try {
    await signIn("nodemailer", {email, redirectTo: "/"})
  } catch (error) {
    console.error("Error signing in with email", error);
    throw error;
  }
}