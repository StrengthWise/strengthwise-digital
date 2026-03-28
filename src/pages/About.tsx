import { useLang } from "@/i18n/LanguageContext";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import WaveTransition from "@/components/WaveTransition";

const About = () => {
  const { t } = useLang();

  const badges = [
    t("Trained in Positive Intelligence (Shirzad Chamine)", "Formée à l'Intelligence Positive (Shirzad Chamine)"),
    t("Trained in Flow Science (Steven Kotler, Flow Research Collective)", "Formée à la science du Flow (Steven Kotler, Flow Research Collective)"),
    t("NLP Master Practitioner (ANLP, UK)", "Praticienne PNL Master (ANLP, UK)"),
    t("IIN Integrative Health Coach", "Coach en santé intégrative (IIN)"),
    t("EWOB Board Readiness Program", "Programme EWOB Board Readiness"),
    t("Bilingual French-English (British national)", "Bilingue français-anglais (nationalité britannique)"),
  ];

  const blocks = [
    {
      en: "It was early in my career that I understood what it really means to stay standing when everything is shifting.",
      fr: "C'est tôt dans ma carrière que j'ai compris ce que ça veut vraiment dire de tenir debout quand tout bouge.",
    },
    {
      en: "I was working in commercial aviation finance in 2001 when the Twin Towers collapsed. Overnight, all war risk policies were cancelled. Airlines went down. The bank I worked for found itself the active owner of around a hundred aircraft scattered across the world. There was no market left to sell them. So we created one: we built an operating lease business, which was not at all what a bank was designed to do. That's what real crisis management looks like.",
      fr: "Je travaillais dans le financement de l'aviation commerciale en 2001 quand les Twin Towers se sont effondrées. Du jour au lendemain, toutes les polices de risque de guerre ont été annulées. Des compagnies aériennes ont coulé. La banque pour laquelle je travaillais s'est retrouvée propriétaire active d'une centaine d'avions dispersés dans le monde entier. Plus de marché pour les vendre. Alors on a créé un marché : on a monté une activité de location opérationnelle, ce qui n'était pas du tout le métier d'origine d'une banque. C'est ça, la vraie gestion de crise.",
    },
    {
      en: "I've been through cycles, restructurings, ultra-competitive environments with limited resources and impossible deadlines. At some point, I paid the price of misalignment, and I had to rebuild my own clarity from scratch. That's what led me to coaching, to NLP, to positive psychology, to flow science. Not as a theory. As a necessity.",
      fr: "J'ai traversé des cycles, des restructurations, des environnements ultra-compétitifs avec peu de ressources et des deadlines impossibles. À un moment, j'ai payé le prix du désalignement, et j'ai dû reconstruire ma propre clarté depuis le début. C'est ce qui m'a conduite vers le coaching, la PNL, la psychologie positive, la science du flow. Pas comme une théorie. Comme une nécessité.",
    },
    {
      en: "Today, StrengthWise is built on one idea: performance should not come at the expense of the person. The right tools, the right framework, the right mindset, and you can perform at a high level while staying grounded, clear, and human. That's what I work on with my clients, one-to-one.",
      fr: "Aujourd'hui, Strengthwise est construit sur une idée : la performance ne devrait pas s'installer au détriment de l'humain. Les bons outils, le bon cadre, la bonne posture mentale, et il est possible de performer à un niveau élevé tout en restant ancré, lucide, et humain. C'est ce sur quoi je travaille avec mes clients, en tête-à-tête.",
    },
  ];

  return (
    <main>
      {/* Above the fold */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <div className="flex justify-center md:justify-start">
                <img
                  src="/images/raphaelle.png"
                  alt="Raphaelle Hernu"
                  className="w-[260px] md:w-[300px] h-auto rounded-2xl object-cover"
                  style={{
                    boxShadow: "0 12px 40px -12px hsl(204 22% 28% / 0.18), 0 4px 16px -4px hsl(204 22% 28% / 0.06)",
                  }}
                />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <div>
                <p className="font-body text-foreground leading-relaxed mb-6">
                  {t(
                    "Twenty years in international finance, between Paris and London. I know what high-stakes environments feel like from the inside. Today, I help executives do the same work I had to do - without paying the same price.",
                    "Vingt ans en finance internationale, entre Paris et Londres. J'ai vécu la pression des environnements à forts enjeux de l'intérieur. Aujourd'hui, j'aide les dirigeants à faire ce chemin sans payer le même prix."
                  )}
                </p>
                <div className="flex flex-col gap-2">
                  {badges.map((b, i) => (
                    <span
                      key={i}
                      className="block text-xs font-body px-3 py-1.5 rounded-full border border-sw-teal/10"
                      style={{
                        backgroundColor: "hsl(37 71% 96%)",
                        color: "hsl(204 22% 28%)",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#faf9f7" />

      {/* Long-form */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="container max-w-3xl mx-auto px-4">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 24px -6px hsl(204 22% 28% / 0.06), 0 1px 8px -2px hsl(204 22% 28% / 0.03)",
              border: "1px solid hsl(204 22% 28% / 0.06)",
            }}
          >
            <div className="flex flex-col gap-10">
              {blocks.map((b, i) => (
                <ScrollFadeIn key={i}>
                  <p className="font-body text-foreground leading-relaxed">{t(b.en, b.fr)}</p>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveTransition from="#faf9f7" to="#fdf8f0" />

      <SocialProof />

      <WaveTransition from="#fdf8f0" to="#384c58" />

      <CTASection
        titleEn="Want to work together? Let's talk."
        titleFr="Envie de travailler ensemble ? Parlons-en."
        variant="teal"
      />
    </main>
  );
};

export default About;
