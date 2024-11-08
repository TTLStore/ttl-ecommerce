import { checkIsAuthenticated } from "@/libs/auth/checkIsAuthenticated"
import SignInPage from "./signin"
import { redirect } from "next/navigation";

async function page() {
  const isAuthenticated = await checkIsAuthenticated();
  if (isAuthenticated) { // If user is authenticated, redirect to dashboard
    redirect('/dashboard');
  }

  return (
    <SignInPage />
  )
}

export default page