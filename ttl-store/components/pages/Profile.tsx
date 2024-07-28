import { auth } from "@/authentication/auth.config";

import { SectionWrapper } from "@/hoc";
import Pools from "../Profile/Pools/Pools";
import { PoolMemberships } from "@/db/models";
import MemberPool from "../Profile/MemberPool/MemberPool";

const ID = '10';

async function Profile() {
  const session = await auth();
  const { name } = session.user;
  return (
    <>
      <h1 className="text-4xl font-bold mb-2 text-white">Hello, {name}</h1>
      <div className="flex flex-col bg-default-blur p-8 rounded-md m-4 ">
        <h2 className="text-2xl font-bold mb-2 text-white">You have</h2>
        <div className="flex flex-col gap-2">
          <Pools id={ID} />
        </div>
      </div>

      <div className="flex flex-col bg-default-blur p-8 rounded-md m-4 ">
        <h2 className="text-2xl font-bold mb-2 text-white">You are in</h2>
        <div className="flex flex-col gap-2">
          <MemberPool id={ID} />
        </div>
      </div>

    </>
  )
}

export default SectionWrapper(Profile, "Profile");