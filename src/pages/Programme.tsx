import { useLang } from "@/i18n/LanguageContext";
import WaveTransition from "@/components/WaveTransition";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Check, Minus } from "lucide-react";
import loicImg from "@/assets/Loic.jpeg";
import katieImg from "@/assets/katie.jpeg";
import samImg from "@/assets/Sam.jpeg";
import marieZoeImg from "@/assets/Marie_Zoe.jpeg";
import jphilippeImg from "@/assets/JPhilippe.jpeg";
import maudImg from "@/assets/Maud.jpeg";
import armelleImg from "@/assets/Armelle.jpeg";

const Programme = () => {
  const { lang, t } = useLang();

  const forYouItems = [
    { en: "You're a manager or executive facing sustained high pressure", fr: "Tu es manager ou dirigeant(e) sous pression élevée" },
    { en: "Decisions pile up and your clarity is fading", fr: "Les arbitrages s'accumulent et ta clarté recule" },
    { en: "You're still standing, but you need to reclaim control", fr: "Tu tiens encore la route, mais tu as besoin de reprendre la main" },
    { en: "You want concrete coaching, not comfort coaching", fr: "Tu cherches un accompagnement concret, pas du coaching confort" },
    { en: "You don't have access to coaching through your company", fr: "Tu n'as pas accès au coaching via ton entreprise" },
  ];

  const features = [
    { label: t("12 sessions / 90 days", "12 sessions / 90 jours"), standard: true, augmented: true },
    { label: t("Positive Intelligence foundations (1-hour masterclass + programme principles)", "Fondamentaux de la Positive Intelligence (masterclass d'1h + principes du programme)"), standard: true, augmented: true },
    { label: t("Personalised action plan", "Plan d'action personnalisé"), standard: true, augmented: true },
    { label: t("Weekly follow-up emails", "Emails de suivi hebdomadaires"), standard: true, augmented: true },
    { label: t("Flow Principles (Steven Kotler)", "Flow Principles (Steven Kotler)"), standard: false, augmented: true },
    { label: t("AI tools between sessions (to support your progress)", "Outils IA entre les sessions (pour soutenir ta progression)"), standard: false, augmented: true },
    { label: t("2 follow-up sessions (D+30, D+60)", "2 sessions de suivi (J+30, J+60)"), standard: false, augmented: true },
    { label: t("Async support via WhatsApp", "Support asynchrone via WhatsApp"), standard: false, augmented: true },
  ];

  const testimonialsEn = [
    { quote: "Six months that changed how I work. I came out stronger, with the ability to step back, delegate effectively, and build a clearer vision for my team.", name: "Armelle L.", role: "Board Director, HR Consulting, Finland", image: armelleImg },
    { quote: "Raphaelle has a real talent for guiding participants to work with trust and depth. Her workshop is an extremely effective method for becoming fully aware of your impact on the people you manage.", name: "Jean-Philippe B.", role: "Managing Director, France", image: jphilippeImg },
    { quote: "Working with Raphaelle has been a genuine journey. Her ability to engage on deep topics, using NLP tools to clear old patterns, makes each session valuable and relatable.", name: "Maud P.", role: "Linguist, UK", image: maudImg },
  ];

  const testimonialsFr = [
    { quote: "Un soutien formidable pour retrouver mon intelligence positive quand les défis de la vie m'ont ébranlée. Son expérience et son professionnalisme font une vraie différence.", name: "Marie-Zoé B.", role: "Board Director, HR Consulting, Finlande", image: marieZoeImg },
    { quote: "Sa capacité d'écoute remarquable a posé les bases d'une expérience de coaching vraiment personnalisée. Sa façon de mêler idées pertinentes et perspectives nouvelles rend chaque session unique et transformatrice.", name: "Sam E.", role: "Account Manager, UK", image: samImg },
    { quote: "Travailler avec Raphaelle a été incroyablement enrichissant. Elle m'a aidée à construire de bonnes habitudes, à définir une vision stratégique pour mon activité et à la faire avancer sans m'épuiser.", name: "Katie L.", role: "Partner, ESG, UK", image: katieImg },
    { quote: "8 mois à travailler ensemble sur des sujets variés et la capacité d'adapter l'accompagnement au fil des besoins a été un réel plaisir. Raphaelle est toujours disponible et prête à s'adapter.", name: "Loïc D.", role: "HRIS Manager, Pernod Ricard France", image: loicImg },
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
              {t("90-day precision mental fitness for leaders under pressure.", "90 jours de mental fitness haute précision pour dirigeants et managers sous pression.")}
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
                "Tu performes. Mais tu tiens à la force du poignet. La charge mentale monte, les arbitrages s'accumulent, la clarté recule. Tu sais que ça ne peut pas durer comme ça."
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
                "On ne supprime pas la pression. On change la façon dont ton mental et ton leadership y répondent. C'est ça, le mental fitness haute précision."
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
                "Places limitées. J'accompagne un nombre restreint de personnes à la fois pour garantir la qualité."
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
                <TestimonialCard quote={t.quote} name={t.name} role={t.role} image={(t as any).image} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <WaveTransition from="#fdf8f0" to="#384c58" />

      <CTASection
        titleEn="Ready to reclaim control?"
        titleFr="Prêt(e) à reprendre la main ?"
        subtitleEn="Book a free 30-min Clarity Call. No pitch, no pressure. Just a diagnostic and an honest conversation."
        subtitleFr="Book un Clarity Call de 30 minutes. Gratuit, sans engagement. Un mini-diagnostic et une conversation honnête."
        variant="teal"
      />
    </main>
  );
};

export default Programme;
