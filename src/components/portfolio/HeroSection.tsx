import { useLang } from "@/contexts/LanguageContext";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t, lang } = useLang();
  const baseUrl = import.meta.env.BASE_URL;
  const cvFileName =
    lang === "fr"
      ? "CV Ingénieur_Reseaux_Ilhême_Maliki.pdf"
      : "Resume_Telecommunication_Network_Engineer_Ilheme_Maliki.pdf";
  const cvHref = `${baseUrl}CVs/${encodeURIComponent(cvFileName)}`;

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-accent/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-primary/15 blur-3xl rounded-full" />
      </div>

      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-accent mb-5 border border-accent/30 bg-accent/10 rounded-full px-3 py-1.5">
              <Sparkles className="w-4 h-4" />
              Telecommunications · Systems · DevOps
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-4">
              Ilheme Maliki
            </h1>
            <p className="text-lg sm:text-xl font-medium text-muted-foreground mb-4">
              {t("hero.title")}
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {t("hero.tagline")}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-7">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {t("hero.viewProjects")}
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={cvHref}
                download
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors"
              >
                {t("hero.downloadCV")}
                <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {["VoIP", "Observability", "Automation", "Cloud & Infra"].map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-secondary-foreground bg-secondary px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="justify-self-center w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/20 blur-xl -z-10" />
              <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
                <img
                  src={`${baseUrl}profile-photo-placeholder.jpeg`}
                  alt="Portrait d'Ilheme Maliki"
                  className="w-full h-[32rem] object-cover"
                />
                <div className="px-4 py-3 border-t border-border bg-background/80 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-foreground">Ilheme Maliki</p>
                  <p className="text-xs text-muted-foreground">Engineering Portfolio</p>
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
