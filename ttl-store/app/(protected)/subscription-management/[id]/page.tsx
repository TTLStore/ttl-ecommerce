import membershipControllers from "@/db/controllers/membershipControllers"
import Link from "next/link"


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const post = await membershipControllers.handleSingleMembership({ membershipId: id })
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
      <pre>
        {JSON.stringify(post, null, 2)}
      </pre>
    </div>
  )
}
