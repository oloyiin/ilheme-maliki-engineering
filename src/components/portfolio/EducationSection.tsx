import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { t } = useLang();
  const baseUrl = import.meta.env.BASE_URL;
  const schools = [
    {
      key: "insa",
      website: "https://www.insa-lyon.fr/fr/content/t%C3%A9l%C3%A9communications-services-usages",
      logo: `${baseUrl}schools/insa-logo.jpg`,
    },
    {
      key: "trinity",
      website: "https://www.tcd.ie/engineering/",
      logo: `${baseUrl}schools/trinity-logo.jpg`,
    },
    {
      key: "iut",
      website: "https://iut.univ-lyon1.fr/formation/but/info-doua",
      logo: `${baseUrl}schools/iut.png`,
    },
  ];

  return (
    <AnimatedSection id="education" className="py-24">
      <div className="container max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground mb-10">{t("edu.title")}</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {schools.map((school) => (
            <article
              key={school.key}
              className="border border-border rounded-lg p-6 bg-background hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-md border border-border bg-secondary overflow-hidden shrink-0">
                  <img
                    src={school.logo}
                    alt={`${t(`edu.${school.key}.title`)} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-snug">
                    {t(`edu.${school.key}.title`)}
                  </h3>
                  <p className="text-sm font-medium text-accent mt-1">
                    {t(`edu.${school.key}.degree`)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t(`edu.${school.key}.dates`)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`edu.${school.key}.desc`)}
                </p>
              </div>

              <a
                href={school.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {t("edu.website")}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
