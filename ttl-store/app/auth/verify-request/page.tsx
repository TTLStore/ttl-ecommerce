import Link from "next/link"

function page() {
  return (
    // Create a custom page using tailwind css to let user know that a verification email has been sent
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 shadow-xl p-8 rounded-xl">
        <h1 className="my-4 font-bold text-center p-4 rounded-lg bg-green-300 text-green-900">Verification Email Sent</h1>
        <p className="text-center">
          Please check your email to verify your account, if you don't see the email, please check your spam folder.
        <br/>
          If you still don't see the email, &nbsp;
          <Link href="/auth/signin" className="underline text-blue-500">
            click here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default page