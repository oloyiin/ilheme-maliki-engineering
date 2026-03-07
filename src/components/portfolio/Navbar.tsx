import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["about", "experience", "projects", "skills", "education", "contact"];

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
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
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-3 py-1.5"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
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
