import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import MongoPromise from "@lib/mongodb";
import { Adapter } from "next-auth/adapters";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(MongoPromise) as Adapter,
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
};
export default NextAuth(authOptions);
