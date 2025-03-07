import membershipControllers from "@/db/controllers/membershipControllers"
import { PoolMemberShip, Pool, User } from "@/types"
import Image from "next/image"
import Link from "next/link"


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const post = await membershipControllers.handleSingleMembership({ membershipId: id }) as PoolMemberShip;
  if (!post) {
    return (
      <div>
        <p>Membership not found</p>
      </div>
    )
  }

  return (
    <div>
      {/* back button */}
      <Link href="/subscription-management" className="border-t-neutral-500">
        Back
      </Link>
      <Card subscription={post} />
    </div>
  )
}


function Card({ subscription }: { subscription: PoolMemberShip }) {
  const pool: Pool = (subscription.poolId as Pool);
  const members: User[] = pool.members as User[];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl capitalize">{pool.poolType}</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            {pool.description}
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {
            members.length > 0 &&
            members.map(mem => <MemberCard key={mem.userId} info={mem} ownerId={pool.createdBy.toString()} />)
          }
        </ul>
      </div>
    </div>

  )
}

function MemberCard({ info, ownerId }: { info: User, ownerId: string }) {
  const { name, email, image, id } = info;
  console.log(id, ownerId)
  return (
    <li>
      <div className="flex items-center gap-x-6">
        <Image className="size-16 rounded-full" width={0} height={0} src={image} alt="avatar" />
        <div>
          <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{name}

          </h3>
          {
            ownerId === id?
            <p className="font-semibold text-rose-600">host</p> :
            <p className="font-semibold text-gray-600">member</p> 
          }

          <p className="text-sm/6 font-semibold text-indigo-600">{email}</p>
        </div>
      </div>
    </li>

  )
}