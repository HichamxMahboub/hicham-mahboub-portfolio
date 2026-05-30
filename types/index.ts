/**
 * Shared TypeScript type definitions used across the application
 */

export interface NavItem {
    label: string;
    href: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string;
}

export interface EducationItem {
    id: number;
    degree: string;
    institution: string;
    year: string;
    field: string;
}

export interface ProjectItem {
    id: number;
    title: string;
    slug?: string;
    shortDescription: string;
    category: "Full-Stack Platforms" | "Dashboards & Analytics" | "Digital Tools" | "Web Interfaces";
    themeKey?: string;
    bgColor: string;
    imageSrc?: string;
    imageAlt?: string;
    description: string;
    problem: string;
    solution: string;
    result: string;
    keyFeatures: string[];
    learned: string;
    techStack: string[];
    screenshots: string[];
    liveLink?: string;
    githubLink?: string;
}

export interface TimelineItemType {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    description: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    url: string | null;
    contactEmail: string | null;
    cvPath: string;
    githubUrl: string;
    linkedinUrl: string | null;
    navItems: NavItem[];
    socialLinks: SocialLink[];
    footerLinks: FooterLink[];
}
