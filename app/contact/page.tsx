import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    academicEmail,
    personalEmail,
    phone,
    siteConfig,
} from "@/config/siteConfig";

const contactCards = [
    {
        label: "Phone",
        value: phone,
        href: "tel:+212621960921",
    },
    {
        label: "Academic Email",
        value: academicEmail,
        href: "mailto:" + academicEmail,
    },
    {
        label: "Personal Email",
        value: personalEmail,
        href: "mailto:" + personalEmail,
    },
    {
        label: "GitHub",
        value: "HichamxMahboub",
        href: siteConfig.githubUrl,
    },
    ...(siteConfig.linkedinUrl
        ? [
            {
                label: "LinkedIn",
                value: "LinkedIn profile",
                href: siteConfig.linkedinUrl,
            },
        ]
        : []),
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#f5f3ee] text-gray-950 dark:bg-gray-950 dark:text-white">
            <section className="px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pt-24">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle
                        subtitle="Contact"
                        title="Open to junior full-stack and software engineering internships"
                        description="The best fit is a team building web platforms, backend APIs, dashboards, admin panels, mobile apps, or digital transformation tools. Academic email is the preferred contact channel."
                    />
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button href={"mailto:" + academicEmail}>
                            Email Me
                        </Button>
                        <Button href={siteConfig.cvPath} download variant="outline">
                            Download CV
                        </Button>
                        <Button href={siteConfig.githubUrl} variant="outline" target="_blank">
                            GitHub
                        </Button>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
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
                                            className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:bg-gray-900"
                                        >
                                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                                                {item.label}
                                            </p>
                                            <p className="mt-2 break-all text-base font-medium text-gray-950 dark:text-white">
                                                {item.value}
                                            </p>
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
                            <CardContent className="space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                <p>
                                    I am looking for practical internship work in full-stack development, backend API development, dashboards, admin panels, mobile apps, and digital transformation projects.
                                </p>
                                <p>
                                    I am especially interested in teams where I can work on well-scoped features, learn through code review, and understand how software supports real operational workflows.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <CardHeader className="px-0 pt-0">
                            <CardDescription>Mailto message</CardDescription>
                            <CardTitle>Send a quick email</CardTitle>
                        </CardHeader>
                        <ContactForm />
                    </Card>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Separator className="mb-10" />
                    <Card className="px-8 py-12 sm:px-12">
                        <div className="space-y-4 text-left">
                            <Badge
                                variant="outline"
                                className="uppercase tracking-[0.24em]"
                            >
                                Internship applications
                            </Badge>
                            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                                Available for junior engineering internship discussions.
                            </h2>
                            <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
                                For internship opportunities, please use the academic email or the form above. The form opens your email client and does not store messages.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
}
