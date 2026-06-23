"use client";

import type { EducationItem, ExperienceItem, Skill } from "@/types";
import type { Locale } from "@/lib/localization";


const copy = {
  en: {
    eyebrow: "About Hicham",
    title: "Engineering student building full-stack systems for practical workflows.",
    description:
      "I am a 2nd-year engineering student at ESI in the Information Systems and Digital Transformation track. My portfolio is focused on junior full-stack internship opportunities, with projects around APIs, dashboards, analytics, and digital tools.",
    profile: "Junior full-stack internship candidate focused on systems, APIs, dashboards, and analytics projects.",
    basedIn: "Based in Morocco - Internship search",
    introTitle: "I build academic and portfolio projects that connect software engineering with business processes.",
    introBody:
      "My current focus is junior full-stack development: user interfaces, backend APIs, databases, dashboards, and documentation that make a project understandable and usable.",
    introBody2:
      "I am not presenting myself as a senior engineer. I am looking for an internship where I can take ownership of well-scoped features, improve through code review, and contribute to web platforms, internal tools, or digital transformation initiatives.",
    stats: ["2nd year", "ESI engineering student", "ISITD", "Information Systems and Digital Transformation", "Internship-ready", "Full-stack, data, and backend projects"],
    internshipTarget: "Internship target",
    internshipTitle: "What I am looking for",
    strengthsTitle: "Where I can contribute",
    skillsEyebrow: "Technical skills",
    skillsTitle: "Tools I use to build full-stack projects",
    skillsDescription:
      "My skill set is strongest around front-end interfaces, REST APIs, databases, dashboards, delivery tooling, and project documentation.",
    interestsEyebrow: "Learning interests",
    interestsTitle: "Areas I am deliberately strengthening",
    interestsDescription:
      "These interests support the kind of internship work I am targeting: practical systems, clean implementation, safer software habits, and readable product experiences.",
    currentEyebrow: "Current work",
    currentTitle: "Academic work, internship exposure, and project building",
    currentDescription:
      "A concise timeline of learning, project delivery, and practical software work already present in the portfolio content.",
    educationEyebrow: "Education",
    educationTitle: "Engineering and digital transformation foundation",
  },
  fr: {
    eyebrow: "A propos de Hicham",
    title: "Etudiant ingenieur qui construit des systemes full-stack pour des workflows concrets.",
    description:
      "Je suis etudiant ingenieur en 2e annee a l'ESI, filiere Systemes d'Information et Transformation Digitale. Mon portfolio est centre sur des stages junior full-stack, avec des projets autour des API, tableaux de bord, analyses et outils numeriques.",
    profile: "Candidat stage junior full-stack axe sur les systemes, les API, les tableaux de bord et l'analyse.",
    basedIn: "Base au Maroc - Recherche de stage",
    introTitle: "Je realise des projets academiques et portfolio qui relient l'ingenierie logicielle aux besoins metier.",
    introBody:
      "Mon objectif actuel est le developpement junior full-stack : interfaces utilisateur, API backend, bases de donnees, tableaux de bord et documentation qui rendent un projet compréhensible et utilisable.",
    introBody2:
      "Je ne me presente pas comme un ingenieur senior. Je cherche un stage ou je peux prendre en charge des fonctionnalites bien delimitees, progresser grace aux revues de code, et contribuer a des plateformes web, des outils internes ou des projets de transformation digitale.",
    stats: ["2e annee", "Etudiant ingenieur ESI", "ISITD", "Systemes d'information et transformation digitale", "Pret pour un stage", "Projets full-stack, data et backend"],
    internshipTarget: "Cible de stage",
    internshipTitle: "Ce que je recherche",
    strengthsTitle: "La ou je peux contribuer",
    skillsEyebrow: "Competences techniques",
    skillsTitle: "Les outils que j'utilise pour construire des projets full-stack",
    skillsDescription:
      "Mon point fort se situe autour des interfaces front-end, des API REST, des bases de donnees, des tableaux de bord, des outils de livraison et de la documentation de projet.",
    interestsEyebrow: "Interets d'apprentissage",
    interestsTitle: "Domaines que je renforce volontairement",
    interestsDescription:
      "Ces interets soutiennent le type de stage que je vise : systemes pratiques, implementation propre, habitudes logicielles plus sures et experiences produit lisibles.",
    currentEyebrow: "Travail actuel",
    currentTitle: "Travaux academiques, exposition au stage et construction de projets",
    currentDescription:
      "Une timeline concise de l'apprentissage, de la livraison de projets et du travail logiciel deja present dans le portfolio.",
    educationEyebrow: "Formation",
    educationTitle: "Fondation en ingenierie et transformation digitale",
  },
  ar: {
    eyebrow: "نبذة عن Hicham",
    title: "طالب هندسة يبني أنظمة full-stack لسير العمل العملي.",
    description:
      "أنا طالب هندسة في السنة الثانية بـ ESI ضمن مسار أنظمة المعلومات والتحول الرقمي. يركز معرض أعمالي على فرص تدريب junior full-stack، مع مشاريع حول واجهات برمجة التطبيقات ولوحات التحكم والتحليلات والأدوات الرقمية.",
    profile: "مرشح تدريب junior full-stack يركز على الأنظمة وواجهات برمجة التطبيقات ولوحات التحكم والتحليلات.",
    basedIn: "مقيم في المغرب - بحث عن تدريب",
    introTitle: "أبني مشاريع أكاديمية ومشاريع portfolio تربط هندسة البرمجيات بسير العمل التجاري.",
    introBody:
      "تركيزي الحالي هو التطوير junior full-stack: واجهات المستخدم، وواجهات برمجة التطبيقات الخلفية، وقواعد البيانات، ولوحات التحكم، والوثائق التي تجعل المشروع مفهوماً وقابلاً للاستخدام.",
    introBody2:
      "أنا لا أقدم نفسي كمهندس كبير. أبحث عن تدريب أستطيع فيه تحمل مسؤولية ميزات محددة جيداً، والتحسن عبر مراجعة الكود، والمساهمة في المنصات web والأدوات الداخلية ومشاريع التحول الرقمي.",
    stats: ["السنة الثانية", "طالب هندسة ESI", "ISITD", "أنظمة المعلومات والتحول الرقمي", "جاهز للتدريب", "مشاريع full-stack و data و backend"],
    internshipTarget: "هدف التدريب",
    internshipTitle: "ما الذي أبحث عنه",
    strengthsTitle: "أين يمكنني المساهمة",
    skillsEyebrow: "المهارات التقنية",
    skillsTitle: "الأدوات التي أستخدمها لبناء مشاريع full-stack",
    skillsDescription:
      "نقطة قوتي هي واجهات front-end وواجهات برمجة التطبيقات REST وقواعد البيانات ولوحات التحكم وأدوات التسليم ووثائق المشاريع.",
    interestsEyebrow: "مجالات التعلم",
    interestsTitle: "المجالات التي أقوم بتقويتها بشكل مقصود",
    interestsDescription:
      "هذه الاهتمامات تدعم نوع التدريب الذي أستهدفه: أنظمة عملية، تنفيذ نظيف، عادات برمجية أكثر أماناً، وتجارب منتج مقروءة.",
    currentEyebrow: "العمل الحالي",
    currentTitle: "العمل الأكاديمي، خبرة التدريب، وبناء المشاريع",
    currentDescription:
      "خط زمني مختصر للتعلم وتسليم المشاريع والعمل البرمجي الموجود بالفعل في محتوى portfolio.",
    educationEyebrow: "التعليم",
    educationTitle: "أساس في الهندسة والتحول الرقمي",
  },
} as const;

