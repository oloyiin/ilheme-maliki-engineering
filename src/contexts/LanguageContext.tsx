import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  "cert.title": {"fr":"Badges et formations complémentaires","en":"Badges and additional training"},
  "cert.ccna": {"fr":"CCNA: Introduction to Networks","en":"CCNA: Introduction to Networks"},
  "cert.issuer": {"fr":"Cisco Networking Academy · 18 septembre 2026","en":"Cisco Networking Academy · September 18, 2026"},
  "cert.desc": {"fr":"Formation Introduction to Networks du parcours CCNA, suivie auprès d’ICTGlobal et validée par un badge numérique.","en":"Introduction to Networks course in the CCNA curriculum, completed through ICTGlobal and recognized with a digital badge."},
  "cert.link": {"fr":"Voir mon badge sur Credly","en":"View my badge on Credly"},
  "proj.selected": {"fr":"Sélection de projets","en":"Selected projects"},
  "proj.cilab.title": {"fr":"Laboratoire GitLab CI et Kubernetes","en":"GitLab CI and Kubernetes lab"},
  "proj.cilab.desc": {"fr":"Pipeline de laboratoire : lint Python, tests avec couverture, analyse SonarQube, construction et publication d’une image Docker, puis déploiement Kubernetes via Helm. Le chart inclut un autoscaler et un ServiceMonitor.","en":"Lab pipeline covering Python linting, coverage tests, SonarQube analysis, Docker image build and registry push, then Kubernetes deployment through Helm. The chart includes an autoscaler and a ServiceMonitor."},
  "proj.opslab.title": {"fr":"Ops KPI Lab · déploiement avec Ansible","en":"Ops KPI Lab · Ansible deployment"},
  "proj.opslab.desc": {"fr":"API FastAPI de démonstration exposant un contrôle de santé et des KPI simulés. Conteneurisation Docker et rôles Ansible pour déployer l’application et un agent de supervision, avec des configurations de développement et de production.","en":"Demo FastAPI service exposing a health check and simulated operational KPIs. Docker packaging and Ansible roles deploy the application and a monitoring agent with development and production configurations."},
  "skills.item.TelecomMonitoring": {"en":"Telecom Monitoring","fr":"Supervision télécom"},
  "skills.item.WindowsInfrastructure": {"en":"Windows Infrastructure","fr":"Infrastructure Windows"},
  "skills.item.SystemAdministration": {"en":"System Administration","fr":"Administration systèmes"},
  "skills.item.NetworkingFundamentals": {"en":"Networking Fundamentals","fr":"Fondamentaux des réseaux"},
  "skills.item.Automation": {"en":"Automation","fr":"Automatisation"},
  "skills.item.Dashboards": {"en":"Dashboards","fr":"Tableaux de bord"},
  // Nav
  "nav.about": { en: "About", fr: "À propos" },
  "nav.experience": { en: "Experience", fr: "Expérience" },
  "nav.projects": { en: "Projects", fr: "Projets" },
  "nav.skills": { en: "Skills", fr: "Compétences" },
  "nav.education": { en: "Education", fr: "Formation" },
  "nav.contact": { en: "Contact", fr: "Contact" },

  // Hero
  "hero.title": {
    en: "Telecommunications Engineer | Systems, Network & DevOps",
    fr: "Ingénieure Télécommunications | Systèmes, Réseaux & DevOps",
  },
  "hero.tagline": {
    en: "Engineering graduate specialized in telecommunications, systems and infrastructure, passionate about automation, observability and scalable systems.",
    fr: "Diplômée ingénieure spécialisée en télécommunications, systèmes et infrastructures, passionnée par l'automatisation, l'observabilité et les systèmes scalables.",
  },
  "hero.viewProjects": { en: "View Projects", fr: "Voir les projets" },
  "hero.downloadCV": { en: "Download CV", fr: "Télécharger le CV" },
  "hero.badge": {
    en: "Telecommunications · Systems · DevOps",
    fr: "Télécommunications · Systèmes · DevOps",
  },
  "hero.card1.title": { en: "VoIP & Telecom", fr: "VoIP & Télécom" },
  "hero.card1.desc": {
    en: "SIP, SIPp, observability",
    fr: "SIP, SIPp, observabilité",
  },
  "hero.card2.title": { en: "Automation", fr: "Automatisation" },
  "hero.card2.desc": {
    en: "Power Platform, CI/CD, APIs",
    fr: "Power Platform, CI/CD, APIs",
  },
  "hero.card3.title": { en: "Reliable infra", fr: "Infra fiable" },
  "hero.card3.desc": {
    en: "Systems, monitoring, tooling",
    fr: "Systèmes, supervision, outillage",
  },
  "hero.photo.focus": { en: "Focus", fr: "Focus" },
  "hero.photo.line1": { en: "Telecom systems", fr: "Systèmes télécom" },
  "hero.photo.line2": { en: "& operational tooling", fr: "& outillage opérationnel" },
  "hero.photo.caption": { en: "Engineering Portfolio", fr: "Portfolio d'ingénierie" },
  "hero.photo.status": { en: "Available 2026", fr: "Disponible 2026" },

  // About
  "about.title": { en: "About Me", fr: "À propos" },
  "about.text": {
    en: "I am a telecommunications engineering graduate from INSA Lyon, with hands-on experience in systems, networks, monitoring platforms and automation. Through my apprenticeship within a major banking IT infrastructure environment, I have developed strong expertise in VoIP, observability, and operational tooling. I am driven by the desire to build reliable, automated and scalable infrastructure solutions.",
    fr: "Je suis diplômée ingénieure en télécommunications de l'INSA Lyon, avec une expérience pratique en systèmes, réseaux, plateformes de supervision et automatisation. Au travers de mon alternance dans un environnement d'infrastructure IT bancaire majeur, j'ai développé une solide expertise en VoIP, observabilité et outillage opérationnel. Je suis animée par le désir de construire des solutions d'infrastructure fiables, automatisées et scalables.",
  },
  "about.snapshot": { en: "Profile Snapshot", fr: "Aperçu du profil" },
  "about.headline": { en: "Telecom + Infra", fr: "Télécom + Infra" },
  "about.summary": {
    en: "Clear positioning across systems, networking, monitoring and automation.",
    fr: "Positionnement clair entre systèmes, réseaux, monitoring et automatisation.",
  },
  "about.focus": { en: "Focus", fr: "Focus" },
  "about.focusValue": { en: "Observability", fr: "Observabilité" },
  "about.stack": { en: "Stack", fr: "Stack" },
  "about.stackValue": { en: "VoIP · BI · CI/CD", fr: "VoIP · BI · CI/CD" },

  // Experience
  "exp.title": { en: "Experience", fr: "Expérience" },
  "exp.bpce.title": {
    en: "BPCE IT – Apprentice Telecommunications / Systems Engineer",
    fr: "BPCE IT – Apprentie Ingénieure Télécommunications / Systèmes",
  },
  "exp.bpce.team": { en: "Team: TPR & MDM", fr: "Équipe : TPR & MDM" },
  "exp.bpce.r1": {
    en: "Telephony infrastructure monitoring",
    fr: "Supervision de l'infrastructure téléphonique",
  },
  "exp.bpce.r2": {
    en: "Automation of telecom tests",
    fr: "Automatisation des tests télécoms",
  },
  "exp.bpce.r3": {
    en: "Development of monitoring proof of concepts",
    fr: "Développement de preuves de concept de supervision",
  },
  "exp.bpce.r4": {
    en: "Improving data visibility for operational teams",
    fr: "Amélioration de la visibilité des données pour les équipes opérationnelles",
  },
  "exp.bpce.r5": {
    en: "Working with VoIP environments and observability tools",
    fr: "Travail avec des environnements VoIP et outils d'observabilité",
  },
  "exp.mdm.title": {
    en: "MDM Team – Power Platform Project",
    fr: "Équipe MDM – Projet Power Platform",
  },
  "exp.mdm.desc": {
    en: "Project focused on enabling the team to autonomously manage KPI dashboards and operational insights using Microsoft Power Platform: Power BI dashboards, Power Apps applications, Dataverse data layer, SharePoint integration and internal data platform architecture.",
    fr: "Projet visant à permettre à l'équipe de gérer de manière autonome les tableaux de bord KPI et les insights opérationnels via Microsoft Power Platform : tableaux de bord Power BI, applications Power Apps, couche de données Dataverse, intégration SharePoint et architecture de plateforme de données interne.",
  },
  "exp.lx.title": {
    en: "LX Solutions – Vinci Energies",
    fr: "LX Solutions – Vinci Energies",
  },
  "exp.lx.desc": {
    en: "Technical internship involving telecom and network engineering activities.",
    fr: "Stage technique impliquant des activités d'ingénierie télécom et réseaux.",
  },
  "exp.ngtv.title": { en: "NGTV Experience", fr: "Expérience NGTV" },
  "exp.ngtv.desc": {
    en: "Technical internship focused on telecom technologies and systems environment exposure.",
    fr: "Stage technique axé sur les technologies télécom et l'exposition aux environnements systèmes.",
  },

  // Projects
  "proj.title": { en: "Projects", fr: "Projets" },
  "proj.telecom.title": {
    en: "Telecom Monitoring PoC",
    fr: "PoC Supervision Télécom",
  },
  "proj.telecom.desc": {
    en: "Simulation and monitoring of telecom calls using SIPp and VoIP environments to test infrastructure reliability and automate telecom validation workflows.",
    fr: "Simulation et supervision d'appels télécom via SIPp et environnements VoIP pour tester la fiabilité de l'infrastructure et automatiser les workflows de validation télécom.",
  },
  "proj.gns3.title": {
    en: "GNS3 Cisco Config Generator",
    fr: "Générateur de Config Cisco GNS3",
  },
  "proj.gns3.desc": {
    en: "Python-based generator that turns a JSON intent file into IPv6 Cisco router configurations with RIPng, OSPFv3, iBGP/eBGP policies and optional Telnet deployment.",
    fr: "Générateur Python qui transforme un fichier d'intention JSON en configurations Cisco IPv6 avec RIPng, OSPFv3, politiques iBGP/eBGP et déploiement optionnel via Telnet.",
  },
  "proj.mdm.title": {
    en: "MDM Power Platform Data Platform",
    fr: "Plateforme de Données MDM Power Platform",
  },
  "proj.mdm.desc": {
    en: "Internal platform built with Power BI, Power Apps, Dataverse and SharePoint to enable KPI monitoring and data accessibility for operational teams.",
    fr: "Plateforme interne construite avec Power BI, Power Apps, Dataverse et SharePoint pour permettre le suivi des KPI et l'accessibilité des données pour les équipes opérationnelles.",
  },
  "proj.morning.title": {
    en: "Morning Check Telephony Dashboard",
    fr: "Dashboard Téléphonie Morning Check",
  },
  "proj.morning.desc": {
    en: "End-to-end supervision dashboard for TPR telephony checks, combining a React frontend, FastAPI backend, KPI APIs, retest workflows, and CSV/audio processing for operational visibility.",
    fr: "Dashboard de supervision bout en bout pour les contrôles téléphonie TPR, combinant frontend React, backend FastAPI, API de KPI, workflows de retest et traitement CSV/audio pour améliorer la visibilité opérationnelle.",
  },
  "proj.studyflow.title": {
    en: "StudyFlow AI Platform",
    fr: "Plateforme IA StudyFlow",
  },
  "proj.studyflow.desc": {
    en: "AI-assisted study platform using a microservices architecture with CI/CD pipeline and backend integration.",
    fr: "Plateforme d'étude assistée par IA utilisant une architecture microservices avec pipeline CI/CD et intégration backend.",
  },

  // Skills
  "skills.title": { en: "Skills", fr: "Compétences" },
  "skills.desc": {
    en: "A technical profile built around telecom reliability, operational tooling and data visibility.",
    fr: "Un profil technique construit autour de la fiabilité télécom, de l'outillage opérationnel et de la visibilité des données.",
  },
  "skills.telecom": {
    en: "Telecommunications & Networking",
    fr: "Télécommunications & Réseaux",
  },
  "skills.systems": {
    en: "Systems & Infrastructure",
    fr: "Systèmes & Infrastructure",
  },
  "skills.devops": { en: "DevOps & Tools", fr: "DevOps & Outils" },
  "skills.programming": { en: "Programming", fr: "Programmation" },
  "skills.data": { en: "Data & BI", fr: "Data & BI" },

  // Education
  "edu.title": { en: "Education", fr: "Formation" },
  "edu.insa.title": { en: "INSA Lyon", fr: "INSA Lyon" },
  "edu.insa.degree": {
    en: "Engineering Degree – Telecommunications Services and Usages",
    fr: "Diplôme d'Ingénieur – Télécommunications, Services et Usages",
  },
  "edu.insa.desc": {
    en: "Specialization in telecom systems, data platforms and network technologies. Comprehensive training in signal processing, network architecture, systems administration and software engineering.",
    fr: "Spécialisation en systèmes télécom, plateformes de données et technologies réseau. Formation complète en traitement du signal, architecture réseau, administration systèmes et génie logiciel.",
  },
  "edu.insa.dates": { en: "2023 - 2026", fr: "2023 - 2026" },
  "edu.trinity.title": {
    en: "Trinity College Dublin – School of Engineering",
    fr: "Trinity College Dublin – School of Engineering",
  },
  "edu.trinity.degree": {
    en: "Exchange Semester",
    fr: "Semestre d'échange",
  },
  "edu.trinity.desc": {
    en: "International exchange semester at Trinity College Dublin within the School of Engineering and Computer Science. Coursework includes advanced software engineering, computational methods, machine learning and modern distributed systems.",
    fr: "Semestre d'échange international au Trinity College Dublin au sein de la School of Engineering and Computer Science. Cursus incluant ingénierie logicielle avancée, méthodes de calcul, machine learning et systèmes distribués modernes.",
  },
  "edu.trinity.dates": { en: "2025 - 2026", fr: "2025 - 2026" },
  "edu.iut.title": {
    en: "IUT Lyon 1 – Université Claude Bernard Lyon 1",
    fr: "IUT Lyon 1 – Université Claude Bernard Lyon 1",
  },
  "edu.iut.degree": { en: "DUT Informatique", fr: "DUT Informatique" },
  "edu.iut.desc": {
    en: "Two-year university degree focused on computer science fundamentals including programming, algorithms, databases, software engineering and systems architecture.",
    fr: "Diplôme universitaire en deux ans axé sur les fondamentaux de l'informatique : programmation, algorithmes, bases de données, ingénierie logicielle et architecture systèmes.",
  },
  "edu.iut.dates": { en: "2021 - 2023", fr: "2021 - 2023" },
  "edu.website": { en: "Official website", fr: "Site officiel" },

  // Contact
  "contact.title": { en: "Contact", fr: "Contact" },
  "contact.badge": { en: "Open to opportunities", fr: "Ouverte aux opportunités" },
  "contact.name": { en: "Name", fr: "Nom" },
  "contact.email": { en: "Email", fr: "Email" },
  "contact.message": { en: "Message", fr: "Message" },
  "contact.send": { en: "Send Message", fr: "Envoyer" },
  "contact.getInTouch": { en: "Get in Touch", fr: "Me contacter" },
  "contact.response": {
    en: "Production Engineer · DevOps · SRE",
    fr: "Ingénieure de production · DevOps · SRE",
  },
  "contact.desc": {
    en: "Feel free to reach out for collaboration, opportunities or just to connect.",
    fr: "N'hésitez pas à me contacter pour une collaboration, des opportunités ou simplement pour échanger.",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    fr: "Tous droits réservés.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
