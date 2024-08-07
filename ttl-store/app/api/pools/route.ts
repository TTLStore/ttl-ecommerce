import { NextRequest } from "next/server";
import { PoolMemberships, Pools } from "@/db/models";
import { auth } from "@/authentication/auth.config";
import dbConnect from "@/db/dbConnect";
import { PoolMemberRole } from "@/types";

export async function POST(req: NextRequest) {
  // Get the user session, protect the route
  const session = await auth();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  const body = await req.json();
  
  try {
    // Create a new pool
    await dbConnect();
    const newPool = new Pools({
      createdBy: session.user.userId,
      poolType: body.poolType,
      maxMembers: body.maxMembers,
      isOpen: body.isOpen,
      isPublic: body.isPublic,
      description: body.description,
    });

    const newPoolMemberShip = new PoolMemberships({
      userId: session.user.userId,
      poolId: newPool._id,
      role: PoolMemberRole.Admin,
    });

    await newPoolMemberShip.save();
    await newPool.save();
  } catch (error : any) {
    return new Response('error', { status: 500 });
  }

  return new Response('ok', { status: 201 });
}

// TODO: Add a GET route to fetch all pools
export async function GET() {
  const userId = (await auth())?.user.userId;
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  await dbConnect();
  const pools = await Pools.find({ createdBy: userId });
  return new Response(JSON.stringify(pools), { status: 200 });
}
// TODO: Add a GET route to fetch a single pool
// TODO: Add a PUT route to update a pool
// TODO: Add a DELETE route to delete a pool