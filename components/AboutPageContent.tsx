"use client";

import Image from "next/image";
import Timeline from "@/components/Timeline";
import { useLocale } from "@/components/LocaleProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Chip, Container, GlassCard, PageHero, SectionBand, SectionHeader } from "@/components/PageSection";
import type { EducationItem, ExperienceItem, ProjectItem, Skill } from "@/types";
import { siteConfig } from "@/config/siteConfig";
import { localizePath } from "@/src/i18n/dictionaries";
import { localizeAboutCopy, localizeEducation, localizeExperience, localizeSkills } from "@/components/AboutContent";

type AboutContentProps = {
  skills: Skill[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
};

const lists = {
  en: {
    internshipGoals: [
      "Junior full-stack development with React, Next.js, Angular, Spring Boot, Node.js, .NET, or similar stacks",
      "Backend API, dashboard, admin panel, data workflow, and internal tool projects",
      "Digital transformation work where software improves business, academic, or operational processes",
    ],
    strengths: [
      "Turning requirements into structured screens, data models, and API endpoints",
      "Building dashboards and back-office flows for users, roles, records, and reporting",
      "Documenting projects clearly with setup notes, architecture decisions, and presentation material",
    ],
    learning: [
      "Backend architecture",
      "Full-stack systems",
      "Data analytics",
      "Cybersecurity basics",
      "Product and UI quality",
      "Clean code and automation",
    ],
  },
  fr: {
    internshipGoals: [
      "Developpement junior full-stack avec React, Next.js, Angular, Spring Boot, Node.js, .NET ou des stacks similaires",
      "Projets API backend, tableaux de bord, panneaux d'administration, workflows de donnees et outils internes",
      "Travail de transformation digitale ou le logiciel ameliore les processus metier, academiques ou operationnels",
    ],
    strengths: [
      "Transformer les besoins en ecrans structures, modeles de donnees et points de terminaison API",
      "Construire des tableaux de bord et des flux back-office pour utilisateurs, roles, enregistrements et reporting",
      "Documenter les projets avec notes d'installation, choix d'architecture et support de presentation",
    ],
    learning: [
      "Architecture backend",
      "Systemes full-stack",
      "Analyse de donnees",
      "Bases de la cybersécurité",
      "Qualite produit et UI",
      "Code propre et automatisation",
    ],
  },
  ar: {
    internshipGoals: [
      "تطوير junior full-stack باستخدام React و Next.js و Angular و Spring Boot و Node.js و .NET أو تقنيات مشابهة",
      "مشاريع واجهات برمجة التطبيقات ولوحات التحكم ولوحات الإدارة وسير عمل البيانات والأدوات الداخلية",
      "أعمال التحول الرقمي حيث يحسن البرنامج العمليات التجارية أو الأكاديمية أو التشغيلية",
    ],
    strengths: [
      "تحويل المتطلبات إلى شاشات منظمة ونماذج بيانات ونقاط نهاية API",
      "بناء لوحات التحكم وسير العمل الخلفي للمستخدمين والأدوار والسجلات والتقارير",
      "توثيق المشاريع بشكل واضح مع ملاحظات الإعداد وقرارات المعمارية ومواد العرض",
    ],
    learning: [
      "معمارية الخلفية",
      "أنظمة full-stack",
      "تحليل البيانات",
      "أساسيات الأمن السيبراني",
      "جودة المنتج وواجهة المستخدم",
      "الكود النظيف والأتمتة",
    ],
  },
} as const;

export default function AboutPageContent({ skills, experience, education, projects }: AboutContentProps) {
  const { locale } = useLocale();
  const page = localizeAboutCopy(locale);
  const localizedSkills = localizeSkills(skills, locale);
  const localizedExperience = localizeExperience(experience, locale);
  const localizedEducation = localizeEducation(education, locale);
  const timelineItems = localizedExperience.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.company,
    date: item.duration,
    description: item.description,
  }));
  const text = lists[locale];

  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description}>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={localizePath(locale, "/projects")} size="lg">{locale === "fr" ? "Voir les projets" : "View Projects"}</Button>
          <Button href={localizePath(locale, "/contact")} variant="outline" size="lg">{locale === "fr" ? "Me contacter" : "Contact Me"}</Button>
          <Button href={siteConfig.cvPath} variant="ghost" size="lg" download>{locale === "fr" ? "Telecharger le CV" : "Download CV"}</Button>
        </div>
      </PageHero>

      <SectionBand className="pt-0" withBorder={false}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-950 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image src="/images/My-pdp.png" alt="Hicham Mahboub profile photo" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <p className="text-sm font-semibold text-white">Hicham Mahboub</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{page.profile}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="rounded-md border-white/10 bg-white/[0.04] px-3 py-1.5 text-cyan-100">{page.basedIn}</Badge>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{page.introTitle}</h2>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{page.introBody}</p>
                <p className="max-w-3xl text-base leading-8 text-slate-400">{page.introBody2}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  [page.stats[0], page.stats[1]],
                  [page.stats[2], page.stats[3]],
                  [String(projects.length), projects.length === 1 ? page.stats[4] : page.stats[5]],
                ].map(([value, label]) => (
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
              <CardDescription>{page.internshipTarget}</CardDescription>
              <CardTitle>{page.internshipTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {text.internshipGoals.map((goal) => (
                  <div key={goal} className="rounded-lg border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                    {goal}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>{page.strengthsTitle}</CardDescription>
              <CardTitle>{locale === "fr" ? "La ou je peux contribuer" : "Where I can contribute"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {text.strengths.map((strength) => (
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
          <SectionHeader eyebrow={page.skillsEyebrow} title={page.skillsTitle} description={page.skillsDescription} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {localizedSkills.map((skillGroup) => (
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
          <SectionHeader eyebrow={page.interestsEyebrow} title={page.interestsTitle} description={page.interestsDescription} />
          <div className="grid gap-3 sm:grid-cols-2">
            {text.learning.map((item) => (
              <GlassCard key={item} className="p-4 text-sm font-medium text-slate-200">
                {item}
              </GlassCard>
            ))}
          </div>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <SectionHeader eyebrow={page.currentEyebrow} title={page.currentTitle} description={page.currentDescription} />
          <div className="mt-10">
            <Timeline items={timelineItems} />
          </div>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <SectionHeader eyebrow={page.educationEyebrow} title={page.educationTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {localizedEducation.map((edu) => (
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
