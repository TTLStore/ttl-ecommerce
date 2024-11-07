import { checkIsAuthenticated } from "@/libs/auth/checkIsAuthenticated"
import SignInPage from "./signin"
function page() {
  const isAuthenticated = checkIsAuthenticated();
  if (!isAuthenticated) {
    return (
      <div>not authenticated</div>
    )
  }

  return (
    <SignInPage />
  )
}

export default page