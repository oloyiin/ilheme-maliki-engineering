import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["about", "experience", "projects", "skills", "education", "contact"];

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container pt-4">
        <div className="flex items-center justify-between h-16 px-4 sm:px-5 rounded-full border border-border/70 bg-background/82 backdrop-blur-xl shadow-[0_12px_40px_rgba(33,40,48,0.08)]">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          IM<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors border border-accent/20 bg-accent/10 rounded-full px-3.5 py-1.5 hover:bg-accent/15"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleLang} className="text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-4 h-4" />
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 rounded-3xl bg-background/95 border border-border shadow-[0_12px_30px_rgba(33,40,48,0.08)] overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
