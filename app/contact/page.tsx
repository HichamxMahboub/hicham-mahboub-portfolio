import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Container,
  GlassCard,
  PageHero,
  SectionBand,
  SectionHeader,
} from "@/components/PageSection";
import {
  academicEmail,
  personalEmail,
  phone,
  siteConfig,
} from "@/config/siteConfig";

const contactCards = [
  {
    label: "Academic email",
    value: academicEmail,
    href: "mailto:" + academicEmail,
    note: "Preferred internship contact channel",
  },
  {
    label: "Personal email",
    value: personalEmail,
    href: "mailto:" + personalEmail,
    note: "Alternative email contact",
  },
  {
    label: "GitHub",
    value: "HichamxMahboub",
    href: siteConfig.githubUrl,
    note: "Source code and project repositories",
  },
  ...(siteConfig.linkedinUrl
    ? [
        {
          label: "LinkedIn",
          value: "LinkedIn profile",
          href: siteConfig.linkedinUrl,
          note: "Professional profile",
        },
      ]
    : []),
  {
    label: "Phone",
    value: phone,
    href: "tel:+212621960921",
    note: "Available in the existing portfolio contact data",
  },
];

const focusItems = [
  "Full-stack web platforms",
  "Backend APIs and data models",
  "Dashboards and admin panels",
  "Analytics and digital transformation tools",
];

export default function ContactPage() {
  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <PageHero
        eyebrow="Contact"
        title="Open to junior full-stack and software engineering internships."
        description="The best fit is a team building web platforms, backend APIs, dashboards, admin panels, analytics workflows, or digital transformation tools. Academic email is the preferred contact channel."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={"mailto:" + academicEmail} size="lg">Email Me</Button>
          <Button href={siteConfig.cvPath} download variant="outline" size="lg">Download CV</Button>
          <Button href={siteConfig.githubUrl} variant="ghost" size="lg" target="_blank">GitHub</Button>
        </div>
      </PageHero>

      <SectionBand className="pt-0" withBorder={false}>
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardDescription>Direct contact</CardDescription>
                <CardTitle>Recruiter-friendly contact details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {contactCards.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-lg border border-white/10 bg-slate-950/60 p-4 transition-colors hover:bg-white/[0.07]"
                    >
                      <p className="text-xs font-medium text-slate-500">{item.label}</p>
                      <p className="mt-2 break-all text-base font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{item.note}</p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>Internship focus</CardDescription>
                <CardTitle>Where I can contribute</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {focusItems.map((item) => (
                    <GlassCard key={item} className="p-4 text-sm font-medium text-slate-200 shadow-none">
                      {item}
                    </GlassCard>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-400">
                  I am especially interested in teams where I can work on well-scoped features, learn through code review, and understand how software supports real operational workflows.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-4">
            <CardHeader className="px-0 pt-0">
              <CardDescription>Mailto message</CardDescription>
              <CardTitle>Send a quick email</CardTitle>
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
              <SectionHeader
                eyebrow="Availability"
                title="Available for junior engineering internship discussions."
                description="For internship opportunities, please use the academic email or the form above. The form opens your email client and does not store messages."
              />
            </div>
          </div>
        </Container>
      </SectionBand>
    </main>
  );
}
