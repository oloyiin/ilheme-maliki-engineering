import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { t } = useLang();

  return (
    <AnimatedSection id="education" className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-10">{t("edu.title")}</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">{t("edu.insa.title")}</h3>
              <p className="text-sm font-medium text-accent mb-2">{t("edu.insa.degree")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("edu.insa.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
