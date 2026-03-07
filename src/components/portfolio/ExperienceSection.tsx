import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { t } = useLang();

  const bpceResponsibilities = [
    t("exp.bpce.r1"),
    t("exp.bpce.r2"),
    t("exp.bpce.r3"),
    t("exp.bpce.r4"),
    t("exp.bpce.r5"),
  ];

  return (
    <AnimatedSection id="experience" className="py-24 bg-surface">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-10">{t("exp.title")}</h2>

        <div className="space-y-10">
          {/* BPCE */}
          <div className="border-l-2 border-accent pl-6">
            <div className="flex items-start gap-3 mb-2">
              <Briefcase className="w-4 h-4 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">{t("exp.bpce.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("exp.bpce.team")}</p>
              </div>
            </div>
            <ul className="ml-7 space-y-1.5 text-sm text-muted-foreground">
              {bpceResponsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* MDM */}
          <div className="border-l-2 border-border pl-6">
            <h3 className="font-semibold text-foreground mb-2">{t("exp.mdm.title")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("exp.mdm.desc")}</p>
          </div>

          {/* LX Solutions */}
          <div className="border-l-2 border-border pl-6">
            <h3 className="font-semibold text-foreground mb-2">{t("exp.lx.title")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("exp.lx.desc")}</p>
          </div>

          {/* NGTV */}
          <div className="border-l-2 border-border pl-6">
            <h3 className="font-semibold text-foreground mb-2">{t("exp.ngtv.title")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("exp.ngtv.desc")}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
