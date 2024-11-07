import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth";
import clientPromise from "@/db/nextAuthConnect";

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  session: {
    maxAge: 60 * 60 * 24 // 24 hours
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      allowDangerousEmailAccountLinking: true,
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
    })
  ],
  callbacks: {
    async session({ session, user } : any) {
        console.log('session', session);
        session.user.userId = user.id;
      return Promise.resolve(session);
    },
    
  }
});

