import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedEmail = "gjorgievskidejan91@gmail.com"; // Replace with your allowed email

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if the email is the allowed one
      if (user.email === allowedEmail) {
        return true;
      } else {
        // You can log the unauthorized access attempt here if needed
        console.warn(`Unauthorized sign in attempt by: ${user.email}`);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
