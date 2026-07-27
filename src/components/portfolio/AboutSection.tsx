import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";

const AboutSection = () => {
  const { t } = useLang();

  return (
    <AnimatedSection id="about" className="py-24">
      <div className="container max-w-4xl">
        <div className="rounded-[2rem] border border-border/70 bg-white/65 backdrop-blur-sm px-8 py-10 shadow-[0_18px_45px_rgba(33,40,48,0.05)] sm:px-10">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t("about.title")}</h2>
          <p className="text-base text-muted-foreground leading-8 mb-5">
            {t("about.text")}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            France
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
