"use client";

import ContactForm from "@/components/ContactForm";
import { useLocale } from "@/components/LocaleProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, GlassCard, PageHero, SectionBand, SectionHeader } from "@/components/PageSection";
import { academicEmail, personalEmail, phone, siteConfig } from "@/config/siteConfig";

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Open to junior full-stack and software engineering internships.",
    description:
      "The best fit is a team building web platforms, backend APIs, dashboards, admin panels, analytics workflows, or digital transformation tools. Academic email is the preferred contact channel.",
    actions: ["Email Me", "Download CV", "GitHub"],
    direct: "Direct contact",
    directTitle: "Recruiter-friendly contact details",
    focus: "Internship focus",
    focusTitle: "Where I can contribute",
    focusBody:
      "I am especially interested in teams where I can work on well-scoped features, learn through code review, and understand how software supports real operational workflows.",
    mailTitle: "Send a quick email",
    availability: "Availability",
    availabilityTitle: "Available for junior engineering internship discussions.",
    availabilityDescription:
      "For internship opportunities, please use the academic email or the form above. The form opens your email client and does not store messages.",
    cards: [
      ["Academic email", academicEmail, "Preferred internship contact channel"],
      ["Personal email", personalEmail, "Alternative email contact"],
      ["GitHub", "HichamxMahboub", "Source code and project repositories"],
      ["Phone", phone, "Available in the existing portfolio contact data"],
    ],
    focusItems: ["Full-stack web platforms", "Backend APIs and data models", "Dashboards and admin panels", "Analytics and digital transformation tools"],
  },
  fr: {
    eyebrow: "Contact",
    title: "Ouvert aux stages junior full-stack et ingenierie logicielle.",
    description:
      "Le meilleur choix est une equipe qui construit des plateformes web, des API backend, des tableaux de bord, des panneaux d'administration, des workflows d'analyse ou des outils de transformation digitale. L'email academique est le canal prefere.",
    actions: ["M'ecrire", "Telecharger le CV", "GitHub"],
    direct: "Contact direct",
    directTitle: "Coordonnees utiles pour recruteur",
    focus: "Cible de stage",
    focusTitle: "La ou je peux contribuer",
    focusBody:
      "Je suis particulierement interesse par des equipes ou je peux travailler sur des fonctionnalites bien delimitees, apprendre via les revues de code et comprendre comment le logiciel soutient de vrais workflows operationnels.",
    mailTitle: "Envoyer un email rapide",
    availability: "Disponibilite",
    availabilityTitle: "Disponible pour discuter de stages d'ingenierie junior.",
    availabilityDescription:
      "Pour les opportunites de stage, utilisez l'email academique ou le formulaire ci-dessus. Le formulaire ouvre votre client mail et ne stocke pas les messages.",
    cards: [
      ["Email academique", academicEmail, "Canal de contact principal pour les stages"],
      ["Email personnel", personalEmail, "Contact email alternatif"],
      ["GitHub", "HichamxMahboub", "Code source et depots projets"],
      ["Telephone", phone, "Disponible dans les coordonnees du portfolio"],
    ],
    focusItems: ["Plateformes web full-stack", "API backend et modeles de donnees", "Tableaux de bord et panneaux d'administration", "Outils d'analyse et de transformation digitale"],
  },
  ar: {
    eyebrow: "تواصل",
    title: "متاح لفرص تدريب junior full-stack وهندسة البرمجيات.",
    description:
      "أفضل تطابق هو فريق يبني منصات ويب وواجهات برمجة تطبيقات خلفية ولوحات تحكم ولوحات إدارة وسير عمل تحليلات أو أدوات تحول رقمي. البريد الأكاديمي هو قناة التواصل المفضلة.",
    actions: ["راسلني", "تنزيل السيرة الذاتية", "GitHub"],
    direct: "تواصل مباشر",
    directTitle: "بيانات تواصل مناسبة للموظف المجند",
    focus: "تركيز التدريب",
    focusTitle: "أين يمكنني المساهمة",
    focusBody:
      "أنا مهتم بشكل خاص بالفرق التي أستطيع فيها العمل على ميزات محددة جيداً، والتعلم عبر مراجعة الكود، وفهم كيف يدعم البرنامج سير العمل التشغيلي الحقيقي.",
    mailTitle: "إرسال بريد سريع",
    availability: "التوفر",
    availabilityTitle: "متاح لمناقشة فرص تدريب هندسي junior.",
    availabilityDescription:
      "لفرص التدريب، يرجى استخدام البريد الأكاديمي أو النموذج أعلاه. النموذج يفتح تطبيق البريد لديك ولا يخزن الرسائل.",
    cards: [
      ["البريد الأكاديمي", academicEmail, "قناة التواصل المفضلة للتدريب"],
      ["البريد الشخصي", personalEmail, "بريد بديل للتواصل"],
      ["GitHub", "HichamxMahboub", "الكود المصدري ومستودعات المشاريع"],
      ["الهاتف", phone, "متاح ضمن بيانات التواصل الحالية"],
    ],
    focusItems: ["منصات ويب full-stack", "واجهات برمجة التطبيقات الخلفية ونماذج البيانات", "لوحات التحكم ولوحات الإدارة", "أدوات التحليل والتحول الرقمي"],
  },
} as const;

export default function ContactPageContent() {
  const { locale } = useLocale();
  const page = copy[locale];

  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description}>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={"mailto:" + academicEmail} size="lg">{page.actions[0]}</Button>
          <Button href={siteConfig.cvPath} download variant="outline" size="lg">{page.actions[1]}</Button>
          <Button href={siteConfig.githubUrl} variant="ghost" size="lg" target="_blank">{page.actions[2]}</Button>
        </div>
      </PageHero>

      <SectionBand className="pt-0" withBorder={false}>
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardDescription>{page.direct}</CardDescription>
                <CardTitle>{page.directTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {page.cards.map(([label, value, note]) => (
                    <a
                      key={label}
                      href={value.startsWith("http") ? value : value.includes("@") ? `mailto:${value}` : value === phone ? `tel:${value.replace(/\s+/g, "")}` : value}
                      target={value.startsWith("http") ? "_blank" : undefined}
                      rel={value.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-lg border border-white/10 bg-slate-950/60 p-4 transition-colors hover:bg-white/[0.07]"
                    >
                      <p className="text-xs font-medium text-slate-500">{label}</p>
                      <p className="mt-2 break-all text-base font-semibold text-white">{value}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{note}</p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>{page.focus}</CardDescription>
                <CardTitle>{page.focusTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {page.focusItems.map((item) => (
                    <GlassCard key={item} className="p-4 text-sm font-medium text-slate-200 shadow-none">
                      {item}
                    </GlassCard>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-400">{page.focusBody}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-4">
            <CardHeader className="px-0 pt-0">
              <CardDescription>{page.mailTitle}</CardDescription>
              <CardTitle>{page.actions[0]}</CardTitle>
            </CardHeader>
            <ContactForm />
          </Card>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-6 py-10 sm:px-10 sm:py-12">
            <div className="space-y-4 text-left">
              <Badge variant="outline" className="border-cyan-100/20 text-cyan-100">
                Internship applications
              </Badge>
              <SectionHeader eyebrow={page.availability} title={page.availabilityTitle} description={page.availabilityDescription} />
            </div>
          </div>
        </Container>
      </SectionBand>
    </main>
  );
}
