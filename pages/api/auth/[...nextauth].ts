import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import MongoPromise from "@lib/mongodb";
import { Adapter } from "next-auth/adapters";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "1069581278258-qa6dm81091gt1h2pe2bmhbmea3gcuvgo.apps.googleusercontent.com" ||
        process.env.AUTH_SECRET,
      clientSecret:
        "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" ||
        (process.env.GOOGLE_CLIENT_SECRET as string),
    }),
    // ...add more providers here
  ],
  secret: "40472782775577c963c7f52af5afcbeb",
  adapter: MongoDBAdapter(MongoPromise) as Adapter,
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
};
export default NextAuth(authOptions);
