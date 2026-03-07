import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8">
      <div className="container text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ilheme Maliki. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
