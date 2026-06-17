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
    case "Backend API / Marketplace Platform":
      return "bg-emerald-950";
    case "Full-Stack Platforms":
      return "bg-slate-900";
    case "Simulation Analytics / Full-Stack Data Platform":
      return "bg-cyan-950";
    case "Education Analytics / Desktop App":
      return "bg-teal-950";
    case "Dashboards & Analytics":
      return "bg-blue-950";
    case "Digital Tools":
      return "bg-zinc-900";
    case "Web Interfaces":
      return "bg-indigo-950";
    default:
      return "bg-gray-950";
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectLinks = Boolean(project.liveLink || project.githubLink);
  const initials = getInitials(project.title);

  return (
    <Card className="group h-full overflow-hidden border-white/10 bg-white/[0.04] transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/projects/${project.id}`} className="block">
        <div className={`relative aspect-video overflow-hidden ${getCategoryTone(project.category)}`}>
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={project.imageAlt ?? project.title}
              fill
              className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-2xl font-semibold text-white shadow-2xl">
                {initials}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
          <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)]">
            <Badge variant="default" className="whitespace-normal rounded-md">
              {project.category}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-black/45 text-base font-semibold text-white backdrop-blur">
            {initials}
          </div>
        </div>
      </Link>

      <CardHeader className="space-y-3">
        <Link href={`/projects/${project.id}`} className="block space-y-3">
          <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
          <CardDescription className="leading-6 text-slate-400">{project.shortDescription}</CardDescription>
        </Link>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={`${project.id}-${tech}`} variant="outline" className="rounded-md">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline" className="rounded-md">+{project.techStack.length - 4}</Badge>
          )}
        </div>

        {project.statusItems && project.statusItems.length > 0 && (
          <div className="grid gap-2 rounded-lg border border-white/10 bg-slate-950/60 p-3 text-sm">
            {project.statusItems.map((item) => (
              <div key={`${project.id}-${item.label}`} className="flex items-center justify-between gap-3">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-medium text-slate-100">{item.value}</span>
              </div>
            ))}
          </div>
        )}

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
