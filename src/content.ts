import capgemini from "./assets/capgemini.svg";
import eheio from "./assets/eheio.png";
import infogene from "./assets/infogene.png";
import sncf from "./assets/sncf.svg";
import tisalabs from "./assets/tisalabs.png";
import ujm from "./assets/ujm.png";
import valeuriad from "./assets/valeuriad.svg";
import wiztivi from "./assets/wiztivi.png";

export const LOCALES = ["en", "nl", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export interface Role {
  company: string;
  logo?: string;
  title: string;
  context?: string;
  start: string;
  end?: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  name: string;
  url?: string;
  summary: string;
  stack: string[];
}

export interface Content {
  meta: { label: string; present: string; years: string };
  hero: { title: string; location: string; summary: string; cta: string };
  nav: { experience: string; work: string; skills: string; about: string };
  clientsTitle: string;
  experienceTitle: string;
  roles: Role[];
  workTitle: string;
  workIntro: string;
  projects: Project[];
  skillsTitle: string;
  skills: { label: string; items: string }[];
  educationTitle: string;
  education: { school: string; logo: string; degree: string; years: string }[];
  languagesTitle: string;
  languages: { name: string; level: string }[];
  teachingTitle: string;
  teaching: string;
  contactTitle: string;
  contactText: string;
}

// First professional engagement; drives the "years of experience" figure.
export const CAREER_START = new Date("2014-12-01");

export const CLIENTS = [
  "European Space Agency",
  "Hermès",
  "Foncia",
  "SNCF Connect",
  "BPCE",
  "Vodafone",
  "Eutelsat",
  "Telecentro",
  "Treemetrics",
];

const STACK = {
  infogene: ["TypeScript", "NestJS", "React", "MongoDB", "RabbitMQ", "Temporal", "GraphQL", "GitLab CI", "Datadog"],
  valeuriad: ["Python", "FastAPI", "SQLAlchemy", "Pytest", "RAG", "MCP", "Angular", "Kubernetes", "GCP", "Azure DevOps"],
  sncf: ["Python", "React", "Material UI", "Vite", "AWS Lambda", "PostgreSQL", "DynamoDB"],
  capgemini: ["AWS Lambda", "SNS / SQS / SES", "ArgoCD", "Grafana", "Okta SAML", "Symfony", "Akeneo PIM"],
  wiztivi: ["TypeScript", "JavaScript", "Python", "Grafana"],
  tisalabs: ["Python", "Flask", "TensorFlow", "Elasticsearch", "RabbitMQ", "MQTT", "Docker"],
  freelance: ["SQL Server", "MySQL", "PHP"],
};

const en: Content = {
  meta: { label: "English", present: "Present", years: "years" },
  hero: {
    title: "Senior Full-Stack & AI Engineer",
    location: "Lille, France · open to relocate",
    summary:
      "I build production backends and full-stack platforms in Python and TypeScript, and I run them on Kubernetes. Since 2024 I have led applied-AI delivery: RAG pipelines, MCP servers and agent tooling that moved internal assistants from prototypes to tools teams use every day.",
    cta: "Get in touch",
  },
  nav: { experience: "Experience", work: "Open source", skills: "Skills", about: "Background" },
  clientsTitle: "Delivered for",
  experienceTitle: "Experience",
  roles: [
    {
      company: "Infogene",
      logo: infogene,
      title: "Senior Full-Stack & AI Engineer",
      context: "Emeria / Foncia",
      start: "2026-05",
      highlights: [
        "Rebuilt legacy services as RabbitMQ-driven microservices with Temporal orchestrating long-running flows, so product domains release independently.",
        "Set up the MCP servers and agent rules the team uses daily, giving every pull request an automated first review.",
        "Built a native macOS control centre and a headless JSON CLI over the same guarded engine, so engineers and AI agents drive the dev environment through identical operations.",
        "Audited the team's AI tooling spend and halved the cost of long investigations by changing how sessions are run.",
      ],
      stack: STACK.infogene,
    },
    {
      company: "Valeuriad",
      logo: valeuriad,
      title: "Lead Full-Stack, AI & DevOps Engineer",
      start: "2024-09",
      end: "2026-05",
      highlights: [
        "Led the Python and AI workstream across the internal platforms and built the company's first RAG pipeline, so the assistant answers from the company's own documents.",
        "Shipped the FastAPI services behind the AI assistant and took it from prototype to company-wide use.",
        "Moved internal projects to Kubernetes on GCP with GitHub Actions and Azure DevOps pipelines and SonarQube quality gates.",
        "Implemented SAML 2.0 and Google SSO, and mentored the team through knowledge-transfer sessions.",
      ],
      stack: STACK.valeuriad,
    },
    {
      company: "SNCF Connect",
      logo: sncf,
      title: "Full-Stack Engineer, Python / React",
      context: "consultant via Valeuriad",
      start: "2025-01",
      end: "2025-08",
      highlights: [
        "Delivered Python backends and AWS Lambda microservices for internal operations tooling.",
        "Built the React interfaces those teams work in daily and added the RobotFramework suite that removed the manual regression pass.",
      ],
      stack: STACK.sncf,
    },
    {
      company: "Capgemini",
      logo: capgemini,
      title: "Senior Full-Stack Engineer & DevOps",
      context: "Hermès",
      start: "2022-04",
      end: "2024-09",
      highlights: [
        "Built the AWS Lambda and SNS/SQS/SES pipelines that process notification and order flows asynchronously.",
        "Moved deployments to ArgoCD GitOps and built the Grafana dashboards that caught incidents before customers did.",
        "Connected applications to Okta SSO and ran the technical interviews that decided who joined the team.",
      ],
      stack: STACK.capgemini,
    },
    {
      company: "Wiztivi",
      logo: wiztivi,
      title: "Software Engineer",
      start: "2019-02",
      end: "2022-04",
      highlights: [
        "Delivered set-top-box interfaces shipped to Vodafone, Eutelsat and Telecentro subscribers, tuned for constrained hardware.",
        "Wrote the Python tooling that automated set-top-box detection and debugging for the whole team.",
      ],
      stack: STACK.wiztivi,
    },
    {
      company: "Tisalabs",
      logo: tisalabs,
      title: "Full-Stack & IoT Engineer",
      start: "2017-07",
      end: "2018-12",
      highlights: [
        "Built the Flask REST APIs behind a monitoring application for the European Space Agency and Treemetrics.",
        "Trained TensorFlow models and built a vector-embedding search on Elasticsearch, years before it came off the shelf.",
        "Designed MQTT sensor ingestion and a RabbitMQ messaging prototype.",
      ],
      stack: STACK.tisalabs,
    },
    {
      company: "Freelance",
      title: "Web Developer & Designer",
      context: "Morocco",
      start: "2014-12",
      end: "2017-06",
      highlights: [
        "Ran end-to-end web projects for educational associations and local businesses: requirements, database design, data migration, deployment and client training.",
      ],
      stack: STACK.freelance,
    },
  ],
  workTitle: "Open source & personal work",
  workIntro: "Things I build and maintain outside client work, on infrastructure I run myself.",
  projects: [
    {
      name: "mdns-listener-advanced",
      url: "https://github.com/aminekun90/mdns_listener_advanced",
      summary: "Zero-config mDNS / Zeroconf discovery and publishing of .local hostnames, now on its fourth major version.",
      stack: ["TypeScript", "npm"],
    },
    {
      name: "ngx-toast · react-toast",
      url: "https://github.com/aminekun90/ngx-toast",
      summary: "One notification library shipped as two framework-native builds: zoneless-ready for Angular, hook-based for React.",
      stack: ["TypeScript", "Angular", "React"],
    },
    {
      name: "advanced-color-utils",
      url: "https://github.com/aminekun90/advanced-color-utils",
      summary: "Colour manipulation and accessibility toolkit.",
      stack: ["TypeScript", "Vitest"],
    },
    {
      name: "Prayer times platform",
      summary:
        "FastAPI and PostgreSQL backend with solar-position astronomy implemented from scratch, a React client generated from its OpenAPI schema, shipped as a Helm chart on my own Kubernetes cluster.",
      stack: ["Python", "FastAPI", "PostgreSQL", "React", "Helm", "k3s"],
    },
    {
      name: "iOS & watchOS app",
      summary:
        "Offline Qibla compass, prayer times and Quran reader: iPhone app, widgets and an Apple Watch companion, in Swift 6 and SwiftUI.",
      stack: ["Swift", "SwiftUI", "SwiftData", "WidgetKit"],
    },
    {
      name: "canvas-floor-maps",
      url: "https://github.com/aminekun90/canvas-floor-maps",
      summary: "Canvas-based floor plan rendering library.",
      stack: ["TypeScript"],
    },
  ],
  skillsTitle: "Skills",
  skills: [
    { label: "Backend", items: "Python, FastAPI, SQLAlchemy, Pydantic, Pytest, Node.js, NestJS, Java (Spring Boot, Quarkus)" },
    { label: "AI / LLM", items: "RAG pipelines, vector search, MCP servers, LangGraph multi-agent workflows, hosted and self-hosted models" },
    { label: "Frontend", items: "TypeScript, React, Angular, Material UI, Vite, Nx monorepos" },
    { label: "Messaging", items: "RabbitMQ, Temporal, AWS SQS / SNS, MQTT, event-driven architectures" },
    { label: "Data", items: "PostgreSQL, SQL Server, MySQL, MongoDB, DynamoDB, ETL" },
    { label: "Security", items: "SAML 2.0, Okta, PingID, OAuth 2.0 / OIDC, JWT, RBAC" },
    { label: "DevOps", items: "Kubernetes, Helm, ArgoCD, Docker, Terraform, GitHub Actions, GitLab CI, Azure DevOps, AWS, GCP" },
    { label: "Practices", items: "Hexagonal architecture, domain-driven design, tests first, code review, mentoring" },
  ],
  educationTitle: "Education",
  education: [
    { school: "EHEIO, Oujda", logo: eheio, degree: "Master's degree in Computer Engineering", years: "2012 – 2017" },
    { school: "Université Jean Monnet, Saint-Étienne", logo: ujm, degree: "Bachelor in Mathematics & Computer Science", years: "2008 – 2012" },
  ],
  languagesTitle: "Languages",
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "C2" },
    { name: "Arabic", level: "Native" },
    { name: "Tamazight", level: "Native" },
    { name: "German", level: "A1" },
    { name: "Dutch", level: "A0 · learning" },
  ],
  teachingTitle: "Teaching",
  teaching: "Volunteer Java tutoring for students during the pandemic.",
  contactTitle: "Let's talk",
  contactText: "Open to senior engineering roles, on site or remote, and open to relocate.",
};

