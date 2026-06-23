import type { Locale } from "@/lib/localization";

type HomeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  profileDescription: string;
  stats: {
    year: string;
    student: string;
    projectsSingular: string;
    projectsPlural: string;
    program: string;
    programDescription: string;
    internship: string;
    internshipDescription: string;
  };
  stackEyebrow: string;
  stackTitle: string;
  stackDescription: string;
  stackGroups: { title: string; items: string[] }[];
  focusEyebrow: string;
  focusTitle: string;
  focusDescription: string;
  focusAreas: string[];
  beyondEyebrow: string;
  beyondTitle: string;
  beyondDescription: string;
  beyondItems: string[];
  projectsEyebrow: string;
  projectsTitle: string;
  projectsDescription: string;
  viewAllProjects: string;
  contactEyebrow: string;
  contactTitle: string;
  contactDescription: string;
};

export const homeTranslations: Record<Locale, HomeCopy> = {
  en: {
    eyebrow: "2nd-year ESI engineering student - ISITD track",
    title: "Hicham Mahboub, junior full-stack internship candidate.",
    description: "I build practical web, backend, dashboard, desktop, and data projects around APIs, analytics, and digital transformation use cases. I am looking for a junior full-stack internship where I can contribute to real product work, learn from code review, and keep improving production habits.",
    profileDescription: "Focused on full-stack systems, backend APIs, analytics dashboards, and digital transformation projects.",
    stats: {
      year: "2nd year",
      student: "ESI engineering student",
      projectsSingular: "portfolio project",
      projectsPlural: "portfolio projects",
      program: "ISITD",
      programDescription: "Information Systems and Digital Transformation",
      internship: "Internship-ready",
      internshipDescription: "Full-stack, data, and backend projects",
    },
    stackEyebrow: "What I work with",
    stackTitle: "A practical stack for full-stack, backend, and analytics projects.",
    stackDescription: "These tools come from the current portfolio projects and learning focus: front-end interfaces, REST APIs, databases, dashboards, automation, and deployment-ready documentation.",
    stackGroups: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Angular"] },
      { title: "Backend", items: [".NET 8", "ASP.NET Core", "Node.js", "Express", "Spring Boot", "REST APIs", "JWT Authentication"] },
      { title: "Databases", items: ["PostgreSQL", "MongoDB", "EF Core"] },
      { title: "Data and analytics", items: ["Python", "Recharts", "CSV/JSON analytics", "PDF reporting"] },
      { title: "DevOps and tools", items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Swagger/OpenAPI"] },
    ],
    focusEyebrow: "Internship focus",
    focusTitle: "Open to junior full-stack and software engineering internships.",
    focusDescription: "I am looking for practical engineering work where I can help ship useful features, write clearer documentation, learn from experienced developers, and connect software with business or operational needs.",
    focusAreas: ["Full-stack development", "Backend APIs", "Dashboards and admin panels", "Data and analytics workflows", "Digital transformation tools"],
    beyondEyebrow: "Beyond Code",
    beyondTitle: "Personal focus areas that support better engineering work.",
    beyondDescription: "I keep the personal side professional: project discipline, product thinking, backend depth, security awareness, and continuous learning.",
    beyondItems: ["Building real portfolio projects with clear README, setup, and delivery notes", "Exploring UI/UX and product design for recruiter-readable interfaces", "Learning backend architecture, authentication, deployment, and cloud-ready practices", "Strengthening cybersecurity awareness, clean code habits, automation, and analytics thinking"],
    projectsEyebrow: "Internship-ready project work",
    projectsTitle: "Selected Projects",
    projectsDescription: "A focused sample of portfolio projects covering APIs, analytics, dashboards, and digital transformation workflows.",
    viewAllProjects: "View all projects",
    contactEyebrow: "Contact",
    contactTitle: "Looking for a junior profile who can connect code, data, and business workflows?",
    contactDescription: "My strongest work is in full-stack features, REST APIs, dashboards, admin interfaces, analytics flows, and digital transformation projects where clear requirements matter.",
  },
  fr: {
    eyebrow: "Etudiant ingenieur ESI en 2e annee - filiere ISITD",
    title: "Hicham Mahboub, candidat a un stage junior en full-stack.",
    description: "Je realise des projets concrets de web, backend, tableaux de bord, desktop et donnees autour des API, de l'analyse et de la transformation digitale. Je recherche un stage junior en full-stack pour contribuer a de vrais produits, apprendre grace aux revues de code et renforcer mes pratiques de production.",
    profileDescription: "Oriente systemes full-stack, API backend, tableaux de bord analytiques et projets de transformation digitale.",
    stats: {
      year: "2e annee",
      student: "Etudiant ingenieur ESI",
      projectsSingular: "projet de portfolio",
      projectsPlural: "projets de portfolio",
      program: "ISITD",
      programDescription: "Systemes d'information et transformation digitale",
      internship: "Pret pour un stage",
      internshipDescription: "Projets full-stack, data et backend",
    },
    stackEyebrow: "Mes outils",
    stackTitle: "Une stack pratique pour les projets full-stack, backend et analytiques.",
    stackDescription: "Ces outils viennent des projets actuels du portfolio et de mes axes d'apprentissage : interfaces front-end, API REST, bases de donnees, tableaux de bord, automatisation et documentation prete au deploiement.",
    stackGroups: [
      { title: "Front-end", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Angular"] },
      { title: "Back-end", items: [".NET 8", "ASP.NET Core", "Node.js", "Express", "Spring Boot", "API REST", "Authentification JWT"] },
      { title: "Bases de donnees", items: ["PostgreSQL", "MongoDB", "EF Core"] },
      { title: "Donnees et analyse", items: ["Python", "Recharts", "Analyse CSV/JSON", "Rapports PDF"] },
      { title: "DevOps et outils", items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Swagger/OpenAPI"] },
    ],
    focusEyebrow: "Objectif de stage",
    focusTitle: "Ouvert aux stages junior en full-stack et ingenierie logicielle.",
    focusDescription: "Je recherche un travail d'ingenierie concret ou je peux livrer des fonctionnalites utiles, rediger une documentation plus claire, apprendre aupres de developpeurs experimentes et relier le logiciel aux besoins metier ou operationnels.",
    focusAreas: ["Developpement full-stack", "API backend", "Tableaux de bord et panneaux d'administration", "Flux de donnees et d'analyse", "Outils de transformation digitale"],
    beyondEyebrow: "Au-dela du code",
    beyondTitle: "Des axes personnels qui soutiennent un meilleur travail d'ingenierie.",
    beyondDescription: "Je garde une approche professionnelle : rigueur projet, reflexion produit, profondeur backend, sensibilisation a la securite et apprentissage continu.",
    beyondItems: ["Construire de vrais projets de portfolio avec README, installation et notes de livraison clairs", "Explorer l'UI/UX et le design produit pour des interfaces lisibles par les recruteurs", "Apprendre l'architecture backend, l'authentification, le deploiement et les pratiques cloud", "Renforcer la sensibilisation a la cybersecurite, le code propre, l'automatisation et l'analyse"],
    projectsEyebrow: "Projets prets pour un stage",
    projectsTitle: "Projets selectionnes",
    projectsDescription: "Un echantillon de projets de portfolio autour des API, de l'analyse, des tableaux de bord et de la transformation digitale.",
    viewAllProjects: "Voir tous les projets",
    contactEyebrow: "Contact",
    contactTitle: "Vous cherchez un profil junior qui relie code, donnees et flux metier ?",
    contactDescription: "Mes points forts sont les fonctionnalites full-stack, les API REST, les tableaux de bord, les interfaces d'administration, les flux analytiques et les projets de transformation digitale aux exigences claires.",
  },
  ar: {
    eyebrow: "طالب هندسة في السنة الثانية - مسار ISITD",
    title: "هشام محبوب، مرشح لتدريب مبتدئ في تطوير الويب المتكامل.",
    description: "أبني مشاريع عملية للويب والخلفية ولوحات المعلومات وسطح المكتب والبيانات حول واجهات البرمجة والتحليلات وحالات استخدام التحول الرقمي. أبحث عن تدريب مبتدئ في تطوير الويب المتكامل لأساهم في منتجات حقيقية وأتعلم من مراجعات الشيفرة وأحسن ممارسات الإنتاج.",
    profileDescription: "مهتم بالأنظمة المتكاملة وواجهات برمجة الخلفية ولوحات التحليل ومشاريع التحول الرقمي.",
    stats: {
      year: "السنة الثانية",
      student: "طالب هندسة بالمدرسة الوطنية لعلوم الحاسوب",
      projectsSingular: "مشروع في المعرض",
      projectsPlural: "مشاريع في المعرض",
      program: "ISITD",
      programDescription: "نظم المعلومات والتحول الرقمي",
      internship: "جاهز للتدريب",
      internshipDescription: "مشاريع متكاملة وبيانات وخلفية",
    },
    stackEyebrow: "ما أعمل به",
    stackTitle: "حزمة عملية لمشاريع الويب المتكامل والخلفية والتحليلات.",
    stackDescription: "تأتي هذه الأدوات من مشاريع المعرض الحالية ومحاور التعلم: واجهات أمامية، وواجهات REST، وقواعد بيانات، ولوحات معلومات، وأتمتة، ووثائق جاهزة للنشر.",
    stackGroups: [
      { title: "الواجهة الأمامية", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Angular"] },
      { title: "الواجهة الخلفية", items: [".NET 8", "ASP.NET Core", "Node.js", "Express", "Spring Boot", "واجهات REST", "مصادقة JWT"] },
      { title: "قواعد البيانات", items: ["PostgreSQL", "MongoDB", "EF Core"] },
      { title: "البيانات والتحليلات", items: ["Python", "Recharts", "تحليل CSV/JSON", "تقارير PDF"] },
      { title: "DevOps والأدوات", items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Swagger/OpenAPI"] },
    ],
    focusEyebrow: "هدف التدريب",
    focusTitle: "منفتح على تدريبات مبتدئة في تطوير الويب المتكامل وهندسة البرمجيات.",
    focusDescription: "أبحث عن عمل هندسي عملي أساهم فيه في تقديم ميزات مفيدة وكتابة وثائق أوضح والتعلم من مطورين ذوي خبرة وربط البرمجيات باحتياجات الأعمال أو التشغيل.",
    focusAreas: ["تطوير ويب متكامل", "واجهات برمجة الخلفية", "لوحات المعلومات ولوحات الإدارة", "مسارات البيانات والتحليلات", "أدوات التحول الرقمي"],
    beyondEyebrow: "أبعد من الشيفرة",
    beyondTitle: "مجالات شخصية تدعم عملا هندسيا أفضل.",
    beyondDescription: "أحافظ على جانب مهني: انضباط في المشاريع، وتفكير في المنتج، وعمق في الخلفية، ووعي أمني، وتعلم مستمر.",
    beyondItems: ["بناء مشاريع حقيقية للمعرض مع README واضح وإعداد وملاحظات تسليم", "استكشاف تصميم UI/UX والمنتج لواجهات يستطيع مسؤولو التوظيف قراءتها", "تعلم بنية الخلفية والمصادقة والنشر والممارسات السحابية", "تعزيز الوعي بالأمن السيبراني وعادات الشيفرة النظيفة والأتمتة والتفكير التحليلي"],
    projectsEyebrow: "مشاريع جاهزة للتدريب",
    projectsTitle: "مشاريع مختارة",
    projectsDescription: "عينة مركزة من مشاريع المعرض تشمل واجهات البرمجة والتحليلات ولوحات المعلومات ومسارات التحول الرقمي.",
    viewAllProjects: "عرض كل المشاريع",
    contactEyebrow: "تواصل",
    contactTitle: "هل تبحث عن ملف مبتدئ يربط الشيفرة والبيانات وسير العمل التجاري؟",
    contactDescription: "أقوى أعمالي في الميزات المتكاملة وواجهات REST ولوحات المعلومات وواجهات الإدارة وتدفقات التحليل ومشاريع التحول الرقمي التي تعتمد على متطلبات واضحة.",
  },
};
