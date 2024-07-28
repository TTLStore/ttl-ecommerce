import nextAuth from "next-auth";
import authConfig from "@/authentication/auth.config";
const handlers = nextAuth(authConfig);

export {
  handlers as GET,
  handlers as POST,
}