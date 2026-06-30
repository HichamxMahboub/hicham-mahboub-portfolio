import type { ProjectItem } from "@/types";
import type { Locale } from "@/lib/localization";

const categoryLabels: Record<string, Record<Locale, string>> = {
  "View All": { en: "View All", fr: "Tout voir", ar: "عرض الكل" },
  "Backend API / Marketplace Platform": {
    en: "Backend API / Marketplace Platform",
    fr: "API backend / plateforme marketplace",
    ar: "واجهة برمجة تطبيقات خلفية / منصة سوق",
  },
  "Full-Stack Platforms": {
    en: "Full-Stack Platforms",
    fr: "Plateformes full-stack",
    ar: "منصات full-stack",
  },
  "Simulation Analytics / Full-Stack Data Platform": {
    en: "Simulation Analytics / Full-Stack Data Platform",
    fr: "Analyse de simulation / plateforme full-stack de donnees",
    ar: "تحليل المحاكاة / منصة بيانات full-stack",
  },
  "Education Analytics / Desktop App": {
    en: "Education Analytics / Desktop App",
    fr: "Analyse educative / application de bureau",
    ar: "تحليلات التعليم / تطبيق سطح المكتب",
  },
  "Dashboards & Analytics": {
    en: "Dashboards & Analytics",
    fr: "Tableaux de bord et analyse",
    ar: "لوحات التحكم والتحليلات",
  },
  "Digital Tools": {
    en: "Digital Tools",
    fr: "Outils numeriques",
    ar: "ادوات رقمية",
  },
  "Web Interfaces": {
    en: "Web Interfaces",
    fr: "Interfaces web",
    ar: "واجهات ويب",
  },
};

