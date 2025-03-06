import { SectionWrapper } from "@/hoc";
import { getUser } from "@/libs/auth/getUserName";
import Image from "next/image";
import { ReactNode } from "react";


async function Profile() {
  const user = await getUser();
  if (!user) {
    return (
      <h1> Error </h1>
    )
  }
  return (
    <>
      <h1> Helleo, {user.name}</h1>
      <div>
        <p>User profile Image</p>
        {user.image && <Image src={user.image} alt="user profile image" width={100} height={100} className='rounded-full' />}
        <p>email: {user.email}</p>
        <Email emailVerified={user.emailVerified} />
      </div>
    </>
  )
}

const Email = ({ emailVerified }: { emailVerified: Date }) : ReactNode => {


  if (emailVerified) {
    return (<p>Email verified on: {emailVerified.toISOString()}</p>)
  }

  return (
  <p>
    Email not verified - Request a verification email
  </p>
  )
}

export default SectionWrapper(Profile, "Profile");