import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Timeline from "@/components/Timeline";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getEducation, getExperience, getSkills } from "@/lib/content";

const internshipGoals = [
    "Full-stack web development with React, Next.js, Angular, Spring Boot, Node.js, or similar stacks",
    "Dashboard, admin panel, API, data workflow, or internal tool projects",
    "Digital transformation work where software improves a business, academic, or operational process",
];

const strengths = [
    "Turning requirements into structured screens, data models, and API endpoints",
    "Building dashboards and back-office flows for users, roles, records, and reporting",
    "Documenting projects clearly with setup notes, architecture decisions, and presentation material",
];

export default function AboutPage() {
    const skills = getSkills();
    const experience = getExperience();
    const education = getEducation();

    const timelineItems = experience.map((item) => ({
        id: item.id,
        title: item.role,
        subtitle: item.company,
        date: item.duration,
        description: item.description,
    }));

    return (
        <main className="min-h-screen bg-[#f5f3ee] text-gray-950 dark:bg-gray-950 dark:text-white">
            <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle
                        subtitle="About"
                        title="Junior Full-Stack Developer & Digital Transformation Engineering Student"
                        description="I am looking for an internship where I can contribute to practical software projects, learn from experienced engineers, and keep strengthening my full-stack development skills."
                    />
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
                    <Card className="overflow-hidden border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-gray-100 text-white dark:bg-gray-950">
                            <Image
                                src="/images/My-pdp.png"
                                alt="Hicham Mahboub profile photo"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                                    Hicham Mahboub
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">
                                    Full-stack internship candidate
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="uppercase tracking-[0.24em]">
                                Based in Morocco · Internship search
                            </Badge>
                            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                                I build academic and portfolio projects that connect software engineering with business processes.
                            </h2>
                            <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                                I&apos;m Hicham Mahboub, an Information Systems and Digital Transformation Engineering student. My current focus is junior full-stack development: user interfaces, backend APIs, dashboards, databases, and documentation that make a project understandable and usable.
                            </p>
                            <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
                                I am not presenting myself as a senior engineer. I am looking for an internship where I can take ownership of well-scoped features, improve through code review, and contribute to web platforms, internal tools, or digital transformation initiatives.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <Card>
                                <CardHeader className="pb-3">
                                    <CardDescription>Profile</CardDescription>
                                    <CardTitle className="text-2xl">Junior Full Stack</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader className="pb-3">
                                    <CardDescription>Projects</CardDescription>
                                    <CardTitle className="text-3xl">6</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader className="pb-3">
                                    <CardDescription>Track</CardDescription>
                                    <CardTitle className="text-2xl">Digital Transformation</CardTitle>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardDescription>Internship target</CardDescription>
                            <CardTitle>What I am looking for</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {internshipGoals.map((goal) => (
                                    <p key={goal} className="rounded-2xl bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                                        {goal}
                                    </p>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardDescription>Strengths</CardDescription>
                            <CardTitle>Where I can contribute</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {strengths.map((strength) => (
                                    <p key={strength} className="rounded-2xl bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700 dark:bg-gray-900/60 dark:text-gray-300">
                                        {strength}
                                    </p>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Separator className="mb-10" />
                    <SectionTitle
                        subtitle="Technical skills"
                        title="Tools I use to build full-stack projects"
                        description="My skill set is strongest around front-end interfaces, REST APIs, databases, dashboards, and project documentation."
                    />

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {skills.map((skillGroup) => (
                            <Card key={skillGroup.category}>
                                <CardHeader>
                                    <CardDescription>{skillGroup.category}</CardDescription>
                                    <CardTitle className="text-lg">Stack</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item, idx) => (
                                            <Badge key={`${skillGroup.category}-${idx}`} variant="secondary">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Separator className="mb-10" />
                    <SectionTitle
                        subtitle="Experience"
                        title="Academic work, internship exposure, and side projects"
                        description="A concise timeline of learning, project delivery, and practical software work."
                    />

                    <div className="mt-12">
                        <Timeline items={timelineItems} />
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Separator className="mb-10" />
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-500 dark:text-gray-400">
                        Education
                    </p>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {education.map((edu) => (
                            <Card key={edu.id}>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-6">
                                        <div>
                                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                                            <CardDescription className="mt-2 text-accent-600 dark:text-accent-400">
                                                {edu.field}
                                            </CardDescription>
                                        </div>
                                        <Badge variant="outline">{edu.year}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {edu.institution}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
