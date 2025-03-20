"use server";

import { signIn } from "@/authentication/auth.config";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google", { redirectTo: "/" });
  }
  catch (error) {
    console.error(error);
    throw error; 
    // why rethrow? 
    // answer: to allow the error to be caught by the caller of this function
  }
}