import { useLang } from "@/i18n/LanguageContext";

interface CTASectionProps {
  titleEn: string;
  titleFr: string;
  subtitleEn?: string;
  subtitleFr?: string;
  variant?: "teal" | "white";
}

const CTASection: React.FC<CTASectionProps> = ({ titleEn, titleFr, subtitleEn, subtitleFr, variant = "teal" }) => {
  const { t } = useLang();
  const isTeal = variant === "teal";

  return (
    <section className="pt-16 md:pt-20 pb-8 md:pb-10 text-center" style={{ backgroundColor: isTeal ? "#384c58" : "#ffffff" }}>
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-display font-bold uppercase tracking-[3px] mb-4 ${isTeal ? "text-white" : "text-sw-teal"}`}>
          {t(titleEn, titleFr)}
        </h2>
        {subtitleEn && (
          <p className={`font-body mb-8 ${isTeal ? "text-white/80" : "text-muted-foreground"}`}>
            {t(subtitleEn, subtitleFr || subtitleEn)}
          </p>
        )}
        <a
          href="https://calendly.com/strengthwise/discovery"
          target="_blank"
          rel="noopener noreferrer"
          className={isTeal ? "btn-white-teal" : "btn-gold"}
        >
          {t("Book a Clarity Call", "Book un Clarity Call")}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
