import Google from "next-auth/providers/google";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { NextAuthOptions } from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { nextAuthDBConnect } from "@/db";
import { getServerSession } from "next-auth";

const authConfig = {
  adapter: MongoDBAdapter(nextAuthDBConnect),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      // callback to add custom profile data
      profile(profile) {
        return {
          id: profile.sub, // sub is the unique identifier for the user
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(), 
          updatedAt: new Date(),
        };
      }
    }),
  ],
  callbacks: {
    async session({ session, user } : any) {
        session.user.userId = user.id;
      return Promise.resolve(session);
    },
  }
} satisfies NextAuthOptions;

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authConfig);
}

export default authConfig;