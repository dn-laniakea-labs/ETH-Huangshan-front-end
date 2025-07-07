import { MeComponent } from "@/components/me/MeComponent";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "../server/auth";

export default async function MePage() {
  const session = await getServerAuthSession();

  console.log(session);

  if (!session || !session.user.id) {
    redirect("/sign-in")
  }

  return (<MeComponent {...session.user} />);
}  
