import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

// export const {
//   auth,
//   handler: { GET, POST },
// } = NextAuth(authConfig);


const authHandler = NextAuth(authConfig);

export { authHandler as GET, authHandler as POST };

