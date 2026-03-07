import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Mail, Github, Linkedin } from "lucide-react";
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
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-2">{t("contact.title")}</h2>
        <p className="text-sm text-muted-foreground mb-10">{t("contact.desc")}</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("contact.getInTouch")}</h3>
            <a
              href="mailto:ilhememaliki@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              ilhememaliki@gmail.com
            </a>
            <a
              href="https://github.com/oloyiin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4 text-accent" />
              github.com/oloyiin
            </a>
            <a
              href="https://www.linkedin.com/in/ilhememaliki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4 text-accent" />
              linkedin.com/in/ilhememaliki
            </a>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-accent/30 rounded-lg p-6 text-center">
                <p className="text-sm text-foreground font-medium">
                  {t("contact.title")} ✓
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder={t("contact.name")}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <input
                  type="email"
                  required
                  placeholder={t("contact.email")}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <textarea
                  required
                  rows={4}
                  placeholder={t("contact.message")}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-foreground text-background rounded-lg px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
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
