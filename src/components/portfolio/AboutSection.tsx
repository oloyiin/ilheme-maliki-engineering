import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";

const AboutSection = () => {
  const { t } = useLang();

  return (
    <AnimatedSection id="about" className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-8">{t("about.title")}</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          {t("about.text")}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" />
          France
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
