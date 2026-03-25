import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: t("Home", "Accueil") },
    { path: "/about", label: t("About", "A propos") },
    { path: "/quizzes", label: "Quizzes" },
    { path: "/programme", label: "Programme" },
    { path: "/ressources", label: t("Resources", "Ressources") },
  ];

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: "#384c58" }}>
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src="/images/logo-white.png" alt="StrengthWise" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-body tracking-wide transition-colors ${
                location.pathname === l.path ? "text-white font-semibold" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://calendly.com/strengthwise/discovery" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-2 px-5">
            {t("Book a Clarity Call", "Reserver un Clarity Call")}
          </a>
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="text-white/80 hover:text-white text-sm font-body border border-white/30 rounded px-2 py-1 transition-colors"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3" style={{ backgroundColor: "#384c58" }}>
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className="block text-white/90 hover:text-white text-sm font-body py-1"
            >
              {l.label}
            </Link>
          ))}
          <a href="https://calendly.com/strengthwise/discovery" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-2 px-5 block text-center">
            {t("Book a Clarity Call", "Reserver un Clarity Call")}
          </a>
          <button
            onClick={() => { setLang(lang === "en" ? "fr" : "en"); setOpen(false); }}
            className="text-white/80 text-sm font-body border border-white/30 rounded px-2 py-1"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
