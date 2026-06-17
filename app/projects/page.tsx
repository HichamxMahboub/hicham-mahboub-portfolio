import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container, PageHero, SectionBand, SectionHeader } from "@/components/PageSection";
import { getProjectCategories, getProjects } from "@/lib/content";

type ProjectsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const activeFilter = resolvedSearchParams?.category ?? "View All";
  const projects = await getProjects();
  const projectCategories = getProjectCategories();
  const filteredProjects =
    activeFilter === "View All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <PageHero
        eyebrow="Project work"
        title="Projects for internship recruiters"
        description="A practical set of academic and portfolio projects showing full-stack development, backend APIs, dashboards, analytics workflows, and digital transformation thinking."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-2xl font-semibold text-white">{projects.length}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">portfolio projects</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-2xl font-semibold text-white">Full-stack</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">web, backend, desktop, and analytics</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-2xl font-semibold text-white">Honest status</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">no invented live links or deployment claims</p>
          </div>
        </div>
      </PageHero>

      <SectionBand className="pt-0" withBorder={false}>
        <Container>
          <Card className="p-4">
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => {
                const href =
                  category === "View All"
                    ? "/projects"
                    : `/projects?category=${encodeURIComponent(category)}`;
                const isActive = activeFilter === category;

                return (
                  <Link key={category} href={href}>
                    <Badge
                      variant={isActive ? "default" : "outline"}
                      className="cursor-pointer px-4 py-2 text-sm transition-colors hover:border-cyan-100/40 hover:text-white"
                    >
                      {category}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          </Card>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Filtered case studies"
              title={activeFilter === "View All" ? "All projects" : activeFilter}
              description="Each card links to a case-study page with the problem, solution, technical decisions, validation notes, and current availability."
            />
            <p className="text-sm text-slate-500">
              Showing {filteredProjects.length} of {projects.length}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <Card className="mt-10 p-8 text-center">
              <p className="text-lg text-slate-400">No projects found in this category.</p>
            </Card>
          )}
        </Container>
      </SectionBand>
    </main>
  );
}
