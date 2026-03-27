import { useLang } from "@/i18n/LanguageContext";
import WaveTransition from "@/components/WaveTransition";
import SocialProof from "@/components/SocialProof";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import armelleImg from "@/assets/Armelle.jpeg";


const Home = () => {
  const { t } = useLang();

  const testimonialsEn = [
    { quote: "Raphaelle has been of tremendous support to regain my positive intelligence when shaken by life's challenges. Her experience and professionalism make a real difference.", name: "Armelle L.", role: "Board Director, HR Consulting, Finland", image: armelleImg },
    { quote: "Raphaelle's remarkable listening skills set the foundation for a truly personalised coaching experience. Her ability to blend great ideas and insightful perspectives makes each session uniquely transformative.", name: "Sam L.", role: "Account Manager, UK" },
    { quote: "Working with Raphaelle has been incredibly rewarding. She helped me build good habits, shape a strategic vision for my business, and navigate its challenges without burning out.", name: "Katie L.", role: "Partner, ESG, UK" },
  ];

  const testimonialsFr = [
    { quote: "Ces six mois ont été une vraie parenthèse dans mon quotidien managérial. J'en ressors plus forte. J'ai acquis la capacité de prendre du recul, mieux déléguer, et travailler la vision de mon management.", name: "Armelle L.", role: "Manager Commerciale, Arval BNP Paribas", image: armelleImg },
    { quote: "Raphaelle sait avec beaucoup de talent et de délicatesse amener les participants à travailler en confiance et en profondeur.", name: "Jean-Philippe B.", role: "Managing Director, France" },
    { quote: "Travailler avec Raphaelle a été un vrai voyage, personnellement et professionnellement. Sa capacité à engager sur des sujets profonds rend chaque session précieuse.", name: "Maud P.", role: "Linguiste, UK" },
  ];

  const testimonials = t("en", "fr") === "fr" ? testimonialsFr : testimonialsEn;

  const pillars = [
    {
      title: t("CLARITY", "CLARTÉ"),
      line1: t("Cut through the noise", "Reprendre la main sur ce qui compte"),
      line2: t("Focus on what matters", "Voir clairement ce qui importe"),
    },
    {
      title: t("SUSTAINABLE PERFORMANCE", "PERFORMANCE DURABLE"),
      line1: t("Perform without burning out", "Performer sans se couper du vivant"),
      line2: "",
    },
    {
      title: t("PRACTICAL TOOLS", "OUTILS CONCRETS"),
      line1: t("Methods you use from day one", "Des outils applicables dès la première session"),
      line2: "",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 text-center" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-4xl mx-auto px-4">
          <ScrollFadeIn>
            <div className="mb-6">
              <h1 className="font-display font-bold uppercase tracking-[3px] text-sw-teal text-4xl md:text-6xl leading-tight">
                {t("LESS STRESS", "MOINS DE STRESS")}
              </h1>
              <h1 className="font-display font-bold uppercase tracking-[3px] text-sw-teal text-4xl md:text-6xl leading-tight">
                {t("MORE IMPACT", "PLUS D'IMPACT")}
              </h1>
              <p className="font-display font-bold uppercase tracking-[8px] md:tracking-[12px] text-lg md:text-xl mt-2" style={{ color: "#c5922f" }}>
                {t("A BETTER WAY TO LEAD", "UNE MEILLEURE FAÇON DE DIRIGER")}
              </p>
            </div>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {t(
                "Coaching for leaders who perform under pressure and want to keep it that way - without burning out.",
                "Coaching exécutif pour dirigeants et managers sous pression qui veulent rester au top sans se perdre."
              )}
            </p>
            <a href="https://calendly.com/strengthwise/discovery" target="_blank" rel="noopener noreferrer" className="btn-gold mb-12 inline-flex">
              {t("Book a Clarity Call", "Book un Clarity Call")}
            </a>
          </ScrollFadeIn>

          {/* Video placeholder */}
          <ScrollFadeIn>
            <div className="mx-auto max-w-[380px] rounded-xl overflow-hidden" style={{ backgroundColor: "#2e3f4a" }}>
              <video
                key={t("en", "fr")}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto rounded-xl"
                src={t("/videos/CoachHub_Intro_Eng.mp4", "/videos/CoachHub_Intro_Fren.mp4")}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#384c58" />

      {/* 3 Pillars */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#384c58" }}>
        <div className="container max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
          {pillars.map((p, i) => (
            <ScrollFadeIn key={i}>
              <div className="text-center">
                <div className="w-3 h-3 rounded-full mx-auto mb-4" style={{ backgroundColor: "#c5922f" }} />
                <h3 className="font-display font-bold text-white uppercase tracking-[2px] text-lg mb-3">{p.title}</h3>
                <p className="text-white/80 text-sm font-body leading-relaxed">{p.line1}</p>
                {p.line2 && <p className="text-white/80 text-sm font-body leading-relaxed">{p.line2}</p>}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      <WaveTransition from="#384c58" to="#fdf8f0" />

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

      <SocialProof />

      <WaveTransition from="#fdf8f0" to="#ffffff" />

      <CTASection
        titleEn="Ready to lead differently?"
        titleFr="Prêt(e) à reprendre la main ?"
        subtitleEn="Book your free 30-min Clarity Call. No pitch. Just an honest conversation."
        subtitleFr="Book un Clarity Call gratuit de 30 minutes. Sans engagement. Une vraie conversation."
        variant="teal"
      />
    </main>
  );
};

export default Home;