const fr: Content = {
  meta: { label: "Français", present: "Aujourd'hui", years: "ans" },
  hero: {
    title: "Ingénieur full-stack & IA senior",
    location: "Lille, France · ouvert à la mobilité",
    summary:
      "Je construis des backends de production et des plateformes full-stack en Python et TypeScript, et je les fais tourner sur Kubernetes. Depuis 2024, je pilote la livraison d'IA appliquée : pipelines RAG, serveurs MCP et outillage d'agents qui ont fait passer des assistants internes du prototype à l'outil utilisé chaque jour.",
    cta: "Me contacter",
  },
  nav: { experience: "Expérience", work: "Open source", skills: "Compétences", about: "Parcours" },
  clientsTitle: "Clients",
  experienceTitle: "Expérience",
  roles: [
    {
      ...en.roles[0],
      title: "Ingénieur full-stack & IA senior",
      highlights: [
        "Refonte des services historiques en microservices pilotés par RabbitMQ, avec Temporal pour les flux longs : chaque domaine produit se livre seul.",
        "Mise en place des serveurs MCP et des règles d'agents que l'équipe utilise au quotidien, pour une première revue automatique de chaque pull request.",
        "Un centre de contrôle macOS natif et une CLI JSON sur le même moteur sécurisé : développeurs et agents IA pilotent l'environnement par les mêmes opérations.",
        "Audit des coûts d'outillage IA de l'équipe : le coût des longues investigations divisé par deux en changeant la conduite des sessions.",
      ],
    },
    {
      ...en.roles[1],
      title: "Lead full-stack, IA & DevOps",
      highlights: [
        "Pilotage du chantier Python et IA des plateformes internes, et premier pipeline RAG de l'entreprise : l'assistant répond à partir des documents de l'entreprise.",
        "Services FastAPI derrière l'assistant IA, du prototype à un usage dans toute l'entreprise.",
        "Migration des projets internes vers Kubernetes sur GCP, pipelines GitHub Actions et Azure DevOps, contrôles qualité SonarQube.",
        "SSO SAML 2.0 et Google, et transmission de connaissances à l'équipe.",
      ],
    },
    {
      ...en.roles[2],
      title: "Ingénieur full-stack, Python / React",
      context: "consultant via Valeuriad",
      highlights: [
        "Backends Python et microservices AWS Lambda pour l'outillage des opérations internes.",
        "Interfaces React utilisées au quotidien, et suite RobotFramework qui a supprimé la recette manuelle.",
      ],
    },
    {
      ...en.roles[3],
      title: "Ingénieur full-stack & DevOps senior",
      highlights: [
        "Pipelines AWS Lambda et SNS/SQS/SES qui traitent notifications et commandes de façon asynchrone.",
        "Passage des déploiements en GitOps avec ArgoCD, et tableaux Grafana qui détectaient les incidents avant les clients.",
        "Raccordement des applications à Okta SSO, et entretiens techniques de recrutement de l'équipe.",
      ],
    },
    {
      ...en.roles[4],
      title: "Ingénieur logiciel",
      highlights: [
        "Interfaces de décodeurs livrées aux abonnés de Vodafone, Eutelsat et Telecentro, optimisées pour du matériel contraint.",
        "Outillage Python qui a automatisé la détection et le débogage des décodeurs pour toute l'équipe.",
      ],
    },
    {
      ...en.roles[5],
      title: "Ingénieur full-stack & IoT",
      highlights: [
        "API REST Flask d'une application de supervision pour l'Agence spatiale européenne et pour Treemetrics.",
        "Modèles TensorFlow et recherche vectorielle sur Elasticsearch, des années avant les outils du marché.",
        "Ingestion MQTT des capteurs et prototype de messagerie sur RabbitMQ.",
      ],
    },
    {
      ...en.roles[6],
      company: "Indépendant",
      title: "Développeur web & designer",
      context: "Maroc",
      highlights: [
        "Projets web de bout en bout pour des associations éducatives et des commerces : besoin, modèle de données, migration, déploiement et formation.",
      ],
    },
  ],
  workTitle: "Open source & projets personnels",
  workIntro: "Ce que je construis et maintiens en dehors des missions, sur une infrastructure que j'opère moi-même.",
  projects: [
    { ...en.projects[0], summary: "Découverte et publication mDNS / Zeroconf des noms .local, sans configuration — quatrième version majeure." },
    { ...en.projects[1], summary: "Une bibliothèque de notifications livrée en deux versions natives : zoneless pour Angular, à base de hooks pour React." },
    { ...en.projects[2], summary: "Boîte à outils de manipulation des couleurs et d'accessibilité." },
    {
      ...en.projects[3],
      name: "Plateforme d'horaires de prière",
      summary:
        "Backend FastAPI et PostgreSQL avec un calcul astronomique écrit de zéro, client React généré depuis le schéma OpenAPI, livré en chart Helm sur mon propre cluster Kubernetes.",
    },
    {
      ...en.projects[4],
      name: "App iOS & watchOS",
      summary: "Boussole Qibla hors-ligne, horaires de prière et lecteur du Coran : app iPhone, widgets et app Apple Watch, en Swift 6 et SwiftUI.",
    },
    { ...en.projects[5], summary: "Bibliothèque de rendu de plans d'étage sur canvas." },
  ],
  skillsTitle: "Compétences",
  skills: [
    { label: "Backend", items: en.skills[0].items },
    { label: "IA / LLM", items: "Pipelines RAG, recherche vectorielle, serveurs MCP, workflows multi-agents LangGraph, modèles hébergés et auto-hébergés" },
    { label: "Frontend", items: en.skills[2].items },
    { label: "Messagerie", items: "RabbitMQ, Temporal, AWS SQS / SNS, MQTT, architectures événementielles" },
    { label: "Données", items: en.skills[4].items },
    { label: "Sécurité", items: en.skills[5].items },
    { label: "DevOps", items: en.skills[6].items },
    { label: "Pratiques", items: "Architecture hexagonale, DDD, tests d'abord, revue de code, mentorat" },
  ],
  educationTitle: "Formation",
  education: [
    { ...en.education[0], degree: "Master (Bac+5) en génie informatique" },
    { ...en.education[1], degree: "Licence mathématiques & informatique" },
  ],
  languagesTitle: "Langues",
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "C2" },
    { name: "Arabe", level: "Natif" },
    { name: "Tamazight", level: "Natif" },
    { name: "Allemand", level: "A1" },
    { name: "Néerlandais", level: "A0 · en apprentissage" },
  ],
  teachingTitle: "Enseignement",
  teaching: "Tutorat Java bénévole pour des étudiants pendant la pandémie.",
  contactTitle: "Parlons-en",
  contactText: "Ouvert aux postes d'ingénieur senior, sur site ou à distance, et ouvert à la mobilité.",
};

