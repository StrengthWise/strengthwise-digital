import { useLang } from "@/i18n/LanguageContext";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import WaveTransition from "@/components/WaveTransition";
import { ExternalLink } from "lucide-react";

const Ressources = () => {
  const { lang, t } = useLang();

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h1 className="section-title mb-4">{t("Further thinking", "Pour aller plus loin")}</h1>
            <div
              className="w-16 h-0.5 mx-auto mb-6"
              style={{ background: "linear-gradient(90deg, #c5922f, #e8b45a)" }}
            />
            <p className="font-body text-muted-foreground">
              {t(
                "Articles, videos, and tools to deepen your thinking on performance and leadership.",
                "Articles, vidéos et outils pour approfondir ta réflexion sur la performance et le leadership."
              )}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#faf9f7" />

      {/* Cards grid */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 10-Day Performance Series */}
            <ScrollFadeIn>
              <div
                className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "0.5px solid hsl(204 22% 28% / 0.1)",
                  boxShadow: "0 4px 20px -6px hsl(204 22% 28% / 0.06), 0 1px 6px -2px hsl(204 22% 28% / 0.03)",
                }}
              >
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">{t("10-Day Performance Series", "10 Jours pour Booster ta Performance")}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("10 emails packed with targeted tips to excel sustainably while enjoying the journey.", "10 emails regorgeant de conseils ciblés pour exceller dans la durée tout en appréciant le voyage.")}
                </p>
                <a href={lang === "fr" ? "https://dashboard.mailerlite.com/forms/1312119/148014382708688033/share" : "https://dashboard.mailerlite.com/forms/1312119/145332500579747502/share"} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs self-start inline-flex items-center gap-2">
                  {t("Sign up", "S'inscrire")} <ExternalLink size={14} />
                </a>
              </div>
            </ScrollFadeIn>

            {/* Newsletter */}
            <ScrollFadeIn>
              <div
                className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "0.5px solid hsl(204 22% 28% / 0.1)",
                  boxShadow: "0 4px 20px -6px hsl(204 22% 28% / 0.06), 0 1px 6px -2px hsl(204 22% 28% / 0.03)",
                }}
              >
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">Newsletter / Substack</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("Thinking on performance, clarity and leadership, straight to your inbox.", "Réflexions sur la performance, la clarté et le leadership, directement dans ta boîte mail.")}
                </p>
                <a href="https://substack.com/@rapher" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs self-start inline-flex items-center gap-2">
                  {t("Read on Substack", "Lire sur Substack")} <ExternalLink size={14} />
                </a>
              </div>
            </ScrollFadeIn>

            {/* LinkedIn / Insights */}
            <ScrollFadeIn>
              <div
                className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "0.5px solid hsl(204 22% 28% / 0.1)",
                  boxShadow: "0 4px 20px -6px hsl(204 22% 28% / 0.06), 0 1px 6px -2px hsl(204 22% 28% / 0.03)",
                }}
              >
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">LinkedIn / Insights</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("Insights on leadership, performance and well-being. Follow us for regular updates.", "Réflexions sur le leadership, la performance et le bien-être. Suivez-nous pour des contenus réguliers.")}
                </p>
                <div className="flex flex-col gap-2 items-start">
                  <a href="https://www.linkedin.com/in/raphaellehernu/" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs inline-flex items-center gap-2 px-4 py-2">
                    Raphaelle <ExternalLink size={14} />
                  </a>
                  <a href="https://www.linkedin.com/company/strengthwise" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs inline-flex items-center gap-2 px-4 py-2">
                    StrengthWise <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </ScrollFadeIn>

            {/* YouTube */}
            <ScrollFadeIn>
              <div
                className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "0.5px solid hsl(204 22% 28% / 0.1)",
                  boxShadow: "0 4px 20px -6px hsl(204 22% 28% / 0.06), 0 1px 6px -2px hsl(204 22% 28% / 0.03)",
                }}
              >
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">Video / YouTube Channel</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("Short videos and webinars available here.", "Vidéos courtes et webinaires disponibles ici.")}
                </p>
                <a href="https://www.youtube.com/@Strengthwise" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs self-start inline-flex items-center gap-2">
                  YouTube <ExternalLink size={14} />
                </a>
              </div>
            </ScrollFadeIn>

            {/* Book */}
            <ScrollFadeIn>
              <div
                className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "0.5px solid hsl(204 22% 28% / 0.1)",
                  boxShadow: "0 4px 20px -6px hsl(204 22% 28% / 0.06), 0 1px 6px -2px hsl(204 22% 28% / 0.03)",
                }}
              >
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
              <div
                className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "0.5px solid hsl(204 22% 28% / 0.1)",
                  boxShadow: "0 4px 20px -6px hsl(204 22% 28% / 0.06), 0 1px 6px -2px hsl(204 22% 28% / 0.03)",
                }}
              >
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">Mighty Mind Coaching Cards</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {t("54 coaching cards. NLP, positive psychology, critical thinking in a single deck.", "54 cartes de coaching. PNL, psychologie positive et pensée critique en un seul jeu.")}
                </p>
                {lang === "fr" ? (
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.amazon.fr/Cartes-de-coaching-Mightty-Mind/dp/2959052609" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs inline-flex items-center gap-2">
                      Version anglaise <ExternalLink size={14} />
                    </a>
                    <a href="https://www.amazon.fr/-/en/STRENGTHWISE-Photolanguage-Development-Emotional-Intelligence/dp/2959052692" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs inline-flex items-center gap-2">
                      Version française <ExternalLink size={14} />
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

      <WaveTransition from="#faf9f7" to="#384c58" />
    </main>
  );
};

export default Ressources;
