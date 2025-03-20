import { PoolMemberships } from "@/db/models";
import { auth } from "@/authentication/auth.config";
import dbConnect from "@/db/dbConnect";
import { HTTP_STATUS } from "@/constants";
import { NextRequest } from "next/server";
import membershipControllers from "@/db/controllers/membershipControllers";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session || !session.user) {
    return new Response("Unauthorized", { status: HTTP_STATUS.UNAUTHORIZED });
  }

  const params = request.nextUrl.searchParams;
  const page = params.get("page") || "1";
  const limit = params.get("limit") || "10";

  try {
    const allMemberships = await membershipControllers.handleGetMemberships({ userId: session.user.id });
    return new Response(JSON.stringify(allMemberships), { status: HTTP_STATUS.OK });
  } catch (error : any) {
    console.error(error);
    return new Response(`error : ${error}`, { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
}