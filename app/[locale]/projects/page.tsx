import type { ProjectItem } from "@/types";
import { getProjects } from "@/lib/content";
import ProjectsContent from "@/components/ProjectsContent";

type ProjectsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const activeFilter = resolvedSearchParams?.category ?? "View All";
  const projects = await getProjects();

  return <ProjectsContent projects={projects as ProjectItem[]} activeFilter={activeFilter} />;
}