const summaries: Record<number, Record<Locale, Pick<ProjectItem, "title" | "shortDescription">>> = {
  7: {
    en: {
      title: "SmartSim Analytics",
      shortDescription:
        "A full-stack simulation analytics platform for CSV/JSON exports, deterministic Python analysis, KPIs, anomaly detection, trend and stability checks, and PDF reporting.",
    },
    fr: {
      title: "SmartSim Analytics",
      shortDescription:
        "Une plateforme full-stack d'analyse de simulation pour les export CSV/JSON, l'analyse Python deterministic, les KPI, la detection d'anomalies, les controles de tendance et de stabilite, et les rapports PDF.",
    },
    ar: {
      title: "SmartSim Analytics",
      shortDescription:
        "منصة تحليل محاكاة full-stack لتصديرات CSV/JSON، وتحليل Python حتمي، ومؤشرات KPI، وكشف الشذوذ، وفحوصات الاتجاه والاستقرار، وتقارير PDF.",
    },
  },
  1: {
    en: {
      title: "Smart Match - Internship & Freelance Matching Platform",
      shortDescription:
        "A full-stack matching platform for candidates, recruiters, companies, offers, applications, notifications, and AI-assisted matching results.",
    },
    fr: {
      title: "Smart Match - Plateforme de mise en relation stage et freelance",
      shortDescription:
        "Une plateforme full-stack de mise en relation pour candidats, recruteurs, entreprises, offres, candidatures, notifications et resultats de matching assistes par IA.",
    },
    ar: {
      title: "Smart Match - منصة مطابقة للتدريب والعمل الحر",
      shortDescription:
        "منصة مطابقة full-stack للمرشحين والمجندين والشركات والعروض والطلبات والإشعارات ونتائج المطابقة المدعومة بالذكاء الاصطناعي.",
    },
  },
  2: {
    en: {
      title: "MarketHub",
      shortDescription:
        "A professional .NET 8 marketplace backend API with role-based access, marketplace workflows, PostgreSQL persistence, Swagger, Docker, tests, and CI.",
    },
    fr: {
      title: "MarketHub",
      shortDescription:
        "Une API backend marketplace professionnelle en .NET 8 avec acces par roles, workflows marketplace, persistance PostgreSQL, Swagger, Docker, tests et CI.",
    },
    ar: {
      title: "MarketHub",
      shortDescription:
        "واجهة برمجة تطبيقات خلفية احترافية لمنصة سوق مبنية بـ .NET 8 مع وصول حسب الأدوار، وسير عمل السوق، وتخزين PostgreSQL، وSwagger، وDocker، والاختبارات، وCI.",
    },
  },
  3: {
    en: {
      title: "Assistant d'Analyse des Compétences",
      shortDescription:
        "A local-first analytics assistant for teachers to import Excel competency reports, analyze class and student performance, identify strongest and weakest competencies, and generate printable reports with French/Arabic support.",
    },
    fr: {
      title: "Assistant d'Analyse des Compétences",
      shortDescription:
        "Un assistant analytique local-first pour les enseignants afin d'importer des rapports de competences Excel, analyser les performances de la classe et des eleves, identifier les competences fortes et faibles, et generer des rapports imprimables avec support francais/arabe.",
    },
    ar: {
      title: "مساعد تحليل الكفاءات",
      shortDescription:
        "مساعد تحليلي محلي أولاً للمعلمين لاستيراد تقارير الكفاءات من Excel، وتحليل أداء الصف والطلاب، وتحديد الكفاءات الأقوى والأضعف، وإنشاء تقارير قابلة للطباعة مع دعم الفرنسية والعربية.",
    },
  },
  4: {
    en: {
      title: "Social Media Command Center",
      shortDescription:
        "A dashboard concept for planning posts, reviewing channel activity, tracking content status, and organizing social media workflows.",
    },
    fr: {
      title: "Social Media Command Center",
      shortDescription:
        "Un concept de tableau de bord pour planifier les publications, revoir l'activite des canaux, suivre le statut du contenu et organiser les workflows reseaux sociaux.",
    },
    ar: {
      title: "مركز قيادة وسائل التواصل",
      shortDescription:
        "تصور لوحة تحكم لتخطيط المنشورات، ومراجعة نشاط القنوات، وتتبع حالة المحتوى، وتنظيم سير عمل وسائل التواصل الاجتماعي.",
    },
  },
  5: {
    en: {
      title: "Freelance Manager",
      shortDescription:
        "A management tool concept for tracking clients, missions, invoices, tasks, deadlines, and project status in one workspace.",
    },
    fr: {
      title: "Freelance Manager",
      shortDescription:
        "Un concept d'outil de gestion pour suivre clients, missions, factures, taches, delais et etat des projets dans un seul espace.",
    },
    ar: {
      title: "Freelance Manager",
      shortDescription:
        "تصور لأداة إدارة لتتبع العملاء والمهام والفواتير والمواعيد النهائية وحالة المشروع في مساحة عمل واحدة.",
    },
  },
  8: {
    en: {
      title: "Leadbot Command Center",
      shortDescription:
        "A FastAPI and Playwright command center for Google Maps lead scraping, live progress logs, and downloadable Excel/CSV exports.",
    },
    fr: {
      title: "Leadbot Command Center",
      shortDescription:
        "Un centre de commande FastAPI et Playwright pour l'extraction de leads Google Maps, les journaux en direct et les exports Excel/CSV telechargeables.",
    },
    ar: {
      title: "Leadbot Command Center",
      shortDescription:
        "مركز قيادة مبني بـ FastAPI وPlaywright لاستخراج العملاء المحتملين من Google Maps، مع سجلات مباشرة وتصدير Excel/CSV قابل للتنزيل.",
    },
  },
  6: {
    en: {
      title: "Nova AI Landing Page",
      shortDescription:
        "A clean responsive landing page concept for an AI product, focused on visual hierarchy, messaging, and conversion-oriented sections.",
    },
    fr: {
      title: "Nova AI Landing Page",
      shortDescription:
        "Un concept de page d'accueil responsive et soignee pour un produit IA, centre sur la hierarchie visuelle, le message et des sections orientees conversion.",
    },
    ar: {
      title: "Nova AI Landing Page",
      shortDescription:
        "تصور لصفحة هبوط نظيفة ومتجاوبة لمنتج ذكاء اصطناعي، مع التركيز على التسلسل البصري والرسائل وأقسام موجهة للتحويل.",
    },
  },
};

export function translateProjectCategory(category: ProjectItem["category"] | "View All", locale: Locale) {
  return categoryLabels[category]?.[locale] ?? category;
}

export function getProjectCategoryOptions(locale: Locale) {
  return [
    "View All",
    "Backend API / Marketplace Platform",
    "Full-Stack Platforms",
    "Simulation Analytics / Full-Stack Data Platform",
    "Education Analytics / Desktop App",
    "Dashboards & Analytics",
    "Digital Tools",
    "Web Interfaces",
  ].map((key) => ({
    key,
    label: translateProjectCategory(key as ProjectItem["category"] | "View All", locale),
  }));
}

export function localizeProjectSummary(project: ProjectItem, locale: Locale) {
  const localized = summaries[project.id]?.[locale];

  return {
    ...project,
    category: translateProjectCategory(project.category, locale) as ProjectItem["category"],
    title: localized?.title ?? project.title,
    shortDescription: localized?.shortDescription ?? project.shortDescription,
  };
}
