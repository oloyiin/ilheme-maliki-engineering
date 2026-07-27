import { useLang } from "@/contexts/LanguageContext";
import { ArrowDown, Download, Sparkles, RadioTower, Workflow, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t, lang } = useLang();
  const baseUrl = import.meta.env.BASE_URL;
  const cvFileName =
    lang === "fr" ? "cv-ilheme-maliki-fr.pdf" : "cv-ilheme-maliki-en.pdf";
  const cvHref = `${baseUrl}CVs/${cvFileName}`;

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden grain-overlay">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/90 to-transparent" />
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-accent/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-primary/15 blur-3xl rounded-full" />
        <div className="absolute inset-y-16 left-[8%] w-px bg-border/50 hidden xl:block" />
      </div>

      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5 border border-accent/30 bg-white/70 rounded-full px-3 py-1.5 shadow-sm">
              <Sparkles className="w-4 h-4" />
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
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_14px_30px_rgba(33,40,48,0.18)]"
              >
                {t("hero.viewProjects")}
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={cvHref}
                download
                className="inline-flex items-center gap-2 border border-border bg-white/75 text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
              >
                {t("hero.downloadCV")}
                <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-6 max-w-3xl">
              {[
                { icon: RadioTower, label: t("hero.card1.title"), value: t("hero.card1.desc") },
                { icon: Workflow, label: t("hero.card2.title"), value: t("hero.card2.desc") },
                { icon: ShieldCheck, label: t("hero.card3.title"), value: t("hero.card3.desc") },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/80 bg-white/70 backdrop-blur-sm px-4 py-4 shadow-[0_10px_30px_rgba(33,40,48,0.06)]"
                >
                  <Icon className="w-4 h-4 text-accent mb-3" />
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["VoIP", "Observability", "Automation", "Cloud & Infra"].map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-secondary-foreground bg-secondary/80 px-3 py-1.5 rounded-full border border-border/60"
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
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 to-primary/20 blur-xl -z-10" />
              <div className="absolute -right-8 top-10 hidden lg:block rounded-2xl border border-border bg-white/85 backdrop-blur-md px-4 py-3 shadow-[0_18px_40px_rgba(33,40,48,0.12)]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t("hero.photo.focus")}</p>
                <p className="text-sm font-semibold text-foreground mt-1">{t("hero.photo.line1")}</p>
                <p className="text-sm font-semibold text-foreground">{t("hero.photo.line2")}</p>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-[0_24px_60px_rgba(33,40,48,0.12)]">
                <img
                  src={`${baseUrl}profile-photo-placeholder.jpeg`}
                  alt="Portrait d'Ilheme Maliki"
                  className="w-full h-[32rem] object-cover"
                />
                <div className="px-5 py-4 border-t border-border bg-background/80 backdrop-blur-sm">
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
