
import { authOptions } from "@/app/server/auth";
import NextAuth from "next-auth"

// Define custom error classes for better type safety and clarity (optional but recommended)
class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
