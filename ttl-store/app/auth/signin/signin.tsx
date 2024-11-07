"use client";

import { handleGoogleSignIn } from "@/libs/auth/handleGoogleSignIn";

function SignInPage() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleGoogleSignIn()}
      >
        Login with google
      
      </button>
    </main>
  )
}

export default SignInPage