export const locales = ["en", "fr", "ar"] as const;

export type Locale = (typeof locales)[number];

export type TranslationMessages = {
  direction: "ltr" | "rtl";
  language: { label: string; en: string; fr: string; ar: string };
  nav: { home: string; about: string; projects: string; contact: string; menu: string; closeMenu: string; role: string };
  common: { viewProjects: string; contactMe: string; downloadCv: string };
  footer: { availabilityTitle: string; availabilityDescription: string; positioning: string; candidate: string; quickLinks: string; contact: string; contactPage: string; projects: string; connect: string; copyright: string; builtWith: string };
  home: {
    eyebrow: string; title: string; description: string; profileDescription: string;
    stats: { year: string; student: string; projectsSingular: string; projectsPlural: string; program: string; programDescription: string; internship: string; internshipDescription: string };
    stackEyebrow: string; stackTitle: string; stackDescription: string; stackGroups: { title: string; items: string[] }[];
    focusEyebrow: string; focusTitle: string; focusDescription: string; focusAreas: string[];
    beyondEyebrow: string; beyondTitle: string; beyondDescription: string; beyondItems: string[];
    projectsEyebrow: string; projectsTitle: string; projectsDescription: string; viewAllProjects: string;
    contactEyebrow: string; contactTitle: string; contactDescription: string;
  };
  projectCard: { liveDemo: string };
  contactForm: { unavailableTitle: string; unavailableDescription: string; noEmailMessage: string; sentMessage: string; nameLabel: string; namePlaceholder: string; emailLabel: string; emailPlaceholder: string; subjectLabel: string; subjectPlaceholder: string; messageLabel: string; messagePlaceholder: string; opening: string; send: string };
};

const english: TranslationMessages = {
  direction: "ltr",
  language: { label: "Language", en: "English", fr: "French", ar: "Arabic" },
  nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", menu: "Open navigation menu", closeMenu: "Close navigation menu", role: "ISITD engineering student" },
  common: { viewProjects: "View Projects", contactMe: "Contact Me", downloadCv: "Download CV" },
  footer: { availabilityTitle: "Available for junior full-stack internship opportunities.", availabilityDescription: "Interested in backend APIs, full-stack systems, dashboards, analytics tools, and digital transformation projects.", positioning: "2nd-year ESI engineering student focused on full-stack systems, backend APIs, analytics platforms, and digital transformation.", candidate: "Junior full-stack internship candidate", quickLinks: "Quick links", contact: "Contact", contactPage: "Contact page", projects: "Projects", connect: "Connect", copyright: "All rights reserved.", builtWith: "Built with Next.js, TypeScript, and Tailwind CSS." },
  home: {
    eyebrow: "2nd-year ESI engineering student - ISITD track", title: "Hicham Mahboub, junior full-stack internship candidate.", description: "I build practical web, backend, dashboard, desktop, and data projects around APIs, analytics, and digital transformation use cases. I am looking for a junior full-stack internship where I can contribute to real product work, learn from code review, and keep improving production habits.", profileDescription: "Focused on full-stack systems, backend APIs, analytics dashboards, and digital transformation projects.",
    stats: { year: "2nd year", student: "ESI engineering student", projectsSingular: "portfolio project", projectsPlural: "portfolio projects", program: "ISITD", programDescription: "Information Systems and Digital Transformation", internship: "Internship-ready", internshipDescription: "Full-stack, data, and backend projects" },
    stackEyebrow: "What I work with", stackTitle: "A practical stack for full-stack, backend, and analytics projects.", stackDescription: "These tools come from the current portfolio projects and learning focus: front-end interfaces, REST APIs, databases, dashboards, automation, and deployment-ready documentation.",
    stackGroups: [{ title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Angular"] }, { title: "Backend", items: [".NET 8", "ASP.NET Core", "Node.js", "Express", "Spring Boot", "REST APIs", "JWT Authentication"] }, { title: "Databases", items: ["PostgreSQL", "MongoDB", "EF Core"] }, { title: "Data and analytics", items: ["Python", "Recharts", "CSV/JSON analytics", "PDF reporting"] }, { title: "DevOps and tools", items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Swagger/OpenAPI"] }],
    focusEyebrow: "Internship focus", focusTitle: "Open to junior full-stack and software engineering internships.", focusDescription: "I am looking for practical engineering work where I can help ship useful features, write clearer documentation, learn from experienced developers, and connect software with business or operational needs.", focusAreas: ["Full-stack development", "Backend APIs", "Dashboards and admin panels", "Data and analytics workflows", "Digital transformation tools"],
    beyondEyebrow: "Beyond Code", beyondTitle: "Personal focus areas that support better engineering work.", beyondDescription: "I keep the personal side professional: project discipline, product thinking, backend depth, security awareness, and continuous learning.", beyondItems: ["Building real portfolio projects with clear README, setup, and delivery notes", "Exploring UI/UX and product design for recruiter-readable interfaces", "Learning backend architecture, authentication, deployment, and cloud-ready practices", "Strengthening cybersecurity awareness, clean code habits, automation, and analytics thinking"],
    projectsEyebrow: "Internship-ready project work", projectsTitle: "Selected Projects", projectsDescription: "A focused sample of portfolio projects covering APIs, analytics, dashboards, and digital transformation workflows.", viewAllProjects: "View all projects", contactEyebrow: "Contact", contactTitle: "Looking for a junior profile who can connect code, data, and business workflows?", contactDescription: "My strongest work is in full-stack features, REST APIs, dashboards, admin interfaces, analytics flows, and digital transformation projects where clear requirements matter.",
  },
  projectCard: { liveDemo: "Live Demo" },
  contactForm: { unavailableTitle: "Contact form unavailable", unavailableDescription: "Please reach out through one of the available social links.", noEmailMessage: "Contact email is not configured yet. Please use LinkedIn or GitHub.", sentMessage: "Your email app should open with the message ready to send.", nameLabel: "Your name", namePlaceholder: "Your Name", emailLabel: "Your email", emailPlaceholder: "Your Email", subjectLabel: "Email subject", subjectPlaceholder: "Subject", messageLabel: "Your message", messagePlaceholder: "Your Message", opening: "Opening...", send: "Send Message" },
};

