import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";

export async function getCurrentSession() {
  const session = await getServerSession(authOptions)
  if(!session){
    return null
  }
  return session;
}