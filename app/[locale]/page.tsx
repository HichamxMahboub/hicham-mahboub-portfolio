import HomeContent from "@/components/HomeContent";
import { getProjects } from "@/lib/content";
import type { ProjectItem } from "@/types";

function getFeaturedProjects(projects: ProjectItem[], limit = 3) {
  const smartSim = projects.find((project) => project.slug === "smartsim-analytics");

  if (!smartSim) {
    return projects.slice(0, limit);
  }

  return [smartSim, ...projects.filter((project) => project.slug !== "smartsim-analytics")].slice(0, limit);
}

export default async function HomePage() {
  const projects = await getProjects();
  const featuredProjects = getFeaturedProjects(projects, 3);
  const projectCount = projects.length;

  return <HomeContent featuredProjects={featuredProjects} projectCount={projectCount} />;
}
