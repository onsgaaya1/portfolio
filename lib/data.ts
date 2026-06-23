// =============================================
// LIB/DATA.TS — All projects + translations
// =============================================

export type Project = {
  id: string;
  title: string;
  emoji: string;
  shortDesc: { en: string; fr: string };
  longDesc: { en: string; fr: string };
  techs: string[];
  categories: Category[];
  github?: string;
  demo?: string;
  report?: string; // PDF path, e.g. /reports/moodi.pdf
  ppt?: string;     // PDF path (converted from pptx), e.g. /ppt/moodi.pdf
  video?: string;  // single YouTube embed URL (used for card badge + simple projects)
  videos?: ProjectVideo[]; // multiple labelled videos (shown on the detail page)
  highlight?: string; // key stat / badge
  status: "completed" | "in-progress";
};

export type ProjectVideo = {
  url: string;                       // YouTube embed URL
  label: { en: string; fr: string }; // small caption shown under the player
};

export type Category = "AI/ML/DL" | "Web" | "Mobile" | "Game" | "Data";

export const projects: Project[] = [
  {
    id: "moodi",
    title: "Moodi",
    emoji: "🧠",
    shortDesc: {
      en: "AI-powered emotional tracking platform — web + mobile + chatbot",
      fr: "Plateforme de suivi émotionnel IA — web + mobile + chatbot",
    },
    longDesc: {
      en: "Final-year engineering project. Multilingual emotion detection via fine-tuned DistilBERT (86% accuracy), LLaMA chatbot via Groq API, Angular 20 web dashboard, React Native/Expo mobile app, ASP.NET Core 8 backend, FastAPI inference service, PostgreSQL database. Full multi-role JWT auth.",
      fr: "Projet de fin d'études. Détection émotionnelle multilingue via DistilBERT fine-tuné (86% de précision), chatbot LLaMA via Groq API, dashboard Angular 20, app mobile React Native/Expo, backend ASP.NET Core 8, service FastAPI, PostgreSQL. Authentification JWT multi-rôle complète.",
    },
    techs: ["Angular", "ASP.NET Core", "React Native", "FastAPI", "DistilBERT", "PostgreSQL", "Groq"],
    categories: ["AI/ML/DL", "Web", "Mobile"],
    github: "https://github.com/onsgaaya1/Moodi_Web_Apps",
    report: "/reports/moodi.pdf",
    ppt: "/ppt/moodi.pdf",
    video: "https://www.youtube.com/embed/AFN2Tr1aT84",
    videos: [
      {
        url: "https://www.youtube.com/embed/AFN2Tr1aT84",
        label: { en: "User Space (Web)", fr: "Espace Utilisateur (Web)" },
      },
      {
        url: "https://www.youtube.com/embed/7N37spYpZTQ",
        label: { en: "Psychologist & Admin Space (Web)", fr: "Espace Psychologue & Admin (Web)" },
      },
    ],
    highlight: "86% accuracy · DistilBERT",
    status: "completed",
  },
  {
    id: "sentiment-yelp",
    title: "Sentiment Analysis — Yelp NLP",
    emoji: "🤖",
    shortDesc: {
      en: "NLP sentiment analysis comparing TF-IDF, BiLSTM & DistilBERT",
      fr: "Analyse de sentiment NLP — comparaison TF-IDF, BiLSTM & DistilBERT",
    },
    longDesc: {
      en: "Compared 3 NLP models on Yelp reviews: TF-IDF + Logistic Regression (92.58%), BiLSTM (85.72%), DistilBERT (92.55%). Key finding: model complexity must match data volume. Deployed via Streamlit.",
      fr: "Comparaison de 3 modèles NLP sur des avis Yelp : TF-IDF + Régression logistique (92.58%), BiLSTM (85.72%), DistilBERT (92.55%). Déployé via Streamlit.",
    },
    techs: ["Python", "PyTorch", "DistilBERT", "Scikit-Learn", "Streamlit"],
    categories: ["AI/ML/DL", "Data"],
    github: "https://github.com/onsgaaya1/Sentiment-Analysis-Yelp-NLP-DeepLearning",
    demo: "https://huggingface.co/spaces/onsgaaya/sentimentYelpOns",
    report: "/reports/sentiment-yelp.pdf",
    ppt: "/ppt/sentiment-yelp.pdf",
    video: "https://www.youtube.com/embed/lPPw3wdzoq4",
    highlight: "92.58% accuracy",
    status: "completed",
  },
  {
    id: "ml-income",
    title: "ML Income Prediction",
    emoji: "📊",
    shortDesc: {
      en: "Annual income prediction — 7 ML models benchmarked (CRISP-DM)",
      fr: "Prédiction de revenus annuels — 7 modèles ML comparés (CRISP-DM)",
    },
    longDesc: {
      en: "Adult Census Income dataset. Benchmarked 7 models using CRISP-DM methodology. Gradient Boosting achieved best accuracy at 86.86%. Full EDA, feature engineering, and model evaluation pipeline.",
      fr: "Dataset Adult Census Income. 7 modèles comparés avec la méthodologie CRISP-DM. Gradient Boosting : meilleure précision à 86.86%. Pipeline complet EDA, feature engineering, évaluation.",
    },
    techs: ["Python", "Scikit-Learn", "Pandas", "Jupyter"],
    categories: ["AI/ML/DL", "Data"],
    github: "https://github.com/onsgaaya1/ML-Income-Prediction",
    report: "/reports/ml-income.pdf",
    highlight: "86.86% — Gradient Boosting",
    status: "completed",
  },
  {
    id: "stock-dashboard",
    title: "Stock Market Dashboard",
    emoji: "📈",
    shortDesc: {
      en: "Financial market dashboard with predictive model (R²=0.9997)",
      fr: "Dashboard marchés financiers avec modèle prédictif (R²=0.9997)",
    },
    longDesc: {
      en: "Full data analysis dashboard for financial markets. Predictive regression model with R²=0.9997. EDA, visualization, and statistical analysis using Python and Jupyter.",
      fr: "Dashboard d'analyse des marchés financiers avec modèle de régression prédictif R²=0.9997. EDA, visualisations et analyse statistique.",
    },
    techs: ["Python", "Pandas", "Matplotlib", "Scikit-Learn", "Jupyter"],
    categories: ["Data"],
    github: "https://github.com/onsgaaya1/stock-dashboard-sg01",
    demo: "https://stock-dashboard-sg01-creqnabvnswpmyftuebkak.streamlit.app",
    report: "/reports/stock-dashboard.pdf",
    ppt: "/ppt/stock-dashboard.pdf",
    video: "https://www.youtube.com/embed/GJ9pkSFFLEM",
    highlight: "R² = 0.9997",
    status: "completed",
  },
  {
    id: "parago",
    title: "PARAGO — Full-Stack Web",
    emoji: "🌐",
    shortDesc: {
      en: "Full-stack web platform — ASP.NET Core backend + Angular frontend",
      fr: "Application web full-stack — backend ASP.NET Core + frontend Angular",
    },
    longDesc: {
      en: "Full-stack platform with ASP.NET Core 8 REST API and Angular frontend. Features include user management, authentication, and a complete CRUD admin dashboard.",
      fr: "Plateforme full-stack avec API REST ASP.NET Core 8 et frontend Angular. Gestion utilisateurs, authentification, dashboard admin CRUD complet.",
    },
    techs: ["ASP.NET Core", "Angular", "SQL Server", "JWT"],
    categories: ["Web"],
    github: "https://github.com/onsgaaya1/PARAGO_WEB",
    report: "/reports/parago.pdf",
    video: "https://www.youtube.com/embed/fIWft0KIvMM",
    status: "completed",
  },
  {
    id: "bloom",
    title: "Bloom — Full-Stack MERN",
    emoji: "🌸",
    shortDesc: {
      en: "Personal journal + online shop + admin panel (MERN stack)",
      fr: "Journal personnel + boutique en ligne + panneau admin (MERN)",
    },
    longDesc: {
      en: "Full-stack MERN app combining a PIN-protected personal journal, an online shop (cart, wishlist, orders), and an admin panel. React + Node.js/Express + MongoDB + JWT + Multer + Zod.",
      fr: "Application MERN combinant un journal personnel protégé par PIN, une boutique en ligne (panier, wishlist, commandes) et un panneau admin. React + Node.js/Express + MongoDB + JWT.",
    },
    techs: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    categories: ["Web"],
    github: "https://github.com/onsgaaya1/Bloom-FullStack-React-Node",
    report: "/reports/bloom.pdf",
    ppt: "/ppt/bloom.pdf",
    video: "https://www.youtube.com/embed/ZzrLBIKo-IQ",
    status: "completed",
  },
  {
    id: "brainybooks-php",
    title: "BrainyBooks — PHP/MySQL",
    emoji: "📚",
    shortDesc: {
      en: "E-commerce bookshop — PHP/MySQL with full admin panel",
      fr: "Librairie e-commerce — PHP/MySQL avec panneau admin complet",
    },
    longDesc: {
      en: "Educational e-commerce platform. Catalogue with filters, cart, Buy Now, review management, admin panel for CRUD on books, orders, and messages. PHP/MySQL.",
      fr: "Plateforme e-commerce de livres éducatifs. Catalogue avec filtres, panier, Buy Now, gestion des avis, espace admin CRUD livres/commandes/messages.",
    },
    techs: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    github: "https://github.com/onsgaaya1/BrainyBooks-PHP",
    report: "/reports/brainybooks.pdf",
    ppt: "/ppt/brainybooks-php.pdf",
    video: "https://www.youtube.com/embed/PMD8zcbC1Uk",
    status: "completed",
  },
  {
    id: "brainybooks-html",
    title: "BrainyBooks — HTML/CSS/JS",
    emoji: "📖",
    shortDesc: {
      en: "Multi-page educational bookshop frontend (HTML/CSS/JS)",
      fr: "Frontend librairie éducative multi-pages (HTML/CSS/JS)",
    },
    longDesc: {
      en: "Full frontend for an educational e-commerce bookshop: home, catalogue, product page, cart, checkout, payment, login/register, contact, and blog. Pure HTML/CSS/JS.",
      fr: "Frontend complet d'une librairie e-commerce : accueil, catalogue, fiche produit, panier, checkout, paiement, login/register, contact, blog. HTML/CSS/JS pur.",
    },
    techs: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    github: "https://github.com/onsgaaya1/BrainyBooks-HTML-December2024",
    status: "completed",
  },
  {
    id: "rentit",
    title: "RentIt — Electric Car Rental",
    emoji: "🚗",
    shortDesc: {
      en: "Electric car rental platform — Scrum (3 sprints), HTML/CSS/JS",
      fr: "Plateforme de location de voitures électriques — Scrum (3 sprints)",
    },
    longDesc: {
      en: "Group project using Scrum methodology (3 sprints). Features: account management for managers and clients, vehicle addition and search, reservation flow. Frontend in HTML/CSS/JS.",
      fr: "Projet de groupe en méthodologie Scrum (3 sprints). Gestion des comptes responsable/client, ajout et recherche de véhicules, flux de réservation.",
    },
    techs: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    github: "https://github.com/onsgaaya1/RentIt-HTML-Mai-2024",
    ppt: "/ppt/rentit.pdf",
    status: "completed",
  },
  {
    id: "parago-mobile",
    title: "PARAGO Mobile",
    emoji: "📱",
    shortDesc: {
      en: "Android e-commerce app — pharmacy & beauty (Kotlin + Firebase)",
      fr: "App Android e-commerce — pharmacie & beauté (Kotlin + Firebase)",
    },
    longDesc: {
      en: "Android e-commerce app for pharmacy and beauty products. Cart, orders, promotions, and Firebase integration. Built with Kotlin.",
      fr: "App Android e-commerce — produits pharmacie & beauté. Panier, commandes, promotions et intégration Firebase. Développé en Kotlin.",
    },
    techs: ["Kotlin", "Android", "Firebase"],
    categories: ["Mobile"],
    github: "https://github.com/onsgaaya1/PARAGO_MOBILE",
    video: "https://www.youtube.com/embed/3Lu3DTGCC_M",
    status: "completed",
  },
  {
    id: "puffy",
    title: "Puffy — Plushie Shop",
    emoji: "🧸",
    shortDesc: {
      en: "Android app to buy plushies — Kotlin",
      fr: "App Android pour acheter des peluches — Kotlin",
    },
    longDesc: {
      en: "Android mobile app for selling plushies. Built with Kotlin, featuring a product catalogue, cart, and order flow.",
      fr: "Application mobile Android pour vendre des peluches. Catalogue produits, panier et flux de commande. Développée en Kotlin.",
    },
    techs: ["Kotlin", "Android"],
    categories: ["Mobile"],
    github: "https://github.com/onsgaaya1/Puffy",
    status: "completed",
  },
  {
    id: "moodi-mobile",
    title: "Moodi Mobile App",
    emoji: "💚",
    shortDesc: {
      en: "Moodi companion app — React Native/Expo for iOS & Android",
      fr: "App mobile Moodi — React Native/Expo pour iOS & Android",
    },
    longDesc: {
      en: "React Native/Expo mobile companion to the Moodi platform. Connects to the ASP.NET Core backend, supports emotion logging, chatbot access, and history visualization.",
      fr: "Application mobile React Native/Expo complémentaire à la plateforme Moodi. Connexion au backend ASP.NET Core, journalisation émotionnelle, chatbot et visualisation de l'historique.",
    },
    techs: ["React Native", "Expo", "TypeScript"],
    categories: ["Mobile", "AI/ML/DL"],
    github: "https://github.com/onsgaaya1/Moodi-Mobile-App",
    video: "https://www.youtube.com/embed/oFGvqbDWraE",
    videos: [
      {
        url: "https://www.youtube.com/embed/oFGvqbDWraE",
        label: { en: "User App (Mobile)", fr: "App Utilisateur (Mobile)" },
      },
      {
        url: "https://www.youtube.com/embed/djASkNYc_vs",
        label: { en: "Moodi Pro — Psychologist App (Mobile)", fr: "Moodi Pro — App Psychologue (Mobile)" },
      },
    ],
    status: "completed",
  },
  {
    id: "crazy-wheels",
    title: "Crazy Wheels",
    emoji: "🎮",
    shortDesc: {
      en: "3D Unity game — truck navigation with obstacles & coin collection",
      fr: "Jeu 3D Unity — camion en milieu urbain, obstacles et pièces",
    },
    longDesc: {
      en: "3D mini-game built with Unity 6 (2022 LTS). The player drives a truck through an urban environment, dodging obstacles (cones, barriers, vehicles) and collecting coins. Developed with C# scripting and custom shaders.",
      fr: "Mini-jeu 3D avec Unity 6 (2022 LTS). Le joueur dirige un camion en milieu urbain, évite des obstacles (cônes, barrières, véhicules) et collecte des pièces. Scripts C# et shaders personnalisés.",
    },
    techs: ["Unity", "C#", "ShaderLab"],
    categories: ["Game"],
    github: "https://github.com/onsgaaya1/CrazyWheels-Unity",
    ppt: "/ppt/crazy-wheels.pdf",
    video: "https://www.youtube.com/embed/ayBqWIA8oF8",
    status: "completed",
  },
];

