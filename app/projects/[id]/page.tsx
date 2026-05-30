import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectById, getProjects } from "@/lib/content";

type ProjectDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

function getInitials(title: string) {
    return title
        .split(/\s+/)
        .filter((word) => /^[A-Za-z]/.test(word))
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { id } = await params;
    const projectId = Number(id);

    if (!Number.isFinite(projectId)) {
        notFound();
    }

    const project = await getProjectById(projectId);

    if (!project) {
        notFound();
    }

    const relatedProjects = (await getProjects())
        .filter((item) => item.id !== project.id)
        .slice(0, 3);
    const hasProjectLinks = Boolean(project.liveLink || project.githubLink);
    const initials = getInitials(project.title);

    return (
        <main className="min-h-screen bg-[#f5f3ee] text-gray-950 dark:bg-gray-950 dark:text-white">
            <section className={`relative overflow-hidden ${project.bgColor}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/75" />
                {project.imageSrc ? (
                    <Image
                        src={project.imageSrc}
                        alt={project.imageAlt ?? project.title}
                        fill
                        className="object-cover opacity-85 mix-blend-multiply"
                        priority
                        sizes="100vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
                        <div className="flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 text-5xl font-semibold text-white">
                            {initials}
                        </div>
                    </div>
                )}
                <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
                    <div className="max-w-4xl space-y-5 text-white">
                        <Badge variant="secondary" className="w-fit">
                            {project.category}
                        </Badge>
                        <h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                            {project.title}
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 pt-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardDescription>Short overview</CardDescription>
                                <CardTitle>Project context</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                                    {project.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardDescription>Problem solved</CardDescription>
                                <CardTitle>What needed to change</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                                    {project.problem}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardDescription>Key features</CardDescription>
                                <CardTitle>What the project includes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {project.keyFeatures.map((feature) => (
                                        <p key={feature} className="rounded-2xl bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                                            {feature}
                                        </p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardDescription>Implementation</CardDescription>
                                <CardTitle>How I approached it</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                                    {project.solution}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                            <CardHeader>
                                <CardDescription className="text-white/60 dark:text-gray-600">
                                    Internship relevance
                                </CardDescription>
                                <CardTitle>What this project demonstrates</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-8 text-white/85 dark:text-gray-700">
                                    {project.result}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardDescription>What I learned</CardDescription>
                                <CardTitle>Technical takeaway</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                                    {project.learned}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardDescription>Project details</CardDescription>
                                <CardTitle>Tech stack</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <Badge key={`${project.id}-tech-${tech}`} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {hasProjectLinks && (
                            <Card>
                                <CardHeader>
                                    <CardDescription>Links</CardDescription>
                                    <CardTitle>Explore the project</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                    {project.githubLink && (
                                        <Button href={project.githubLink} variant="outline" target="_blank">
                                            GitHub
                                        </Button>
                                    )}
                                    {project.liveLink && (
                                        <Button href={project.liveLink} variant="default" target="_blank">
                                            Live Demo
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        <Card className="bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                            <CardHeader>
                                <CardDescription className="text-white/60 dark:text-gray-600">
                                    Recruiter note
                                </CardDescription>
                                <CardTitle>Internship fit</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-6 text-white/80 dark:text-gray-700">
                                    I am looking for internship work where I can contribute to
                                    full-stack features, dashboards, APIs, and internal tools while
                                    learning from an experienced team.
                                </p>
                                <div className="mt-5">
                                    <Button href="/contact" variant="secondary">
                                        Contact me
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Separator className="mb-10" />
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-500 dark:text-gray-400">
                                Related work
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                                More projects
                            </h2>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedProjects.map((relatedProject) => (
                            <Card key={relatedProject.id} className="overflow-hidden">
                                <Link href={`/projects/${relatedProject.id}`} className="block">
                                    <div
                                        className={`relative h-52 overflow-hidden ${relatedProject.bgColor}`}
                                    >
                                        {relatedProject.imageSrc ? (
                                            <Image
                                                src={relatedProject.imageSrc}
                                                alt={relatedProject.imageAlt ?? relatedProject.title}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center bg-gray-950 text-3xl font-semibold text-white">
                                                {getInitials(relatedProject.title)}
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                                    </div>
                                    <CardHeader>
                                        <CardDescription>{relatedProject.category}</CardDescription>
                                        <CardTitle className="text-xl">
                                            {relatedProject.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                                            {relatedProject.shortDescription}
                                        </p>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Button href="/projects" variant="outline">
                        Back to Projects
                    </Button>
                </div>
            </section>
        </main>
    );
}
