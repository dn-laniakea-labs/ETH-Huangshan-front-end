import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

// Define custom error classes for better type safety and clarity (optional but recommended)
class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          }
        })
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.avatar,
            role: user.roles[0] || 'user',
            accessToken: user.auth.accessToken,
            refreshToken: user.auth.refreshToken,
          }
        }
        // Return null if user data could not be retrieved
        if (!res.ok) {
          console.error("Authentication failed:", user.message)
          throw new AuthenticationError(user.message);
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/sign-in'
  },
  callbacks: {
    async session({ session, token }) {
      // 将 token 中的数据合并到 session.user
      session.user = {
        ...session.user,
        id: token.id,
        name: token.name,
        role: token.role,
        email: token.email,
        image: token.image as string,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        // 初次登录时将 user 数据写入 token
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.role = user.role;
        token.email = user.email;
        token.image = user.image;
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token
    }
  }
}

export const getServerAuthSession = () => getServerSession(authOptions); 
