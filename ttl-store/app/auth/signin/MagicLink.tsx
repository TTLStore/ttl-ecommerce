'use client';
import { Button } from "@/components/UI";
import emailSignIn from "@/libs/auth/emailSignIn";
import { useState, useTransition } from "react";
function MagicLink() {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      startTransition(async () => {
        await emailSignIn(email);
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="w-full">
      <form className="w-2/3 mobile:w-[90%] m-auto" onSubmit={handleSubmit} >
        <div className="flex flex-col text-center">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md my-4 w-full"
            placeholder="Email Address" 
            disabled={isPending}
            required
            />
            
        </div>
        <Button
          className="w-full bg-primary hover:bg-primary-normal-hover text-white mt-4 py-4"
        >Sign In With Email
        </Button>
      </form>
    </div>
  )
}

export default MagicLink