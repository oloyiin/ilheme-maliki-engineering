import { useLang } from "@/contexts/LanguageContext";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t, lang } = useLang();
  const baseUrl = import.meta.env.BASE_URL;
  const cvFileName =
    lang === "fr" ? "cv-ilheme-maliki-fr.pdf" : "cv-ilheme-maliki-en.pdf";
  const cvHref = `${baseUrl}CVs/${cvFileName}`;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
              {t("hero.badge")}
            </p>

            <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
              Ilheme Maliki
            </h1>
            <p className="text-lg sm:text-xl font-medium text-primary mb-4">
              {t("hero.title")}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {t("hero.tagline")}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-7">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {t("hero.viewProjects")}
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={cvHref}
                download
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition-colors"
              >
                {t("hero.downloadCV")}
                <Download className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="justify-self-center lg:justify-self-end w-full max-w-sm"
          >
            <div className="relative">
              <div className="border-b-8 border-accent bg-card">
                <img
                  src={`${baseUrl}profile-photo-placeholder.jpeg`}
                  alt="Portrait d'Ilheme Maliki"
                  className="w-full aspect-[4/5] max-h-[30rem] object-cover"
                />
                <div className="px-0 py-4 bg-background">
                  <p className="text-sm font-semibold text-foreground">Ilheme Maliki</p>
                  <div className="flex items-center justify-between gap-3 mt-1">
                    <p className="text-xs text-muted-foreground">{t("hero.photo.caption")}</p>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-accent">{t("hero.photo.status")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
