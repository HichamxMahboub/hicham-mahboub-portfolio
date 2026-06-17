import { Button } from "@/components/ui/button";
import { Container, PageHero, SectionBand } from "@/components/PageSection";

export default function NotFound() {
  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <PageHero
        eyebrow="404"
        title="This page is not available."
        description="The portfolio route you opened does not exist or may have moved. You can return to the project index or contact page from here."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/projects" size="lg">View Projects</Button>
          <Button href="/contact" variant="outline" size="lg">Contact Me</Button>
          <Button href="/" variant="ghost" size="lg">Back Home</Button>
        </div>
      </PageHero>

      <SectionBand className="pt-0" withBorder={false}>
        <Container>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-sm leading-6 text-slate-400">
            If you expected a project page, use the Projects index. Project IDs and links are kept honest, so unavailable deployments stay marked as coming soon rather than being redirected to fake URLs.
          </div>
        </Container>
      </SectionBand>
    </main>
  );
}
