import { useLang } from "@/contexts/LanguageContext";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Telecommunications · Systems · DevOps
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-4">
            Ilheme Maliki
          </h1>
          <p className="text-lg sm:text-xl font-medium text-muted-foreground mb-4">
            {t("hero.title")}
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            {t("hero.tagline")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {t("hero.viewProjects")}
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/cv-ilheme-maliki.pdf"
              download
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors"
            >
              {t("hero.downloadCV")}
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
