import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight, AudioWaveform, BarChart3, Blocks, Router, ServerCog } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const { t, lang } = useLang();

  const projects = [
    {
      key: "morning",
      tags: ["React", "FastAPI", "SIP", "KPIs", "CSV/Audio"],
      meta: lang === "fr" ? "Dashboard de supervision" : "Supervision dashboard",
      highlight: lang === "fr" ? "Projet mis en avant" : "Featured project",
      icon: ServerCog,
      span: "md:col-span-2",
      accent: "from-accent/15 via-white to-primary/10",
    },
    {
      key: "cilab",
      tags: ["GitLab CI", "Docker", "Kubernetes", "Helm", "SonarQube"],
      meta: lang === "fr" ? "Laboratoire DevOps" : "DevOps lab",
      icon: Blocks,
      accent: "from-primary/10 via-white to-secondary",
    },
    {
      key: "opslab",
      tags: ["FastAPI", "Docker", "Ansible", "Node Exporter"],
      meta: lang === "fr" ? "Automatisation & supervision" : "Automation & monitoring",
      icon: ServerCog,
      accent: "from-secondary via-white to-accent/10",
    },
    {
      key: "telecom",
      tags: ["SIPp", "VoIP", "Monitoring"],
      meta: lang === "fr" ? "Validation télécom" : "Telecom validation",
      icon: AudioWaveform,
      accent: "from-primary/10 via-white to-secondary",
    },
    {
      key: "gns3",
      github: "https://github.com/oloyiin/gns3",
      tags: ["Python", "IPv6", "OSPFv3", "BGP", "Telnet"],
      meta: lang === "fr" ? "Réseaux & automatisation" : "Networks & automation",
      icon: Router,
      accent: "from-accent/10 via-white to-secondary",
    },
    {
      key: "mdm",
      tags: ["Power BI", "Power Apps", "Dataverse", "SharePoint"],
      meta: lang === "fr" ? "Data & pilotage" : "Data & reporting",
      icon: BarChart3,
      accent: "from-secondary via-white to-accent/10",
    },
    {
      key: "studyflow",
      tags: ["React", "Spring Boot", "Supabase", "OpenAI"],
      github: "https://github.com/oloyiin/learn_ai",
      meta: lang === "fr" ? "Plateforme IA" : "AI platform",
      icon: Blocks,
      accent: "from-accent/10 via-white to-secondary",
    },
  ];

  return (
    <AnimatedSection id="projects" className="py-24">
      <div className="container max-w-5xl">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {t("proj.selected")}
          </p>
          <h2 className="text-3xl font-bold text-foreground">{t("proj.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group rounded-[1.75rem] border border-border/80 bg-gradient-to-br ${p.accent} p-6 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(33,40,48,0.08)] transition-all ${p.span ?? ""}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {p.highlight ?? p.meta}
                  </p>
                  <h3 className="font-semibold text-foreground text-lg">{t(`proj.${p.key}.title`)}</h3>
                  {p.highlight ? (
                    <p className="text-sm text-primary font-medium mt-2">{p.meta}</p>
                  ) : null}
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-2xl border border-border/70 bg-white/80 p-2.5 shadow-sm">
                    <p.icon className="w-4 h-4 text-accent" />
                  </div>
                  {p.github && (
                    <a
                      aria-label={`${lang === "fr" ? "Voir le code de" : "View source for"} ${t(`proj.${p.key}.title`)}`}
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-border/70 bg-white/80 p-2.5 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-7 mb-5 max-w-2xl">
                {t(`proj.${p.key}.desc`)}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-white/85 text-secondary-foreground px-3 py-1.5 rounded-full border border-border/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.key === "morning" ? (
                <div className="grid sm:grid-cols-3 gap-3 mt-5">
                  {[
                    lang === "fr" ? "API FastAPI pour KPI, serveurs et historique" : "FastAPI endpoints for KPIs, servers and history",
                    lang === "fr" ? "Traitement CSV/audio pour les contrôles téléphonie" : "CSV and audio processing for telephony checks",
                    lang === "fr" ? "Dashboard React avec retest et visibilité opérationnelle" : "React dashboard with retest workflows and operational visibility",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-border/70 bg-white/70 px-4 py-3 text-xs text-muted-foreground leading-6">
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
