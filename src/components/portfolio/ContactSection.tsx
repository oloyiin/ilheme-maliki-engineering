import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Mail, Github, Linkedin, ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact" className="py-24 bg-surface">
      <div className="container max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-2">{t("contact.title")}</h2>
          <p className="text-sm text-muted-foreground leading-7">{t("contact.desc")}</p>
        </div>

        <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10">
          {/* Links */}
          <div className="rounded-[1.75rem] border border-border/80 bg-white/80 p-6 shadow-[0_18px_40px_rgba(33,40,48,0.06)]">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-accent border border-accent/20 bg-accent/10 rounded-full px-3 py-1.5 mb-5">
              <BriefcaseBusiness className="w-3.5 h-3.5" />
              {t("contact.badge")}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{t("contact.getInTouch")}</h3>
            <p className="text-sm text-muted-foreground leading-7 mb-6">{t("contact.response")}</p>

            <div className="space-y-3">
            <a
              href="mailto:ilhememaliki@gmail.com"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-secondary/35 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
            >
              <span className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                ilhememaliki@gmail.com
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/oloyiin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-secondary/35 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
            >
              <span className="flex items-center gap-3">
                <Github className="w-4 h-4 text-accent" />
                github.com/oloyiin
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ilhememaliki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-secondary/35 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
            >
              <span className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-accent" />
                linkedin.com/in/ilhememaliki
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-accent/30 rounded-[1.75rem] bg-white/80 p-6 text-center">
                <p className="text-sm text-foreground font-medium">
                  {t("contact.title")} ✓
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.75rem] border border-border/80 bg-white/80 p-6 shadow-[0_18px_40px_rgba(33,40,48,0.06)]">
                <input
                  type="text"
                  required
                  placeholder={t("contact.name")}
                  className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <input
                  type="email"
                  required
                  placeholder={t("contact.email")}
                  className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <textarea
                  required
                  rows={4}
                  placeholder={t("contact.message")}
                  className="w-full bg-background border border-border rounded-[1.25rem] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-foreground text-background rounded-full px-4 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  {t("contact.send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
