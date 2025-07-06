import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface User extends DefaultUser {
    id?: string | number;
    role?: string;
    image?: string;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    user: User
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string | number
    role?: string
    accessToken?: string
    refreshToken?: string
  }
}
