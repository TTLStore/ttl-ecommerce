import { SectionWrapper } from "@/hoc";
import Pools from "../Profile/Pools/Pools";
import MemberPool from "../Profile/MemberPool/MemberPool";
import { getUser } from "@/libs/auth/getUserName";
import Image from "next/image";


async function Profile() {
  const user = await getUser();
  console.log("user on profile: ", user);
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
        <Image src={user.image} alt="user profile image" width={100} height={100} />
        <p>User email: {user.email}</p>
      </div>
    </>
  )
}

export default SectionWrapper(Profile, "Profile");