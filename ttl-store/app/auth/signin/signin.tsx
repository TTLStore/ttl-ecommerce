"use client";
import { Button } from "@/components/UI";
import { handleGoogleSignIn } from "@/libs/auth/handleGoogleSignIn";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import BackButton from "./BackButton";
import MagicLink from "./MagicLink";

function SignInPage() {
  return (
    <main className="flex max-h-screen justify-center items-center">
      <div className="w-full desktop:max-w-[639px] desktop:w-1/2 flex min-h-screen flex-col items-center justify-center my-4">
        <Header />
        <MagicLink />
        <OAuthProviders />

        <div className="hidden mobile:block mobile:my-8">
          <BackButton />
        </div>
      </div>
      <div className="relative mobile:hidden">
        <div className="absolute top-10 left-10">
          <BackButton />
        </div>
        <Image alt="login-img" src="/images/login-img.webp"
          sizes="(max-width: 639px) 0vw, 100%"
          width={0} height={0} className="w-full h-svh " />
      </div>
    </main>
  )
}

function Header() {
  return (
    <header className="w-full mb-10 flex flex-col justify-center items-center text-[#414141]">
      <Image src="/images/logo-blue.svg" className="mb-10" width={64} height={64} alt="logo" />
      <h1 className="text-4xl font-[700] mb-2">Welcome Back !</h1>
      <p className="text-base">Please enter your details</p>
    </header>
  )
}



function OAuthProviders() {
  return (
    <div className='w-2/3 mobile:w-[90%] mt-4'>
      <h2 className="relative my-12">
        <div className="border-t border-[#404040] " />
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">Or Sign In With</span>
      </h2>

      <div className="w-full flex justify-between ">
        <Button className="w-full justify-center flex items-center border border-[#DFE1E8] rounded-md"
          onClick={() => /*handleFacebookSignIn() */ alert("Not implemented yet")}
        >
          <BsFacebook color="0F2BA4" className="mx-1" />
          Facebook
        </Button>
        <div className="w-4"></div>
        <Button className="w-full justify-center flex items-center border border-[#DFE1E8] rounded-md"
          onClick={() => handleGoogleSignIn()}>
          <FcGoogle className="mx-1" />
          Google
        </Button>
      </div>

    </div>
  )
}

export default SignInPage