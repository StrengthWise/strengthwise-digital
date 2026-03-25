import { useLang } from "@/i18n/LanguageContext";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { ExternalLink } from "lucide-react";

const Ressources = () => {
  const { lang, t } = useLang();

  return (
    <main>
      <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <ScrollFadeIn>
            <h1 className="section-title text-center mb-12">{t("Further thinking", "Pour aller plus loin")}</h1>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Newsletter */}
            <ScrollFadeIn>
              <div className="card-sw flex flex-col h-full">
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">Newsletter / Substack</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("Thinking on performance, clarity and leadership, straight to your inbox.", "Reflexions sur la performance, la clarte et le leadership, directement dans ta boite mail.")}
                </p>
                <a href="https://substack.com/@rapher" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs self-start inline-flex items-center gap-2">
                  {t("Read on Substack", "Lire sur Substack")} <ExternalLink size={14} />
                </a>
              </div>
            </ScrollFadeIn>

            {/* LinkedIn */}
            <ScrollFadeIn>
              <div className="card-sw flex flex-col h-full">
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">LinkedIn</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("Follow StrengthWise on LinkedIn.", "Suivre StrengthWise sur LinkedIn.")}
                </p>
                <a href="https://www.linkedin.com/company/strengthwise" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs self-start inline-flex items-center gap-2">
                  LinkedIn <ExternalLink size={14} />
                </a>
              </div>
            </ScrollFadeIn>

            {/* Book */}
            <ScrollFadeIn>
              <div className="card-sw flex flex-col h-full">
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">Sustainable Performance</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("The book on combining peak performance with well-being.", "Le livre sur la performance durable.")}
                </p>
                <a href={lang === "fr" ? "https://www.amazon.fr/dp/2959052684" : "https://www.amazon.co.uk/dp/B0DPVF3GP3"} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs self-start inline-flex items-center gap-2">
                  Amazon <ExternalLink size={14} />
                </a>
              </div>
            </ScrollFadeIn>

            {/* Cards */}
            <ScrollFadeIn>
              <div className="card-sw flex flex-col h-full">
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">Mighty Mind Coaching Cards</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("54 coaching cards. NLP, positive psychology, critical thinking in a single deck.", "54 cartes de coaching. PNL, psychologie positive et pensee critique en un seul jeu.")}
                </p>
                {lang === "fr" ? (
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.amazon.fr/Cartes-de-coaching-Mightty-Mind/dp/2959052609" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs inline-flex items-center gap-2">
                      Version anglaise <ExternalLink size={14} />
                    </a>
                    <a href="https://www.amazon.fr/-/en/STRENGTHWISE-Photolanguage-Development-Emotional-Intelligence/dp/2959052692" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs inline-flex items-center gap-2">
                      Version francaise <ExternalLink size={14} />
                    </a>
                  </div>
                ) : (
                  <a href="https://www.amazon.co.uk/STRENGTHWISE-MIGHTY-MIND-COACHING-CARDS/dp/2959052609" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs self-start inline-flex items-center gap-2">
                    Amazon <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ressources;
