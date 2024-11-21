import { NextResponse } from "next/server";
import userControllers from "@/db/controllers/userControllers";
/* ---------------------------------
- User Routes
This route is responsible for handling all user related routes.
Tasks:
 - Update user profile includes: name, email, image/avatar, payment info, phone number

---------------------------------- */
export async function PATCH(req: Request, res: Response) {
  // TODO: Update user profile
  // Data should be sent as form data
  // User id should be sent in the headers
  // Type of update: name, email, image/avatar, payment info, phone number
  // Validate the request body
  try {
    const formData = await req.formData();
    const userId = req.headers.get("x-user-id");
    const updatedUser = await userControllers.handlePatchUser({ userId , body: Object.fromEntries(formData) });
    return NextResponse.json({ updatedUser });
  } catch (error : any) {
    return NextResponse.json({ 
      message: `Error updating user`,
      errorMessage: error.message || "An error occurred while updating user profile"
    }, { status: error.status || 500 }); 
  }
}
