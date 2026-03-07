import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  { key: "telecom", items: ["SIP", "VoIP", "Asterisk", "SIPp", "Telecom Monitoring"] },
  { key: "systems", items: ["Linux", "Windows Infrastructure", "System Administration", "Networking Fundamentals"] },
  { key: "devops", items: ["Git", "GitLab CI/CD", "APIs", "Automation"] },
  { key: "programming", items: ["Python", "Java", "SQL", "Bash"] },
  { key: "data", items: ["Power BI", "Power Apps", "Dataverse", "SharePoint"] },
];

const SkillsSection = () => {
  const { t } = useLang();

  return (
    <AnimatedSection id="skills" className="py-24 bg-surface">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-10">{t("skills.title")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-semibold text-foreground mb-3">{t(`skills.${group.key}`)}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium border border-border text-muted-foreground px-3 py-1.5 rounded-md hover:border-accent/50 hover:text-foreground transition-colors"
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
