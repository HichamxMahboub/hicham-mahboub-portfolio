import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: ProjectItem;
}

function getInitials(title: string) {
  return title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function getCategoryTone(category: ProjectItem["category"]) {
  switch (category) {
    case "Full-Stack Platforms":
      return "from-slate-950 via-slate-800 to-cyan-900";
    case "Dashboards & Analytics":
      return "from-blue-950 via-slate-900 to-indigo-900";
    case "Digital Tools":
      return "from-zinc-950 via-neutral-800 to-stone-900";
    case "Web Interfaces":
      return "from-indigo-950 via-violet-900 to-slate-950";
    default:
      return "from-gray-950 via-gray-900 to-gray-800";
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectLinks = Boolean(project.liveLink || project.githubLink);
  const initials = getInitials(project.title);

  return (
    <Card className="group overflow-hidden rounded-[1.5rem] border-gray-200 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800">
      <Link href={`/projects/${project.id}`} className="block">
        <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${getCategoryTone(project.category)}`}>
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={project.imageAlt ?? project.title}
              fill
              className="object-cover opacity-80 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-3xl font-semibold text-white shadow-2xl">
                {initials}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute left-5 top-5">
            <Badge variant="secondary" className="bg-white/90 text-gray-950">
              {project.category}
            </Badge>
          </div>
          <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/35 text-lg font-semibold text-white backdrop-blur">
            {initials}
          </div>
        </div>
      </Link>

      <CardHeader className="space-y-3">
        <Link href={`/projects/${project.id}`} className="block space-y-3">
          <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
          <CardDescription className="leading-6">{project.shortDescription}</CardDescription>
        </Link>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={`${project.id}-${tech}`} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline">+{project.techStack.length - 4}</Badge>
          )}
        </div>

        {hasProjectLinks && (
          <div className="flex flex-wrap gap-3">
            {project.liveLink && (
              <Button href={project.liveLink} variant="outline" size="sm">
                Live Demo
              </Button>
            )}
            {project.githubLink && (
              <Button href={project.githubLink} variant="ghost" size="sm">
                GitHub
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