export const messages: Record<Locale, TranslationMessages> = {
  en: english,
  fr: {
    ...english,
    language: { label: "Langue", en: "Anglais", fr: "Francais", ar: "Arabe" },
    common: { viewProjects: "Voir les projets", contactMe: "Me contacter", downloadCv: "Telecharger le CV" },
    footer: { ...english.footer, availabilityTitle: "Disponible pour des stages junior full-stack.", availabilityDescription: "Interesse par les API backend, les systemes full-stack, les tableaux de bord, les outils d'analyse et les projets de transformation digitale.", positioning: "Etudiant ingenieur ESI en 2e annee, axe sur les systemes full-stack, les API backend, les plateformes d'analyse et la transformation digitale.", candidate: "Candidat stage junior full-stack", quickLinks: "Liens rapides", contact: "Contact", contactPage: "Page contact", projects: "Projets", connect: "Rester en contact", copyright: "Tous droits reserves.", builtWith: "Concu avec Next.js, TypeScript et Tailwind CSS." },
    nav: { ...english.nav, home: "Accueil", about: "A propos", projects: "Projets", contact: "Contact" },
    contactForm: { ...english.contactForm, unavailableTitle: "Formulaire de contact indisponible", unavailableDescription: "Veuillez utiliser l'un des liens sociaux disponibles.", noEmailMessage: "L'email de contact n'est pas encore configure. Utilisez LinkedIn ou GitHub.", sentMessage: "Votre application email devrait s'ouvrir avec le message pret a envoyer.", nameLabel: "Votre nom", namePlaceholder: "Votre nom", emailLabel: "Votre email", emailPlaceholder: "Votre email", subjectLabel: "Objet de l'email", subjectPlaceholder: "Objet", messageLabel: "Votre message", messagePlaceholder: "Votre message", opening: "Ouverture...", send: "Envoyer le message" },
  },
  ar: {
    ...english,
    direction: "rtl",
    language: { label: "اللغة", en: "الإنجليزية", fr: "الفرنسية", ar: "العربية" },
    common: { viewProjects: "عرض المشاريع", contactMe: "تواصل معي", downloadCv: "تنزيل السيرة الذاتية" },
    footer: { ...english.footer, availabilityTitle: "متاح لفرص تدريب junior full-stack.", availabilityDescription: "مهتم بواجهات برمجة التطبيقات الخلفية، والانظمة الكاملة، ولوحات التحكم، وأدوات التحليل، ومشاريع التحول الرقمي.", positioning: "طالب هندسة ESI في السنة الثانية، يركز على الانظمة الكاملة، وواجهات برمجة التطبيقات الخلفية، ومنصات التحليل، والتحول الرقمي.", candidate: "مرشح تدريب junior full-stack", quickLinks: "روابط سريعة", contact: "التواصل", contactPage: "صفحة التواصل", projects: "المشاريع", connect: "التواصل", copyright: "جميع الحقوق محفوظة.", builtWith: "مبني باستخدام Next.js و TypeScript و Tailwind CSS." },
    nav: { ...english.nav, home: "الرئيسية", about: "نبذة", projects: "المشاريع", contact: "تواصل", role: "طالب هندسة ISITD" },
    contactForm: { ...english.contactForm, unavailableTitle: "نموذج التواصل غير متاح", unavailableDescription: "يرجى التواصل من خلال أحد الروابط الاجتماعية المتاحة.", noEmailMessage: "لم يتم إعداد بريد التواصل بعد. يرجى استخدام LinkedIn أو GitHub.", sentMessage: "يجب أن يفتح تطبيق البريد لديك مع الرسالة جاهزة للإرسال.", nameLabel: "اسمك", namePlaceholder: "الاسم", emailLabel: "بريدك الإلكتروني", emailPlaceholder: "البريد الإلكتروني", subjectLabel: "موضوع البريد", subjectPlaceholder: "الموضوع", messageLabel: "رسالتك", messagePlaceholder: "الرسالة", opening: "جار الفتح...", send: "إرسال الرسالة" },
  },
};

export function isLocale(value: string | null): value is Locale {
  return value !== null && locales.includes(value as Locale);
}

