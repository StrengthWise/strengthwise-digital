import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

const Footer = () => {
  const { lang, setLang, t } = useLang();

  return (
    <footer style={{ backgroundColor: "#384c58" }} className="text-white/90 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/images/logo-white.png" alt="StrengthWise" className="h-10 mb-4" />
            <p className="text-xs text-white/60 font-body">info@strengthwise.co</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-3 uppercase tracking-wider">{t("Navigate", "Navigation")}</h4>
            <div className="space-y-2 text-sm font-body">
              <Link to="/" className="block hover:text-white transition-colors">{t("Home", "Accueil")}</Link>
              <Link to="/about" className="block hover:text-white transition-colors">{t("About", "À propos")}</Link>
              <Link to="/quizzes" className="block hover:text-white transition-colors">Quizzes</Link>
              <Link to="/programme" className="block hover:text-white transition-colors">Programme</Link>
              <Link to="/ressources" className="block hover:text-white transition-colors">{t("Resources", "Ressources")}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-3 uppercase tracking-wider">{t("Legal", "Mentions")}</h4>
            <div className="space-y-2 text-sm font-body">
              <Link to="/privacy" className="block hover:text-white transition-colors">{t("Privacy Policy", "Politique de confidentialité")}</Link>
              <Link to="/terms" className="block hover:text-white transition-colors">{t("Terms and Conditions", "Notre façon de travailler")}</Link>
              <Link to="/ethics" className="block hover:text-white transition-colors">{t("Code of Ethics", "Code d'éthique")}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-3 uppercase tracking-wider">{t("Connect", "Suivez-nous")}</h4>
            <div className="space-y-2 text-sm font-body">
              <a href="https://www.linkedin.com/in/raphaellehernu/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">LinkedIn (Raphaelle)</a>
              <a href="https://www.linkedin.com/company/strengthwise" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">LinkedIn (StrengthWise)</a>
              <a href="https://www.instagram.com/strengthwiseco/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Instagram</a>
              
            </div>
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="mt-4 text-xl leading-none hover:opacity-80 transition-opacity"
            >
              {lang === "en" ? "🇫🇷" : "🇬🇧"}
            </button>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-xs text-white/50 font-body">
          &copy; 2026 StrengthWise. {t("All rights reserved.", "Tous droits réservés.")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
