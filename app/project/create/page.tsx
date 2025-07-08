import { getServerAuthSession } from "@/app/server/auth";
import { CreateProjectComponent } from "@/components/project/CreateProjectComponent";
import { redirect } from "next/navigation";

export default async function CreateProjectPage() {
  const session = await getServerAuthSession();

  console.log(session);

  if (!session || !session.user.id) {
    redirect("/sign-in")
  }
  return (<CreateProjectComponent />);
}
