
import { authOptions } from "@/app/server/auth";
import NextAuth from "next-auth"

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
