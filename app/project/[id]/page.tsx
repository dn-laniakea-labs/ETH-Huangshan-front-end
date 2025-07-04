import { ProjectComponent } from "@/components/project/ProjectComponent";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { id } = await params;

  return (<ProjectComponent />);
}