const skillCategoryLabels = {
  en: {
    Frontend: "Frontend",
    "Backend & APIs": "Backend & APIs",
    "Dashboards & Tools": "Dashboards & Tools",
    Delivery: "Delivery",
  },
  fr: {
    Frontend: "Frontend",
    "Backend & APIs": "Backend et API",
    "Dashboards & Tools": "Tableaux de bord et outils",
    Delivery: "Livraison",
  },
  ar: {
    Frontend: "الواجهة الأمامية",
    "Backend & APIs": "الخلفية وواجهات برمجة التطبيقات",
    "Dashboards & Tools": "لوحات التحكم والأدوات",
    Delivery: "التسليم",
  },
} as const;

const skillItemLabels: Record<string, Record<keyof typeof skillCategoryLabels, string>> = {
  "Admin Panels": { en: "Admin Panels", fr: "Panneaux d'administration", ar: "لوحات الإدارة" },
  Charts: { en: "Charts", fr: "Graphiques", ar: "الرسوم البيانية" },
  "Excel Parsing": { en: "Excel Parsing", fr: "Analyse Excel", ar: "قراءة Excel" },
  Reporting: { en: "Reporting", fr: "Reporting", ar: "إعداد التقارير" },
  "Reporting UI": { en: "Reporting UI", fr: "Interface de reporting", ar: "واجهة التقارير" },
  Documentation: { en: "Documentation", fr: "Documentation", ar: "الوثائق" },
};

