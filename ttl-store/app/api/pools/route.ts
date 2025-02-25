import { NextRequest } from "next/server";
import { auth } from "@/authentication/auth.config";
import type { Session } from "next-auth";

import poolControllers from "@/db/controllers/poolControllers";

export async function POST(req: NextRequest) {
  // Get the user session, protect the route
  const session : Session = await auth() as Session;
  if (!session || !session.user) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  const body = await req.json();
  
  try {
    // Create a new pool
    await poolControllers.handlePostPool({ userId: session.user.id, body });
  } catch (error : any) {
    console.error(error);
    return new Response(`error : ${error}`, { status: 500 });
  }

  return new Response('ok', { status: 201 });
}

// TODO: Add a GET route to fetch all pools
// TODO: add pagination to the GET route
export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session || !session.user) {
    return new Response('Unauthorized', { status: 401 });
  }
  const searchParams = request.nextUrl.searchParams
  const poolType = searchParams.get('poolType');
  try {
    const pools = await poolControllers.handleGetPools({ userId: session.user.id, poolType });
    return new Response(JSON.stringify(pools), { status: 200 });
  } catch (error : any) {
    console.error(error);
    return new Response(`error : ${error}`, { status: 500 });
  }
  
}
// TODO: Add a GET route to fetch a single pool
// TODO: Add a DELETE route to delete a pool

// Request body: { poolId: string }
export async function PATCH(request: NextRequest) {
  const session = await auth();
  if (!session || !session.user) {
    return new Response('Unauthorized', { status: 401 });
  }
  // Update a pool by adding a member
  const body = await request.json();
  const poolId = body.poolId;

  try {
    await poolControllers.handlePatchPool({ userId: session.user.id, poolId });
  } catch (error : any) {
    console.error(error);
    return new Response(`error : ${error}`, { status: 500 });
  }
  return new Response('ok', { status: 200 });
}