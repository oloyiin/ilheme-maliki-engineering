import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Cpu, Database, Radio, Workflow } from "lucide-react";

const skillGroups = [
  { key: "telecom", items: ["SIP", "VoIP", "Asterisk", "SIPp", "skills.item.TelecomMonitoring"], icon: Radio },
  { key: "systems", items: ["Linux", "skills.item.WindowsInfrastructure", "skills.item.SystemAdministration", "skills.item.NetworkingFundamentals"], icon: Cpu },
  { key: "devops", items: ["Git", "GitLab CI/CD", "FastAPI", "skills.item.Automation"], icon: Workflow },
  { key: "programming", items: ["Python", "Java", "SQL", "Bash", "React"], icon: Workflow },
  { key: "data", items: ["Power BI", "Power Apps", "Dataverse", "SharePoint", "skills.item.Dashboards"], icon: Database },
];

const SkillsSection = () => {
  const { t } = useLang();

  return (
    <AnimatedSection id="skills" className="py-24 bg-surface">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">{t("skills.title")}</h2>
          <p className="text-sm text-muted-foreground leading-7">{t("skills.desc")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              className="border-t border-border pt-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-accent">
                  <group.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{t(`skills.${group.key}`)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted-foreground py-1 pr-3"
                  >
                    {skill.startsWith("skills.item.") ? t(skill) : skill}
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
