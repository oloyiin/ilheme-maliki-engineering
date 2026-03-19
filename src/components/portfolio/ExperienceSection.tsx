import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LangKey = "fr" | "en";

type Experience = {
  id: string;
  company: string;
  role: Record<LangKey, string>;
  shortDescription: Record<LangKey, string>;
  period: Record<LangKey, string>;
  technologies: string[];
  context: Record<LangKey, string>;
  details: Record<LangKey, string>;
  responsibilities: Record<LangKey, string[]>;
};

const ExperienceSection = () => {
  const { t, lang } = useLang();
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      id: "bpce",
      company: "BPCE IT",
      role: {
        fr: "Ingénieure Télécommunications & Systèmes (Équipes TPR & MDM)",
        en: "Telecommunications & Systems Engineer (TPR & MDM Teams)",
      },
      shortDescription: {
        fr: "Alternance au sein de l'infrastructure IT d'un grand groupe bancaire, autour des systèmes télécom, du monitoring et du pilotage des données opérationnelles.",
        en: "Apprenticeship within a major banking IT infrastructure environment, focused on telecom systems, monitoring, and operational data tooling.",
      },
      period: {
        fr: "MDM : juin 2024 - janv. 2026 · TPR : janv. 2026 - sept. 2026",
        en: "MDM: June 2024 - Jan 2026 · TPR: Jan 2026 - Sept 2026",
      },
      technologies: [
        "SIP",
        "VoIP",
        "SIPp",
        "Monitoring télécom",
        "Power BI",
        "Power Apps",
        "Dataverse",
        "SharePoint",
        "Automatisation",
      ],
      context: {
        fr: "Contexte: alternance transverse entre une équipe orientée monitoring télécom (TPR) et une équipe orientée data & pilotage (MDM).",
        en: "Context: cross-functional apprenticeship between a telecom monitoring team (TPR) and a data/operations steering team (MDM).",
      },
      details: {
        fr: "Missions réparties entre le monitoring des infrastructures télécom et la conception d'une plateforme Power Platform pour le pilotage KPI.",
        en: "Responsibilities split between telecom infrastructure monitoring and the design of a Power Platform data solution for KPI ownership.",
      },
      responsibilities: {
        fr: [
          "Travail sur le monitoring des infrastructures télécom",
          "Développement d'automatisations de tests téléphoniques",
          "Réalisation d'un proof of concept de monitoring télécom",
          "Analyse de flux d'appels et compréhension des environnements VoIP/observabilité",
          "Refonte des tableaux de suivi KPI et analyse des besoins métier",
          "Conception d'une architecture Power Platform",
          "Création de dashboards Power BI et applications Power Apps",
          "Modélisation de données avec Dataverse et intégration SharePoint",
        ],
        en: [
          "Worked on telecom infrastructure monitoring",
          "Automated telecom testing workflows",
          "Built a telecom monitoring proof of concept",
          "Analyzed call flows and VoIP/observability environments",
          "Redesigned KPI tracking dashboards and gathered business needs",
          "Designed a Power Platform architecture",
          "Built Power BI dashboards and Power Apps applications",
          "Modeled data with Dataverse and integrated SharePoint",
        ],
      },
    },
    {
      id: "lx",
      company: "LX Solutions – Vinci Energies",
      role: {
        fr: "Ingénieur Architecture Capteurs & Performance Énergétique - Vinci Energies",
        en: "Sensors Architecture & Energy Performance Engineer - Vinci Energies",
      },
      shortDescription: {
        fr: "Participation à des activités d'ingénierie télécom et réseau dans un environnement d'infrastructures industrielles.",
        en: "Contributed to telecom and network engineering activities in an industrial infrastructure environment.",
      },
      period: {
        fr: "2023 - 2024",
        en: "2023 - 2024",
      },
      technologies: ["Infrastructures réseau", "Systèmes", "Télécommunications"],
      context: {
        fr: "Contexte: alternance orientée découverte terrain des environnements techniques réseau/télécom et des infrastructures industrielles.",
        en: "Context: work-study experience focused on hands-on exposure to network/telecom technical environments and industrial infrastructure.",
      },
      details: {
        fr: "Alternance avec immersion dans les activités techniques liées aux infrastructures, à l'architecture capteurs et au suivi de la performance énergétique, avec un volet support et observation d'architectures systèmes/réseaux.",
        en: "Work-study experience involving infrastructure-related technical activities, sensor architecture and energy performance monitoring, with support tasks and exposure to systems/network architecture.",
      },
      responsibilities: {
        fr: [
          "Découverte d'environnements réseaux et télécom",
          "Participation à des activités techniques d'infrastructure",
          "Support technique",
          "Exposition à des environnements systèmes et réseaux",
        ],
        en: [
          "Discovered telecom and network environments",
          "Contributed to infrastructure-related technical activities",
          "Provided technical support",
          "Gained exposure to systems and network environments",
        ],
      },
    },
    {
      id: "ngtv",
      company: "NGTV EXPERIENCE",
      role: {
        fr: "Stage – Déploiement & Automatisation Systèmes - NGTV EXPERIENCE",
        en: "Internship – Systems Deployment & Automation - NGTV EXPERIENCE",
      },
      shortDescription: {
        fr: "Stage dans un environnement télécom orienté déploiement, automatisation systèmes et montage de matériel.",
        en: "Internship in a telecom environment focused on systems deployment, automation, and hardware assembly.",
      },
      period: {
        fr: "2022 - 2023",
        en: "2022 - 2023",
      },
      technologies: ["Systèmes télécom", "Infrastructures télécom"],
      context: {
        fr: "Contexte: première immersion opérationnelle dans des activités techniques télécom et systèmes avec intervention sur le matériel.",
        en: "Context: first operational immersion in telecom and systems technical activities, including hardware work.",
      },
      details: {
        fr: "Stage d'introduction aux environnements d'exploitation télécom et aux pratiques d'infrastructure, incluant des tâches de déploiement, d'automatisation systèmes et de montage de matériel.",
        en: "Introductory internship in telecom operations and infrastructure practices, including deployment, systems automation, and hardware assembly tasks.",
      },
      responsibilities: {
        fr: [
          "Découverte des infrastructures télécom",
          "Immersion dans un environnement opérationnel télécom",
          "Introduction aux technologies de télécommunications",
          "Montage de matériel",
        ],
        en: [
          "Discovered telecom infrastructures",
          "Immersed in an operational telecom environment",
          "Introduced to telecommunications technologies",
          "Assembled hardware",
        ],
      },
    },
  ];

  const detailsLabel = lang === "fr" ? "Voir les détails" : "View details";
  const techLabel = lang === "fr" ? "Technologies" : "Technologies";
  const responsibilitiesLabel = lang === "fr" ? "Responsabilités" : "Responsibilities";
  const contextLabel = lang === "fr" ? "Contexte projet" : "Project context";
  const missionLabel = lang === "fr" ? "Description complète" : "Full description";

  return (
    <AnimatedSection id="experience" className="py-24 bg-white">
      <div className="container max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground mb-10">{t("exp.title")}</h2>

        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-5">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="relative md:pl-8 border border-border rounded-xl p-5 bg-background hover:border-accent/40 hover:shadow-sm transition-all"
              >
                <span className="hidden md:block absolute left-[0.05rem] top-8 w-4 h-4 rounded-full bg-accent/25 border-4 border-white" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-sm font-semibold text-accent">{exp.company}</p>
                    <h3 className="text-base font-semibold text-foreground">{exp.role[lang]}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period[lang]}</p>
                  </div>
                  <Briefcase className="w-4 h-4 text-accent mt-1 shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.shortDescription[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedExp(exp)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {detailsLabel}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedExp} onOpenChange={(open) => !open && setSelectedExp(null)}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
            {selectedExp && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">{selectedExp.company}</DialogTitle>
                  <DialogDescription>{selectedExp.role[lang]}</DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                  <p className="text-xs text-muted-foreground">{selectedExp.period[lang]}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{missionLabel}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedExp.details[lang]}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{contextLabel}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedExp.context[lang]}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">{responsibilitiesLabel}</h4>
                    <ul className="space-y-2">
                      {selectedExp.responsibilities[lang].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">{techLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