const nl: Content = {
  meta: { label: "Nederlands", present: "Heden", years: "jaar" },
  hero: {
    title: "Senior Full-Stack & AI Engineer",
    location: "Lille, Frankrijk · open voor verhuizing",
    summary:
      "Ik bouw productiebackends en full-stackplatforms in Python en TypeScript, en draai ze op Kubernetes. Sinds 2024 leid ik de oplevering van toegepaste AI: RAG-pipelines, MCP-servers en agenttooling die interne assistenten van prototype tot dagelijks gebruikt hulpmiddel hebben gebracht.",
    cta: "Neem contact op",
  },
  nav: { experience: "Ervaring", work: "Open source", skills: "Vaardigheden", about: "Achtergrond" },
  clientsTitle: "Opdrachtgevers",
  experienceTitle: "Ervaring",
  roles: [
    {
      ...en.roles[0],
      highlights: [
        "Legacyservices herbouwd als RabbitMQ-gestuurde microservices, met Temporal voor langlopende processen: productdomeinen worden nu onafhankelijk uitgerold.",
        "De MCP-servers en agentregels opgezet die het team dagelijks gebruikt, zodat elke pull request een automatische eerste review krijgt.",
        "Een native macOS-controlecentrum en een headless JSON-CLI gebouwd op dezelfde beveiligde engine: ontwikkelaars en AI-agents bedienen de ontwikkelomgeving via identieke operaties.",
        "De AI-toolingkosten van het team geanalyseerd en de kosten van lange onderzoeken gehalveerd door de manier van werken met sessies te veranderen.",
      ],
    },
    {
      ...en.roles[1],
      highlights: [
        "De Python- en AI-stroom van de interne platforms geleid en de eerste RAG-pipeline van het bedrijf gebouwd: de assistent antwoordt op basis van de eigen documenten van het bedrijf.",
        "De FastAPI-services achter de AI-assistent opgeleverd en die van prototype naar bedrijfsbreed gebruik gebracht.",
        "Interne projecten gemigreerd naar Kubernetes op GCP, met GitHub Actions- en Azure DevOps-pipelines en SonarQube-kwaliteitspoorten.",
        "SAML 2.0- en Google-SSO geïmplementeerd en het team begeleid met kennisoverdrachtsessies.",
      ],
    },
    {
      ...en.roles[2],
      context: "consultant via Valeuriad",
      highlights: [
        "Python-backends en AWS Lambda-microservices opgeleverd voor interne operationele tooling.",
        "De React-interfaces gebouwd waarmee die teams dagelijks werken, plus de RobotFramework-suite die de handmatige regressietest overbodig maakte.",
      ],
    },
    {
      ...en.roles[3],
      highlights: [
        "AWS Lambda- en SNS/SQS/SES-pipelines gebouwd die notificaties en bestellingen asynchroon verwerken.",
        "Deployments overgezet naar ArgoCD GitOps en Grafana-dashboards gebouwd die incidenten opvingen voordat klanten ze merkten.",
        "Applicaties gekoppeld aan Okta SSO en de technische interviews gevoerd die bepaalden wie bij het team kwam.",
      ],
    },
    {
      ...en.roles[4],
      highlights: [
        "Set-top-boxinterfaces opgeleverd voor abonnees van Vodafone, Eutelsat en Telecentro, geoptimaliseerd voor beperkte hardware.",
        "Python-tooling geschreven die detectie en debugging van set-top-boxen voor het hele team automatiseerde.",
      ],
    },
    {
      ...en.roles[5],
      highlights: [
        "De Flask REST-API's gebouwd achter een monitoringapplicatie voor de European Space Agency en voor Treemetrics.",
        "TensorFlow-modellen getraind en vectorzoeken op Elasticsearch gebouwd, jaren voordat het kant-en-klaar beschikbaar was.",
        "MQTT-ingestie van sensordata en een RabbitMQ-berichtenprototype ontworpen.",
      ],
    },
    {
      ...en.roles[6],
      company: "Freelance",
      title: "Webontwikkelaar & designer",
      context: "Marokko",
      highlights: [
        "Webprojecten van begin tot eind voor onderwijsverenigingen en lokale bedrijven: analyse, datamodel, datamigratie, deployment en training.",
      ],
    },
  ],
  workTitle: "Open source & eigen projecten",
  workIntro: "Wat ik naast klantwerk bouw en onderhoud, op infrastructuur die ik zelf beheer.",
  projects: [
    { ...en.projects[0], summary: "Zero-config mDNS / Zeroconf-discovery en publicatie van .local-hostnamen, inmiddels aan de vierde major versie." },
    { ...en.projects[1], summary: "Eén notificatiebibliotheek in twee framework-native builds: zoneless-ready voor Angular, hook-gebaseerd voor React." },
    { ...en.projects[2], summary: "Toolkit voor kleurbewerking en toegankelijkheid." },
    {
      ...en.projects[3],
      name: "Gebedstijdenplatform",
      summary:
        "FastAPI- en PostgreSQL-backend met zelf geschreven zonnestandberekeningen, een React-client gegenereerd uit het OpenAPI-schema, uitgerold als Helm-chart op mijn eigen Kubernetes-cluster.",
    },
    {
      ...en.projects[4],
      name: "iOS- & watchOS-app",
      summary: "Offline Qibla-kompas, gebedstijden en Koranlezer: iPhone-app, widgets en een Apple Watch-app, in Swift 6 en SwiftUI.",
    },
    { ...en.projects[5], summary: "Bibliotheek voor het renderen van plattegronden op canvas." },
  ],
  skillsTitle: "Vaardigheden",
  skills: [
    { label: "Backend", items: en.skills[0].items },
    { label: "AI / LLM", items: "RAG-pipelines, vectorzoeken, MCP-servers, multi-agentworkflows met LangGraph, gehoste en zelf gehoste modellen" },
    { label: "Frontend", items: en.skills[2].items },
    { label: "Messaging", items: "RabbitMQ, Temporal, AWS SQS / SNS, MQTT, event-driven architecturen" },
    { label: "Data", items: en.skills[4].items },
    { label: "Beveiliging", items: en.skills[5].items },
    { label: "DevOps", items: en.skills[6].items },
    { label: "Werkwijze", items: "Hexagonale architectuur, domain-driven design, tests eerst, code review, mentoring" },
  ],
  educationTitle: "Opleiding",
  education: [
    { ...en.education[0], degree: "Master in Computer Engineering" },
    { ...en.education[1], degree: "Bachelor Wiskunde & Informatica" },
  ],
  languagesTitle: "Talen",
  languages: [
    { name: "Frans", level: "Moedertaal" },
    { name: "Engels", level: "C2" },
    { name: "Arabisch", level: "Moedertaal" },
    { name: "Tamazight", level: "Moedertaal" },
    { name: "Duits", level: "A1" },
    { name: "Nederlands", level: "A0 · aan het leren" },
  ],
  teachingTitle: "Lesgeven",
  teaching: "Vrijwillige Java-bijles voor studenten tijdens de pandemie.",
  contactTitle: "Laten we praten",
  contactText: "Open voor senior engineeringrollen, op locatie of op afstand, en open voor verhuizing.",
};

export const CONTENT: Record<Locale, Content> = { en, nl, fr };
