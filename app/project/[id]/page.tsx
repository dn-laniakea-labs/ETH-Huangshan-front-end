import { ProjectComponent } from "@/components/project/ProjectComponent";
import { Project } from "@/types/project.type";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/project/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    }
  })
  const {name, logo, introduction, categories, website, screenshot, functionality}: Project = await res.json();

  return (<ProjectComponent {...{name, logo, introduction, categories, website, screenshot, functionality}} />);
}
