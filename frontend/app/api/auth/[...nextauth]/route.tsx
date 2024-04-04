import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "Matias", email: "matias@example.com" };
        if (user) {
          return user;
        }
        return null;
      },
      //     const res = await fetch(
      //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      //       {
      //         method: "POST",
      //         body: JSON.stringify({
      //           email: credentials?.email,
      //           password: credentials?.password,
      //         }),
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //       }
      //     );
      //     const user = await res.json();
      //     if (user.error) throw user;
      //     return user;
      //   },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token }) {
  //     session.user = token as any;
  //     return session;
  //   },
  // },
  // pages: {
  //   signIn: "/loginw",
  // },
});

export { handler as GET, handler as POST };
