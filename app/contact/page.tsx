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
import { siteConfig, socialLinks } from "@/config/siteConfig";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#f5f3ee] text-gray-950 dark:bg-gray-950 dark:text-white">
            <section className="px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pt-24">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle
                        subtitle="Contact"
                        title="Open to internship opportunities"
                        description="I am looking for a junior full-stack or software engineering internship where I can contribute to APIs, dashboards, admin panels, mobile apps, and digital transformation projects."
                    />
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button href={siteConfig.cvPath} download>
                            Download CV
                        </Button>
                        <Button href={siteConfig.githubUrl} variant="outline" target="_blank">
                            GitHub
                        </Button>
                        {siteConfig.linkedinUrl && (
                            <Button href={siteConfig.linkedinUrl} variant="outline" target="_blank">
                                LinkedIn
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr,0.92fr] lg:items-start">
                    <Card className="border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <ContactForm />
                    </Card>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardDescription>Recruiter note</CardDescription>
                                <CardTitle>What I am looking for</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                <p>
                                    I am available for internship opportunities in full-stack development, backend APIs, dashboards, admin panels, mobile applications, and digital transformation projects.
                                </p>
                                <p>
                                    I am especially interested in teams where I can work on well-scoped features, learn through code review, and understand how software supports real operational workflows.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardDescription>Direct details</CardDescription>
                                <CardTitle>Contact channels</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-5 text-sm">
                                {siteConfig.contactEmail && (
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400">Email</p>
                                        <a
                                            href={`mailto:${siteConfig.contactEmail}`}
                                            className="mt-1 block break-all text-base text-gray-950 hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
                                        >
                                            {siteConfig.contactEmail}
                                        </a>
                                    </div>
                                )}
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="mt-1 text-base text-gray-950 dark:text-white">
                                        Morocco
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400">Availability</p>
                                    <p className="mt-1 text-base text-gray-950 dark:text-white">
                                        Open to junior full-stack and software engineering internships
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardDescription>Profiles</CardDescription>
                                <CardTitle>Professional links</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                        rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                        className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:bg-gray-800"
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-semibold text-white dark:bg-white dark:text-black">
                                            {link.icon}
                                        </span>
                                        <span className="font-medium">{link.label}</span>
                                        <span className="ml-auto text-gray-400">-&gt;</span>
                                    </a>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Separator className="mb-10" />
                    <Card className="px-8 py-12 sm:px-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
                            <div className="space-y-4 text-left">
                                <Badge
                                    variant="outline"
                                    className="uppercase tracking-[0.24em]"
                                >
                                    Internship applications
                                </Badge>
                                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                                    I am ready to discuss junior engineering internship opportunities.
                                </h2>
                                <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
                                    The best fit is a team building web platforms, internal tools, dashboards, APIs, mobile apps, or digital transformation systems where I can contribute and keep learning.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
}
