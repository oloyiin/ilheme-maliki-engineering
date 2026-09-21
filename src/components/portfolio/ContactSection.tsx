import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

const links = [
  { label: "ilhememaliki@gmail.com", href: "mailto:ilhememaliki@gmail.com", icon: Mail },
  { label: "github.com/oloyiin", href: "https://github.com/oloyiin", icon: Github },
  { label: "linkedin.com/in/ilhememaliki", href: "https://www.linkedin.com/in/ilhememaliki", icon: Linkedin },
];

const ContactSection = () => {
  const { t } = useLang();
  return (
    <AnimatedSection id="contact" className="py-20 sm:py-24 bg-surface">
      <div className="container max-w-5xl grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">{t("contact.badge")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">{t("contact.getInTouch")}</h2>
          <p className="text-lg font-medium leading-relaxed mb-5">{t("contact.response")}</p>
          <p className="text-sm text-muted-foreground leading-7">{t("contact.desc")}</p>
        </div>
        <div className="space-y-3 min-w-0">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              {...(href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-5 text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Icon className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <span className="min-w-0 break-all">{label}</span>
              <ArrowUpRight className="ml-auto w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
