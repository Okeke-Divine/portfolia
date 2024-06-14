import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { redirect } from "next/navigation";

export async function getCurrentSession() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return null
  }
  return session;
}

export async function getUserId() {
  "use server"
  const session = await getCurrentSession();
  const userId = session?.user?.id;
  if (!userId) {
    redirect("/signin")
    return null;
  }
  return userId;
}