import { PoolMemberships } from "@/db/models";
import { auth } from "@/authentication/auth.config";
import dbConnect from "@/db/dbConnect";

export async function GET() {
  const userId = (await auth())?.user.userId;
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  await dbConnect();
  const pools = await PoolMemberships.find({ userId: userId });
  return new Response(JSON.stringify(pools), { status: 200 });
}