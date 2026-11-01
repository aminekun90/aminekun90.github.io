import capgemini from "./assets/capgemini.svg";
import eheio from "./assets/eheio.png";
import infogene from "./assets/infogene.png";
import sncf from "./assets/sncf.svg";
import tisalabs from "./assets/tisalabs.png";
import ujm from "./assets/ujm.png";
import valeuriad from "./assets/valeuriad.svg";
import wiztivi from "./assets/wiztivi.png";

export const LOCALES = ["en", "nl", "de", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export interface Role {
  company: string;
  logo?: string;
  // The official logo has a white wordmark, so it needs a dark tile.
  darkLogo?: boolean;
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
  cv: { button: string; title: string; download: string; close: string; loading: string; error: string; profile: string };
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
  valeuriad: ["Python", "FastAPI", "SQLAlchemy", "Pytest", "Java", "Quarkus", "RAG", "MCP", "Angular", "Kubernetes", "GCP", "Azure DevOps"],
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
      "I build production backends and full-stack platforms in Python, TypeScript and Java, and I run them on Kubernetes. Since 2024 I have led applied-AI delivery: RAG pipelines, MCP servers and agent tooling that moved internal assistants from prototypes to tools teams use every day.",
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
      darkLogo: true,
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
  cv: { button: "Résumé (PDF)", title: "Résumé", download: "Download PDF", close: "Close", loading: "Generating the PDF…", error: "The PDF could not be generated. Please try again.", profile: "Profile" },
};

const fr: Content = {
  meta: { label: "Français", present: "Aujourd'hui", years: "ans" },
  hero: {
    title: "Ingénieur full-stack & IA senior",
    location: "Lille, France · ouvert à la mobilité",
    summary:
      "Je construis des backends de production et des plateformes full-stack en Python, TypeScript et Java, et je les fais tourner sur Kubernetes. Depuis 2024, je pilote la livraison d'IA appliquée : pipelines RAG, serveurs MCP et outillage d'agents qui ont fait passer des assistants internes du prototype à l'outil utilisé chaque jour.",
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
      company: "Freelance",
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
  cv: { button: "CV (PDF)", title: "CV", download: "Télécharger le PDF", close: "Fermer", loading: "Génération du PDF…", error: "Le PDF n'a pas pu être généré. Réessayez.", profile: "Profil" },
};

const nl: Content = {
  meta: { label: "Nederlands", present: "Heden", years: "jaar" },
  hero: {
    title: "Senior Full-Stack & AI Engineer",
    location: "Lille, Frankrijk · open voor verhuizing",
    summary:
      "Ik bouw productiebackends en full-stackplatforms in Python, TypeScript en Java, en draai ze op Kubernetes. Sinds 2024 leid ik de oplevering van toegepaste AI: RAG-pipelines, MCP-servers en agenttooling die interne assistenten van prototype tot dagelijks gebruikt hulpmiddel hebben gebracht.",
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
  cv: { button: "Cv (PDF)", title: "Cv", download: "PDF downloaden", close: "Sluiten", loading: "PDF wordt gemaakt…", error: "De PDF kon niet worden gemaakt. Probeer het opnieuw.", profile: "Profiel" },
};

const de: Content = {
  meta: { label: "Deutsch", present: "Heute", years: "Jahre" },
  hero: {
    title: "Senior Full-Stack & AI Engineer",
    location: "Lille, Frankreich · umzugsbereit",
    summary:
      "Ich entwickle Produktions-Backends und Full-Stack-Plattformen in Python, TypeScript und Java und betreibe sie auf Kubernetes. Seit 2024 leite ich die Umsetzung angewandter KI: RAG-Pipelines, MCP-Server und Agenten-Tooling, die interne Assistenten vom Prototyp zum täglich genutzten Werkzeug gemacht haben.",
    cta: "Kontakt aufnehmen",
  },
  nav: { experience: "Erfahrung", work: "Open Source", skills: "Kenntnisse", about: "Werdegang" },
  clientsTitle: "Projekte für",
  experienceTitle: "Berufserfahrung",
  roles: [
    {
      ...en.roles[0],
      highlights: [
        "Altsysteme als RabbitMQ-gesteuerte Microservices neu aufgebaut, mit Temporal für langlaufende Abläufe: Produktdomänen werden jetzt unabhängig ausgeliefert.",
        "Die MCP-Server und Agentenregeln eingeführt, die das Team täglich nutzt, sodass jeder Pull Request ein automatisches erstes Review erhält.",
        "Ein natives macOS-Kontrollzentrum und eine Headless-JSON-CLI auf derselben abgesicherten Engine gebaut: Entwickler und KI-Agenten steuern die Entwicklungsumgebung über identische Operationen.",
        "Die KI-Tooling-Kosten des Teams analysiert und die Kosten langer Untersuchungen durch eine andere Sitzungsführung halbiert.",
      ],
    },
    {
      ...en.roles[1],
      highlights: [
        "Den Python- und KI-Bereich der internen Plattformen geleitet und die erste RAG-Pipeline des Unternehmens gebaut: Der Assistent antwortet aus den eigenen Dokumenten des Unternehmens.",
        "Die FastAPI-Services hinter dem KI-Assistenten ausgeliefert und ihn vom Prototyp zum unternehmensweiten Einsatz gebracht.",
        "Interne Projekte auf Kubernetes in GCP migriert, mit GitHub-Actions- und Azure-DevOps-Pipelines und SonarQube-Quality-Gates.",
        "SAML-2.0- und Google-SSO umgesetzt und das Team in Wissenstransfer-Sessions begleitet.",
      ],
    },
    {
      ...en.roles[2],
      context: "Berater über Valeuriad",
      highlights: [
        "Python-Backends und AWS-Lambda-Microservices für interne Betriebswerkzeuge ausgeliefert.",
        "Die React-Oberflächen gebaut, mit denen diese Teams täglich arbeiten, sowie die RobotFramework-Suite, die den manuellen Regressionstest ersetzt hat.",
      ],
    },
    {
      ...en.roles[3],
      highlights: [
        "AWS-Lambda- und SNS/SQS/SES-Pipelines gebaut, die Benachrichtigungen und Bestellungen asynchron verarbeiten.",
        "Deployments auf ArgoCD-GitOps umgestellt und Grafana-Dashboards gebaut, die Vorfälle erkannten, bevor Kunden sie bemerkten.",
        "Anwendungen an Okta-SSO angebunden und die technischen Interviews geführt, die über neue Teammitglieder entschieden.",
      ],
    },
    {
      ...en.roles[4],
      highlights: [
        "Set-Top-Box-Oberflächen für Abonnenten von Vodafone, Eutelsat und Telecentro ausgeliefert, optimiert für eingeschränkte Hardware.",
        "Python-Tooling geschrieben, das Erkennung und Debugging von Set-Top-Boxen für das ganze Team automatisiert hat.",
      ],
    },
    {
      ...en.roles[5],
      highlights: [
        "Die Flask-REST-APIs hinter einer Überwachungsanwendung für die Europäische Weltraumorganisation und für Treemetrics gebaut.",
        "TensorFlow-Modelle trainiert und eine Vektorsuche auf Elasticsearch gebaut, Jahre bevor es so etwas fertig zu kaufen gab.",
        "MQTT-Erfassung von Sensordaten und einen RabbitMQ-Messaging-Prototyp entworfen.",
      ],
    },
    {
      ...en.roles[6],
      title: "Webentwickler & Designer",
      context: "Marokko",
      highlights: [
        "Webprojekte von Anfang bis Ende für Bildungsvereine und lokale Unternehmen: Anforderungen, Datenmodell, Datenmigration, Deployment und Schulung.",
      ],
    },
  ],
  workTitle: "Open Source & eigene Projekte",
  workIntro: "Was ich neben Kundenprojekten baue und pflege, auf Infrastruktur, die ich selbst betreibe.",
  projects: [
    { ...en.projects[0], summary: "Konfigurationsfreie mDNS-/Zeroconf-Erkennung und Veröffentlichung von .local-Hostnamen, inzwischen in der vierten Hauptversion." },
    { ...en.projects[1], summary: "Eine Benachrichtigungsbibliothek in zwei frameworknativen Builds: zoneless-ready für Angular, hook-basiert für React." },
    { ...en.projects[2], summary: "Toolkit für Farbmanipulation und Barrierefreiheit." },
    {
      ...en.projects[3],
      name: "Gebetszeiten-Plattform",
      summary:
        "FastAPI- und PostgreSQL-Backend mit selbst implementierter Sonnenstandsberechnung, ein aus dem OpenAPI-Schema generierter React-Client, ausgeliefert als Helm-Chart auf meinem eigenen Kubernetes-Cluster.",
    },
    {
      ...en.projects[4],
      name: "iOS- & watchOS-App",
      summary: "Offline-Qibla-Kompass, Gebetszeiten und Koran-Reader: iPhone-App, Widgets und eine Apple-Watch-App, in Swift 6 und SwiftUI.",
    },
    { ...en.projects[5], summary: "Bibliothek zum Rendern von Grundrissen auf Canvas." },
  ],
  skillsTitle: "Kenntnisse",
  skills: [
    { label: "Backend", items: en.skills[0].items },
    { label: "KI / LLM", items: "RAG-Pipelines, Vektorsuche, MCP-Server, Multi-Agenten-Workflows mit LangGraph, gehostete und selbst betriebene Modelle" },
    { label: "Frontend", items: en.skills[2].items },
    { label: "Messaging", items: "RabbitMQ, Temporal, AWS SQS / SNS, MQTT, ereignisgesteuerte Architekturen" },
    { label: "Daten", items: en.skills[4].items },
    { label: "Sicherheit", items: en.skills[5].items },
    { label: "DevOps", items: en.skills[6].items },
    { label: "Arbeitsweise", items: "Hexagonale Architektur, Domain-Driven Design, Tests zuerst, Code-Reviews, Mentoring" },
  ],
  educationTitle: "Ausbildung",
  education: [
    { ...en.education[0], degree: "Master in Informatik-Ingenieurwesen" },
    { ...en.education[1], degree: "Bachelor in Mathematik & Informatik" },
  ],
  languagesTitle: "Sprachen",
  languages: [
    { name: "Französisch", level: "Muttersprache" },
    { name: "Englisch", level: "C2" },
    { name: "Arabisch", level: "Muttersprache" },
    { name: "Tamazight", level: "Muttersprache" },
    { name: "Deutsch", level: "A1" },
    { name: "Niederländisch", level: "A0 · am Lernen" },
  ],
  teachingTitle: "Lehre",
  teaching: "Ehrenamtliche Java-Nachhilfe für Studierende während der Pandemie.",
  contactTitle: "Sprechen wir",
  contactText: "Offen für Senior-Engineering-Rollen, vor Ort oder remote, und umzugsbereit.",
  cv: { button: "Lebenslauf (PDF)", title: "Lebenslauf", download: "PDF herunterladen", close: "Schließen", loading: "PDF wird erstellt…", error: "Das PDF konnte nicht erstellt werden. Bitte erneut versuchen.", profile: "Profil" },
};

export const CONTENT: Record<Locale, Content> = { en, nl, de, fr };
