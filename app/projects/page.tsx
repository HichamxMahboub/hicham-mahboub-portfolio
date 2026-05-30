import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
        <main className="min-h-screen bg-[#f5f3ee] text-gray-950 dark:bg-gray-950 dark:text-white">
            <section className="px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pt-24">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle
                        subtitle="Project work"
                        title="Projects for internship recruiters"
                        description="A practical set of academic and portfolio projects showing full-stack development, dashboards, APIs, and digital transformation thinking."
                    />
                </div>
            </section>

            <section className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
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
                                            className="cursor-pointer px-5 py-2 text-sm"
                                        >
                                            {category}
                                        </Badge>
                                    </Link>
                                );
                            })}
                        </div>
                    </Card>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Separator className="mb-10" />

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <Card className="mt-10 p-8 text-center">
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                No projects found in this category.
                            </p>
                        </Card>
                    )}
                </div>
            </section>
        </main>
    );
}
