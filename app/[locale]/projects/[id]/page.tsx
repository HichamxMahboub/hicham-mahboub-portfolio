import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { getProjectById, getProjects } from "@/lib/content";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isFinite(projectId)) {
    notFound();
  }

  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const relatedProjects = (await getProjects()).filter((item) => item.id !== project.id).slice(0, 3);

  return <ProjectDetailContent project={project} relatedProjects={relatedProjects} />;
}
