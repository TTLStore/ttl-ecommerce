import verificationControllers from "@/db/controllers/verificationControllers";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendVerificationEmail } from "@/libs/nodemailer/generateMessage";

export async function GET(req: Request, res: Response) {
  const searchParams = new URL(req.url).searchParams
  const verificationToken = searchParams.get("token") as string;
  // TODO: verify the token
  // if verificationToken is correct, update the user's emailVerified field to true
  // let the user know they can leave the page now
  // otherise, let the user know the token is invalid or expired, ask them to request a new one
  const isVerified = await verificationControllers.verifyToken(verificationToken);
  if (!isVerified) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
  }
  
  const verifiedUrl =  new URL("/verified", process.env.NEXTAUTH_URL as string);
  return NextResponse.redirect(verifiedUrl);
}


export async function POST(req: Request, res: Response) {
  try {
    const headerList = headers();
    const userId = headerList.get("x-user-id");
    const email = headerList.get("x-user-email");
    // check userId and email exist
    if (!userId || !email) {
      return NextResponse.json({ message: "User ID or email not provided" }, { status: 400 });
    }

    const token = await verificationControllers.createVerificationToken(userId);
    await sendVerificationEmail({ to: email, token });
    return NextResponse.json({ message: `Verification email sent to ${email}` });
  } catch (error: any) {
    return NextResponse.json({
      message: `Error creating verification token`,
      errorMessage: error.message || "An error occurred while creating verification token"
    }, { status: error.status || 500 });
  }
}