const experienceCopy: Record<number, Record<"en" | "fr" | "ar", ExperienceItem>> = {
  1: {
    en: {
      id: 1,
      role: "Full-Stack Project Builder",
      company: "Academic & Portfolio Projects",
      duration: "2025 - Present",
      description:
        "Building full-stack academic and portfolio projects from requirements to implementation, including APIs, dashboards, database models, mobile screens, documentation, and presentation material.",
    },
    fr: {
      id: 1,
      role: "Concepteur de projets full-stack",
      company: "Projets academiques et portfolio",
      duration: "2025 - Present",
      description:
        "Je construis des projets academiques et portfolio full-stack, des besoins a l'implementation, avec API, tableaux de bord, modeles de donnees, ecrans mobiles, documentation et support de presentation.",
    },
    ar: {
      id: 1,
      role: "منشئ مشاريع Full-Stack",
      company: "المشاريع الأكاديمية وportfolio",
      duration: "2025 - الآن",
      description:
        "أبني مشاريع أكاديمية ومشاريع portfolio كاملة من المتطلبات إلى التنفيذ، بما في ذلك واجهات برمجة التطبيقات ولوحات التحكم ونماذج البيانات والشاشات المحمولة والوثائق ومواد العرض.",
    },
  },
  2: {
    en: {
      id: 2,
      role: "Summer Intern",
      company: "Stage d'ete",
      duration: "2025",
      description:
        "Completed a summer internship focused on observing professional workflows, understanding company organization, and documenting practical experience in a structured report.",
    },
    fr: {
      id: 2,
      role: "Stagiaire d'ete",
      company: "Stage d'ete",
      duration: "2025",
      description:
        "Stage d'ete realise autour de l'observation des workflows professionnels, de la comprehension de l'organisation de l'entreprise et de la documentation de l'experience dans un rapport structure.",
    },
    ar: {
      id: 2,
      role: "متدرب صيفي",
      company: "Stage d'ete",
      duration: "2025",
      description:
        "أكملت تدريباً صيفياً ركز على ملاحظة سير العمل المهني وفهم تنظيم الشركة وتوثيق الخبرة العملية في تقرير منظم.",
    },
  },
  3: {
    en: {
      id: 3,
      role: "Frontend & Dashboard Developer",
      company: "Personal Learning Projects",
      duration: "2024 - Present",
      description:
        "Designing responsive user interfaces, reusable components, dashboard screens, and CRUD-oriented layouts for web applications and internal tool concepts.",
    },
    fr: {
      id: 3,
      role: "Developpeur front-end et tableaux de bord",
      company: "Projets personnels",
      duration: "2024 - Present",
      description:
        "Je conçois des interfaces responsives, des composants reutilisables, des tableaux de bord et des mises en page CRUD pour des applications web et des outils internes.",
    },
    ar: {
      id: 3,
      role: "مطور الواجهة الأمامية ولوحات التحكم",
      company: "مشاريع التعلم الشخصي",
      duration: "2024 - الآن",
      description:
        "أصمم واجهات مستخدم متجاوبة ومكونات قابلة لإعادة الاستخدام وشاشات لوحات التحكم وتخطيطات CRUD لتطبيقات الويب ومفاهيم الأدوات الداخلية.",
    },
  },
};

const educationCopy: Record<number, Record<"en" | "fr" | "ar", EducationItem>> = {
  1: {
    en: {
      id: 1,
      degree: "Cycle Ingenieur",
      institution: "Ecole des Sciences de l'Information - ESI",
      year: "Present",
      field: "Information Systems Engineering and Digital Transformation",
    },
    fr: {
      id: 1,
      degree: "Cycle d'ingenieur",
      institution: "Ecole des Sciences de l'Information - ESI",
      year: "Present",
      field: "Ingenierie des systemes d'information et transformation digitale",
    },
    ar: {
      id: 1,
      degree: "سلك المهندس",
      institution: "المدرسة العليا لعلوم المعلومات - ESI",
      year: "الآن",
      field: "هندسة أنظمة المعلومات والتحول الرقمي",
    },
  },
  2: {
    en: {
      id: 2,
      degree: "Technical & Mathematical Background",
      institution: "Academic training",
      year: "Ongoing",
      field: "Software engineering, mathematics, modelling, and digital systems",
    },
    fr: {
      id: 2,
      degree: "Formation technique et mathematique",
      institution: "Formation academique",
      year: "En cours",
      field: "Ingenierie logicielle, mathematiques, modelisation et systemes numeriques",
    },
    ar: {
      id: 2,
      degree: "خلفية تقنية ورياضية",
      institution: "تكوين أكاديمي",
      year: "قيد الإنجاز",
      field: "هندسة البرمجيات والرياضيات والنمذجة والأنظمة الرقمية",
    },
  },
};

function localizeList<T extends { category: string; items: string[] }>(items: T[], locale: "en" | "fr" | "ar") {
  return items.map((item) => ({
    ...item,
    category: (skillCategoryLabels[locale] as Record<string, string>)[item.category] ?? item.category,
    items: (item as { items: string[] }).items.map((value) => skillItemLabels[value]?.[locale] ?? value),
  }));
}

export function localizeSkills(skills: Skill[], locale: Locale) {
  return localizeList(skills, locale);
}

export function localizeExperience(experience: ExperienceItem[], locale: Locale) {
  return experience.map((item) => experienceCopy[item.id]?.[locale] ?? item);
}

export function localizeEducation(education: EducationItem[], locale: Locale) {
  return education.map((item) => educationCopy[item.id]?.[locale] ?? item);
}

export function localizeAboutCopy(locale: Locale) {
  return copy[locale];
}
