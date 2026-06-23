import AboutPageContent from "@/components/AboutPageContent";
import { getEducation, getExperience, getProjects, getSkills } from "@/lib/content";

export default async function AboutPage() {
  const skills = getSkills();
  const experience = getExperience();
  const education = getEducation();
  const projects = await getProjects();

  return <AboutPageContent skills={skills} experience={experience} education={education} projects={projects} />;
}