// =============================================
// DERIVED: unique tech list (auto-generated from real project data)
// Used to build the Stack filter buttons — always in sync with `projects`.
// =============================================
export const ALL_TECHS: string[] = Array.from(
  new Set(projects.flatMap(p => p.techs))
).sort((a, b) => a.localeCompare(b));

// =============================================
// QURANIC VERSES (knowledge theme) — used on Home + About
// =============================================
export type Verse = {
  arabic: string;
  translit: string;
  translation: { en: string; fr: string };
  ref: { en: string; fr: string };
};

export const verses: Record<string, Verse> = {
  // HOME — elevation through knowledge (always present)
  rise: {
    arabic: "يَرْفَعِ ٱللَّهُ ٱلَّذِينَ آمَنُوا۟ مِنكُمْ وَٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ دَرَجَٰتٍ",
    translit: "Yarfaʿi-llāhu-lladhīna āmanū minkum wa-lladhīna ūtu-l-ʿilma darajāt",
    translation: {
      en: "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
      fr: "Allah élève en degrés ceux d'entre vous qui ont cru et ceux qui ont reçu le savoir.",
    },
    ref: { en: "Al-Mujādila — 58:11", fr: "Al-Mujâdala — 58:11" },
  },
  // ABOUT — the student's supplication
  zidni: {
    arabic: "رَّبِّ زِدْنِى عِلْمًا",
    translit: "Rabbi zidnī ʿilmā",
    translation: {
      en: "My Lord, increase me in knowledge.",
      fr: "Mon Seigneur, accroît mon savoir.",
    },
    ref: { en: "Ṭā-Hā — 20:114", fr: "Tâ-Hâ — 20:114" },
  },
  // ABOUT — humility of knowledge
  humble: {
    arabic: "وَمَآ أُوتِيتُم مِّنَ ٱلْعِلْمِ إِلَّا قَلِيلًا",
    translit: "Wa mā ūtītum mina-l-ʿilmi illā qalīlā",
    translation: {
      en: "And you have not been given of knowledge except a little.",
      fr: "Et vous n'avez reçu que peu de savoir.",
    },
    ref: { en: "Al-Isrāʾ — 17:85", fr: "Al-Isrâ — 17:85" },
  },
};

