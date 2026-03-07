import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const { t } = useLang();

  const projects = [
    { key: "telecom", tags: ["SIPp", "VoIP", "Monitoring"] },
    { key: "mdm", tags: ["Power BI", "Power Apps", "Dataverse", "SharePoint"] },
    { key: "studyflow", tags: ["AI", "Microservices", "CI/CD"], github: "https://github.com/oloyiin" },
    { key: "audio", tags: ["Deep Learning", "Python", "Neural Networks"] },
    { key: "cicd", tags: ["Git", "CI/CD", "Automation"], github: "https://github.com/oloyiin" },
  ];

  return (
    <AnimatedSection id="projects" className="py-24">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-10">{t("proj.title")}</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-border rounded-lg p-6 hover:border-accent/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground text-sm">{t(`proj.${p.key}.title`)}</h3>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(`proj.${p.key}.desc`)}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
