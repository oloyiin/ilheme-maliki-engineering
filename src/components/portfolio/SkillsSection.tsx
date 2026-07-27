import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Cpu, Database, Radio, Workflow } from "lucide-react";

const skillGroups = [
  { key: "telecom", items: ["SIP", "VoIP", "Asterisk", "SIPp", "Telecom Monitoring"], icon: Radio },
  { key: "systems", items: ["Linux", "Windows Infrastructure", "System Administration", "Networking Fundamentals"], icon: Cpu },
  { key: "devops", items: ["Git", "GitLab CI/CD", "FastAPI", "Automation"], icon: Workflow },
  { key: "programming", items: ["Python", "Java", "SQL", "Bash", "React"], icon: Workflow },
  { key: "data", items: ["Power BI", "Power Apps", "Dataverse", "SharePoint", "Dashboards"], icon: Database },
];

const SkillsSection = () => {
  const { t } = useLang();

  return (
    <AnimatedSection id="skills" className="py-24 bg-surface">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            Core Stack
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-3">{t("skills.title")}</h2>
          <p className="text-sm text-muted-foreground leading-7">{t("skills.desc")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              className="rounded-[1.5rem] border border-border/80 bg-white/80 p-5 shadow-[0_14px_34px_rgba(33,40,48,0.06)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-2xl bg-accent/10 p-2.5 border border-accent/20">
                  <group.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{t(`skills.${group.key}`)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium border border-border bg-secondary/40 text-muted-foreground px-3 py-1.5 rounded-full hover:border-accent/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