// =============================================
// TRANSLATIONS
// =============================================

export type Lang = "en" | "fr";

export const t = {
  nav: {
    home: { en: "Home", fr: "Accueil" },
    projects: { en: "Projects", fr: "Projets" },
    about: { en: "About", fr: "À propos" },
    contact: { en: "Contact", fr: "Contact" },
  },
  home: {
    badge: { en: "Available for internship", fr: "Disponible pour stage" },
    greeting: { en: "Hi, I'm", fr: "Bonjour, je suis" },
    role: {
      en: "Full-Stack & AI Developer",
      fr: "Développeuse Full-Stack & IA",
    },
    tagline: {
      en: "I build intelligent web and mobile apps — from fine-tuned language models to production-ready full-stack platforms.",
      fr: "Je construis des applications web et mobiles intelligentes — des modèles de langage fine-tunés aux plateformes full-stack en production.",
    },
    cta_projects: { en: "View my projects", fr: "Voir mes projets" },
    cta_contact: { en: "Get in touch", fr: "Me contacter" },
    stats: {
      projects: { en: "Projects", fr: "Projets" },
      accuracy: { en: "Best model accuracy", fr: "Meilleure précision IA" },
      stacks: { en: "Tech stacks", fr: "Stacks maîtrisées" },
    },
  },
  projects: {
    title: { en: "My Projects", fr: "Mes Projets" },
    subtitle: {
      en: "13 projects across AI/ML, full-stack web, mobile, and game development",
      fr: "13 projets en IA/ML, web full-stack, mobile et jeu vidéo",
    },
    all: { en: "All", fr: "Tous" },
    github: { en: "Code", fr: "Code" },
    report: { en: "Report", fr: "Rapport" },
    ppt: { en: "Presentation", fr: "Présentation" },
    demo: { en: "Live", fr: "Demo" },
    video: { en: "Video", fr: "Vidéo" },
    close: { en: "Close", fr: "Fermer" },
    techs: { en: "Tech Stack", fr: "Stack Technique" },
    status_done: { en: "Completed", fr: "Terminé" },
    back: { en: "Back to projects", fr: "Retour aux projets" },
  },
  about: {
    title: { en: "About Me", fr: "À Propos" },
    intro: {
      en: "4th-year Software Engineering student at EPI Digital School, Sousse. I followed an unconventional Bac+7 path — Business Administration → ICT Preparatory → Software Engineering — which gave me both technical depth and a rare business perspective.",
      fr: "Étudiante en 4ème année Génie Logiciel à EPI Digital School, Sousse. J'ai suivi un parcours Bac+7 atypique — Administration des Affaires → Prépa ICT → Génie Logiciel — qui m'a donné une profondeur technique et une rare perspective business.",
    },
    skills_title: { en: "Skills", fr: "Compétences" },
    certs_title: { en: "Certifications", fr: "Certifications" },
    edu_title: { en: "Education", fr: "Formation" },
  },
  contact: {
    title: { en: "Get In Touch", fr: "Me Contacter" },
    subtitle: {
      en: "Open to internship opportunities and collaborations.",
      fr: "Ouverte aux opportunités de stage et aux collaborations.",
    },
    name: { en: "Your name", fr: "Votre nom" },
    email: { en: "Your email", fr: "Votre email" },
    message: { en: "Your message", fr: "Votre message" },
    send: { en: "Send message", fr: "Envoyer" },
  },
};
