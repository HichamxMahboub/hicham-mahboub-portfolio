import Image from "next/image";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Chip,
  Container,
  GlassCard,
  PageHero,
  SectionBand,
  SectionHeader,
} from "@/components/PageSection";
import { getEducation, getExperience, getProjects, getSkills } from "@/lib/content";
import { siteConfig } from "@/config/siteConfig";

const internshipGoals = [
  "Junior full-stack development with React, Next.js, Angular, Spring Boot, Node.js, .NET, or similar stacks",
  "Backend API, dashboard, admin panel, data workflow, and internal tool projects",
  "Digital transformation work where software improves business, academic, or operational processes",
];

const strengths = [
  "Turning requirements into structured screens, data models, and API endpoints",
  "Building dashboards and back-office flows for users, roles, records, and reporting",
  "Documenting projects clearly with setup notes, architecture decisions, and presentation material",
];

const learningInterests = [
  "Backend architecture",
  "Full-stack systems",
  "Data analytics",
  "Cybersecurity basics",
  "Product and UI quality",
  "Clean code and automation",
];

export default async function AboutPage() {
  const skills = getSkills();
  const experience = getExperience();
  const education = getEducation();
  const projects = await getProjects();

  const timelineItems = experience.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.company,
    date: item.duration,
    description: item.description,
  }));

  const stats = [
    ["2nd year", "ESI engineering student"],
    ["ISITD", "Information Systems and Digital Transformation"],
    [String(projects.length), projects.length === 1 ? "portfolio project" : "portfolio projects"],
  ];

  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <PageHero
        eyebrow="About Hicham"
        title="Engineering student building full-stack systems for practical workflows."
        description="I am a 2nd-year engineering student at ESI in the Information Systems and Digital Transformation track. My portfolio is focused on junior full-stack internship opportunities, with projects around APIs, dashboards, analytics, and digital tools."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/projects" size="lg">View Projects</Button>
          <Button href="/contact" variant="outline" size="lg">Contact Me</Button>
          <Button href={siteConfig.cvPath} variant="ghost" size="lg" download>Download CV</Button>
        </div>
      </PageHero>

      <SectionBand className="pt-0" withBorder={false}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-950 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/My-pdp.png"
                  alt="Hicham Mahboub profile photo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <p className="text-sm font-semibold text-white">Hicham Mahboub</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Junior full-stack internship candidate focused on systems, APIs, dashboards, and analytics projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="rounded-md border-white/10 bg-white/[0.04] px-3 py-1.5 text-cyan-100">
                  Based in Morocco - Internship search
                </Badge>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  I build academic and portfolio projects that connect software engineering with business processes.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  My current focus is junior full-stack development: user interfaces, backend APIs, databases, dashboards, and documentation that make a project understandable and usable.
                </p>
                <p className="max-w-3xl text-base leading-8 text-slate-400">
                  I am not presenting myself as a senior engineer. I am looking for an internship where I can take ownership of well-scoped features, improve through code review, and contribute to web platforms, internal tools, or digital transformation initiatives.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map(([value, label]) => (
                  <GlassCard key={label} className="p-5">
                    <p className="text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardDescription>Internship target</CardDescription>
              <CardTitle>What I am looking for</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {internshipGoals.map((goal) => (
                  <div key={goal} className="rounded-lg border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                    {goal}
                  </div>
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
              <div className="grid gap-3">
                {strengths.map((strength) => (
                  <div key={strength} className="rounded-lg border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                    {strength}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <SectionHeader
            eyebrow="Technical skills"
            title="Tools I use to build full-stack projects"
            description="My skill set is strongest around front-end interfaces, REST APIs, databases, dashboards, delivery tooling, and project documentation."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup) => (
              <GlassCard key={skillGroup.category} className="p-5">
                <h3 className="text-base font-semibold text-white">{skillGroup.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => <Chip key={item}>{item}</Chip>)}
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Learning interests"
            title="Areas I am deliberately strengthening"
            description="These interests support the kind of internship work I am targeting: practical systems, clean implementation, safer software habits, and readable product experiences."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {learningInterests.map((item) => (
              <GlassCard key={item} className="p-4 text-sm font-medium text-slate-200">
                {item}
              </GlassCard>
            ))}
          </div>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <SectionHeader
            eyebrow="Current work"
            title="Academic work, internship exposure, and project building"
            description="A concise timeline of learning, project delivery, and practical software work already present in the portfolio content."
          />
          <div className="mt-10">
            <Timeline items={timelineItems} />
          </div>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <SectionHeader eyebrow="Education" title="Engineering and digital transformation foundation" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className="mt-2 text-slate-300">{edu.field}</CardDescription>
                    </div>
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">{edu.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </SectionBand>
    </main>
  );
}
