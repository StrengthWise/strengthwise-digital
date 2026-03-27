import { useLang } from "@/i18n/LanguageContext";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const About = () => {
  const { t } = useLang();

  const badges = [
    t("Trained in Positive Intelligence (Shirzad Chamine)", "Formée à la Positive Intelligence (Shirzad Chamine)"),
    t("Trained in Flow Science (Steven Kotler, Flow Research Collective)", "Formée à la science du Flow (Steven Kotler, Flow Research Collective)"),
    t("NLP Master Practitioner (ANLP, UK)", "Praticienne PNL Master (ANLP, UK)"),
    t("IIN Integrative Health Coach", "Coach en santé intégrative (IIN)"),
    t("EWOB Board Readiness Program", "Programme EWOB Board Readiness"),
    t("Bilingual French-English (British national)", "Bilingue français-anglais (nationalité britannique)"),
  ];

  const blocks = [
    {
      en: "It was early in my finance career that I learned what it really means to navigate the unexpected. I was working in commercial aviation finance in 2001 when the twin towers collapsed. Within 24 hours, all war risk policies were cancelled. Airlines went down. The bank I worked for became the active owner of around a hundred aircraft worldwide. We had to negotiate, adapt, and find opportunities where there seemed to be none. That experience, and twenty years like it, taught me what pressure actually looks like, and what it takes to stay clear-headed inside it.",
      fr: "C'est tôt dans ma carrière en finance que j'ai appris ce que signifie vraiment naviguer dans l'imprévu. Je travaillais dans le financement de l'aviation commerciale en 2001 quand les tours se sont effondrées. En 24 heures, toutes les polices de risque de guerre ont été annulées. Des compagnies aériennes ont coulé. La banque pour laquelle je travaillais est devenue propriétaire active d'une centaine d'avions dans le monde. Il a fallu négocier, s'adapter, trouver des leviers là où il n'y en avait apparemment plus. Cette expérience, et vingt ans dans sa lignée, m'a appris ce que la pression signifie vraiment, et ce qu'il faut pour garder la tête claire à l'intérieur.",
    },
    {
      en: "I've been through cycles, restructurings, multi-matrix reporting, competitive environments with limited resources and stretch deadlines. At some point, I paid the price of misalignment, and I had to rebuild my own clarity from scratch. That's what led me to coaching, to NLP, to positive psychology, to flow science. Not as a theory. As a necessity.",
      fr: "J'ai traversé des cycles, des restructurations, des environnements ultra-compétitifs avec peu de ressources et des deadlines impossibles. À un moment, j'ai payé le prix du désalignement, et j'ai dû reconstruire ma propre clarté depuis le début. C'est ce qui m'a conduite vers le coaching, la PNL, la psychologie positive, la science du flow. Pas comme une théorie. Comme une nécessité.",
    },
    {
      en: "Today, StrengthWise is built on one idea: performance doesn't have to come at the cost of the person. The right tools, the right mindset, the right framework, and you can perform at a high level while staying grounded, clear, and human. That's what I work on with my clients, one-to-one.",
      fr: "Aujourd'hui, StrengthWise est construit sur une idée : la performance n'a pas à coûter la personne. Les bons outils, le bon cadre, la bonne posture mentale, et il est possible de performer à un niveau élevé tout en restant ancré, lucide, et humain. C'est ce sur quoi je travaille avec mes clients, en tête-à-tête.",
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
                  alt="Raphaëlle Hernu"
                  className="w-[260px] md:w-[300px] h-auto rounded-2xl object-cover"
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
                    <span key={i} className="block text-xs font-body px-3 py-1.5 rounded-full bg-sw-cream text-sw-teal border border-sw-teal/10">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Long-form */}
      <section className="bg-sw-cream py-16 md:py-20">
        <div className="container max-w-3xl mx-auto px-4">
          <ScrollFadeIn>
            <p className="text-sm text-muted-foreground font-body mb-8 italic">
              {t("The longer version, for those who want to know more.", "La version longue, pour ceux qui veulent aller plus loin.")}
            </p>
          </ScrollFadeIn>
          {blocks.map((b, i) => (
            <ScrollFadeIn key={i}>
              <p className="font-body text-foreground leading-relaxed mb-6">{t(b.en, b.fr)}</p>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      <SocialProof />

      <CTASection
        titleEn="Want to work together? Let's talk."
        titleFr="Envie de travailler ensemble ? Parlons-en."
        variant="teal"
      />
    </main>
  );
};

export default About;
