import { useLang } from "@/i18n/LanguageContext";
import WaveTransition from "@/components/WaveTransition";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Check, Minus } from "lucide-react";

const Programme = () => {
  const { lang, t } = useLang();

  const forYouItems = [
    { en: "You're a manager or executive facing sustained high pressure", fr: "Tu es manager ou dirigeant(e) sous pression elevee" },
    { en: "Decisions pile up and your clarity is fading", fr: "Les arbitrages s'accumulent et ta clarte recule" },
    { en: "You're still standing, but you need to reclaim control", fr: "Tu tiens encore la route, mais tu as besoin de reprendre la main" },
    { en: "You want concrete coaching, not comfort coaching", fr: "Tu cherches un accompagnement concret, pas du coaching confort" },
    { en: "You don't have access to coaching through your company", fr: "Tu n'as pas acces au coaching via ton entreprise" },
  ];

  const features = [
    { label: t("12 sessions / 90 days", "12 sessions / 90 jours"), standard: true, augmented: true },
    { label: t("Positive Intelligence Programme", "Programme Positive Intelligence"), standard: true, augmented: true },
    { label: t("Personalised action plan", "Plan d'action personnalise"), standard: true, augmented: true },
    { label: t("Weekly follow-up emails", "Emails de suivi hebdomadaires"), standard: true, augmented: true },
    { label: t("Flow Principles (Steven Kotler)", "Flow Principles (Steven Kotler)"), standard: false, augmented: true },
    { label: t("GPT tools between sessions", "Outils GPT entre les sessions"), standard: false, augmented: true },
    { label: t("2 follow-up sessions (D+30, D+60)", "2 sessions de suivi (J+30, J+60)"), standard: false, augmented: true },
    { label: t("Async support (WhatsApp/Voxer)", "Support asynchrone (WhatsApp/Voxer)"), standard: false, augmented: true },
  ];

  const testimonialsEn = [
    { quote: "Six months that changed how I work. I came out stronger, with the ability to step back, delegate effectively, and build a clearer vision for my team.", name: "Sophie M.", role: "Commercial Manager, Arval BNP Paribas" },
    { quote: "Raphaelle has a real talent for guiding participants to work with trust and depth. Her workshop is an extremely effective method for becoming fully aware of your impact on the people you manage.", name: "Jean-Philippe B.", role: "Managing Director, France" },
    { quote: "Working with Raphaelle has been a genuine journey. Her ability to engage on deep topics, using NLP tools to clear old patterns, makes each session valuable and relatable.", name: "Maud P.", role: "Linguist, UK" },
  ];

  const testimonialsFr = [
    { quote: "Un soutien formidable pour retrouver mon intelligence positive quand les defis de la vie m'ont ebranlee. Son experience et son professionnalisme font une vraie difference.", name: "Marie-Zoe B.", role: "Board Director, HR Consulting, Finlande" },
    { quote: "Sa capacite d'ecoute remarquable a pose les bases d'une experience de coaching vraiment personnalisee. Sa facon de meler idees pertinentes et perspectives nouvelles rend chaque session unique et transformatrice.", name: "Sam L.", role: "Account Manager, UK" },
    { quote: "Travailler avec Raphaelle a ete incroyablement enrichissant. Elle m'a aidee a construire de bonnes habitudes, a definir une vision strategique pour mon activite et a la faire avancer sans m'epuiser.", name: "Katie L.", role: "Partner, ESG, UK" },
  ];

  const testimonials = lang === "fr" ? testimonialsFr : testimonialsEn;

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 text-center" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-4xl mx-auto px-4">
          <ScrollFadeIn>
            <h1 className="section-title mb-4">FROM PRESSURE TO CLARITY</h1>
            <p className="font-body text-muted-foreground text-lg mb-8">
              {t("90-day precision mental fitness for leaders under pressure.", "90 jours de mental fitness haute precision pour dirigeants et managers sous pression.")}
            </p>
            <a href="https://calendly.com/strengthwise/discovery" target="_blank" rel="noopener noreferrer" className="btn-gold">
              {t("Book a Clarity Call", "Book un Clarity Call")}
            </a>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#fdf8f0" />

      {/* Problem */}
      <section className="bg-sw-cream py-16 md:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <p className="font-body text-foreground text-lg leading-relaxed">
              {t(
                "You're performing. But you're running on willpower. The mental load keeps building, decisions pile up, and clarity fades. You know this can't go on.",
                "Tu performes. Mais tu tiens a la force du poignet. La charge mentale monte, les arbitrages s'accumulent, la clarte recule. Tu sais que ca ne peut pas durer comme ca."
              )}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#fdf8f0" to="#ffffff" />

      {/* Promise */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <p className="font-body text-foreground text-lg leading-relaxed">
              {t(
                "We don't eliminate pressure. We change the way your mind and leadership respond to it. That's precision mental fitness.",
                "On ne supprime pas la pression. On change la facon dont ton mental et ton leadership y repondent. C'est ca, le mental fitness haute precision."
              )}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#fdf8f0" />

      {/* For who */}
      <section className="bg-sw-cream py-16 md:py-20">
        <div className="container max-w-3xl mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="section-title text-center mb-8">{t("This programme is for you if...", "Ce programme est pour toi si...")}</h2>
            <ul className="space-y-3">
              {forYouItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-foreground">
                  <Check size={18} className="text-sw-teal mt-0.5 flex-shrink-0" />
                  {t(item.en, item.fr)}
                </li>
              ))}
            </ul>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard */}
            <ScrollFadeIn>
              <div className="card-sw text-center">
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-xl mb-2">STANDARD</h3>
                <div className="text-3xl font-display font-bold text-sw-teal mb-1">2 000 EUR</div>
                <p className="text-xs text-muted-foreground font-body mb-6">3x 667 EUR/{t("month", "mois")}</p>
                <div className="space-y-3 text-left">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-body">
                      {f.standard ? <Check size={16} className="text-sw-teal flex-shrink-0" /> : <Minus size={16} className="text-muted-foreground/40 flex-shrink-0" />}
                      <span className={f.standard ? "text-foreground" : "text-muted-foreground/40"}>{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            {/* Augmented */}
            <ScrollFadeIn>
              <div className="card-sw-gold text-center relative">
                <h3 className="font-display font-bold uppercase tracking-[2px] text-xl mb-2" style={{ color: "#c5922f" }}>AUGMENTED</h3>
                <div className="text-3xl font-display font-bold text-sw-teal mb-1">3 500 EUR</div>
                <p className="text-xs text-muted-foreground font-body mb-6">3x 1 167 EUR/{t("month", "mois")}</p>
                <div className="space-y-3 text-left">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-body">
                      <Check size={16} className="text-sw-teal flex-shrink-0" />
                      <span className="text-foreground">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn>
            <p className="text-center text-sm text-muted-foreground font-body italic mt-8">
              {t(
                "Limited availability. I work with a small number of clients at a time to guarantee quality.",
                "Places limitees. J'accompagne un nombre restreint de personnes a la fois pour garantir la qualite."
              )}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#fdf8f0" />

      {/* Testimonials */}
      <section className="bg-sw-cream py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollFadeIn key={i}>
                <TestimonialCard quote={t.quote} name={t.name} role={t.role} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <WaveTransition from="#fdf8f0" to="#384c58" />

      <CTASection
        titleEn="Ready to reclaim control?"
        titleFr="Pret(e) a reprendre la main ?"
        subtitleEn="Book a free 30-min Clarity Call. No pitch, no pressure. Just a diagnostic and an honest conversation."
        subtitleFr="Book un Clarity Call de 30 minutes. Gratuit, sans engagement. Un mini-diagnostic et une conversation honnete."
        variant="teal"
      />
    </main>
  );
};

export default Programme;
