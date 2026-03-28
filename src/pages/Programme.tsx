import { useLang } from "@/i18n/LanguageContext";
import WaveTransition from "@/components/WaveTransition";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { Check, Minus, Sparkles } from "lucide-react";
import loicImg from "@/assets/Loic.jpeg";
import katieImg from "@/assets/katie.jpeg";
import samImg from "@/assets/Sam.jpeg";
import marieZoeImg from "@/assets/Marie_Zoe.jpeg";
import jphilippeImg from "@/assets/JPhilippe.jpeg";
import maudImg from "@/assets/Maud.jpeg";
import armelleImg from "@/assets/Armelle.jpeg";
import saraImg from "@/assets/Sara.png";
import elodieImg from "@/assets/Elodie.jpeg";
import valerieImg from "@/assets/Valerie.png";
import yannickImg from "@/assets/Yannick.jpeg";
import laetitiaImg from "@/assets/Laetitia.jpeg";
import delphineImg from "@/assets/Delphine.jpeg";
import mailysImg from "@/assets/Mailys.jpeg";
import solenneImg from "@/assets/Solenne.jpeg";
import lucileImg from "@/assets/Lucile.jpeg";
import natasaImg from "@/assets/Natasa.jpeg";

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
    { quote: "8 months working together on a wide range of topics, and the ability to adapt the coaching as needs evolved was a real pleasure. Raphaelle is always available and ready to adjust.", name: "Loïc D.", role: "HRIS Manager, Pernod Ricard France", image: loicImg },
    { quote: "In just a few months, with a highly actionable toolkit, I was able to shift my mindset and move past certain sticking points, with tangible positive outcomes: stronger client presence, optimised organisation. Raphaelle manages to challenge you gently and identify areas for growth you wouldn't have spotted on your own.", name: "Sara Z.", role: "Sustainable Finance, SocGen, Paris", image: saraImg },
    { quote: "The goal of this coaching was to strengthen my ability to delegate, improve my cross-functional management posture, and clarify my managerial identity. The benefits have been significant and lasting, both in my professional practices and in my quality of life at work.", name: "Elodie V.", role: "Payroll Manager, France", image: elodieImg },
    { quote: "At key moments in a career, surrounding yourself with the right people makes all the difference. Raphaelle helped me step back and refine my leadership posture. My main takeaway: the importance of a caring outside perspective that brings out your own solutions.", name: "Valérie L.", role: "Director, Banque Populaire", image: valerieImg },
    { quote: "From our very first session, Raphaelle's attentiveness and insightfulness stood out. She created a safe and open environment that encouraged me to explore my challenges. Each session was thoughtfully tailored to my needs, and she helped me navigate various situations with greater confidence.", name: "Yannick D.", role: "Global Chief Underwriting Officer, Switzerland", image: yannickImg },
    { quote: "Thanks to Raphaelle, I gained confidence and assurance in my role. She created a simple yet perfectly calibrated space for exchange, where I immediately felt at ease. Her perspective and her questions truly helped me grow.", name: "Laetitia R.", role: "Marketing & Communications Manager, France", image: laetitiaImg },
    { quote: "Raphaelle helped me better navigate my day-to-day. A very positive experience that allowed me to grow in my current role.", name: "Yves-Michel C.", role: "Team Manager, Belgium" },
    { quote: "Raphaelle offered me various tools that I easily adopted in my daily life. Her coaching was a source of tremendous learning and growth, with a genuine understanding of my needs, my journey and my challenges.", name: "Lucile R.", role: "Global Communication Manager, France", image: lucileImg },
    { quote: "This coaching helped me grow, regain balance and self-confidence. Thank you for the rich exchanges, the practical and concrete exercises, and the reading recommendations.", name: "Delphine V.", role: "HSE Expert, France", image: delphineImg },
    { quote: "Raphaelle supported me in a space of trust, with efficiency and kindness, during a major transition period. Her listening skills, wise advice and constant support were decisive in my growth.", name: "Maïlys B.", role: "Product Manager, France", image: mailysImg },
    { quote: "Her gentle and open-minded coaching brought me a great deal. She knows how to listen and use all the tools at her disposal in a very effective and pragmatic way.", name: "Solenne V.", role: "Director, France", image: solenneImg },
    { quote: "Working with Raphaelle is an investment in learning how to own your greatness. Her creativity, tools and resources create a safe space where transformation becomes possible.", name: "Natasa P.", role: "Homeopath and Lecturer, UK", image: natasaImg },
  ];

  const testimonialsFr = [
    { quote: "Un soutien formidable pour retrouver mon intelligence positive quand les défis de la vie m'ont ébranlée. Son expérience et son professionnalisme font une vraie différence.", name: "Marie-Zoé B.", role: "Board Director, HR Consulting, Finlande", image: marieZoeImg },
    { quote: "Sa capacité d'écoute remarquable a posé les bases d'une expérience de coaching vraiment personnalisée. Sa façon de mêler idées pertinentes et perspectives nouvelles rend chaque session unique et transformatrice.", name: "Sam E.", role: "Account Manager, UK", image: samImg },
    { quote: "Travailler avec Raphaelle a été incroyablement enrichissant. Elle m'a aidée à construire de bonnes habitudes, à définir une vision stratégique pour mon activité et à la faire avancer sans m'épuiser.", name: "Katie L.", role: "Partner, ESG, UK", image: katieImg },
    { quote: "8 mois à travailler ensemble sur des sujets variés et la capacité d'adapter l'accompagnement au fil des besoins a été un réel plaisir. Raphaelle est toujours disponible et prête à s'adapter.", name: "Loïc D.", role: "HRIS Manager, Pernod Ricard France", image: loicImg },
    { quote: "En quelques mois et aidée d'une boîte à outils très actionnable, j'ai pu faire évoluer mon mindset et dépasser certains points de blocage, avec des retombées positives concrètes : meilleure posture client, organisation optimisée. Raphaelle parvient à challenger en douceur et identifier des axes de travail qu'on n'aurait pas identifiés seul.", name: "Sara Z.", role: "Sustainable Finance, SocGen, Paris", image: saraImg },
    { quote: "Cet accompagnement avait pour objectifs de renforcer ma capacité à déléguer, d'améliorer ma posture en management transverse et de clarifier mon identité managériale. Les bénéfices sont significatifs et durables, tant dans mes pratiques professionnelles que dans ma qualité de vie au travail.", name: "Elodie V.", role: "Payroll Manager, France", image: elodieImg },
    { quote: "Dans les moments clés d'une trajectoire, s'entourer des bonnes personnes fait toute la différence. Raphaelle m'a permis de prendre du recul et d'affiner ma posture. Ce que j'en retiens : l'importance d'un regard extérieur bienveillant qui fait émerger mes propres solutions.", name: "Valérie L.", role: "Directrice, Banque Populaire", image: valerieImg },
    { quote: "Dès notre première session, l'attention et la perspicacité de Raphaelle se sont démarquées. Elle a créé un environnement sûr et ouvert qui m'a encouragé à explorer mes défis. Chaque session était soigneusement adaptée à mes besoins, et elle m'a aidé à naviguer différentes situations avec plus de confiance.", name: "Yannick D.", role: "Global Chief Underwriting Officer, Suisse", image: yannickImg },
    { quote: "Grâce à Raphaelle, j'ai gagné en confiance et en assurance dans mon rôle. Elle a su créer un cadre d'échange simple et très juste, dans lequel je me suis tout de suite sentie à l'aise. Son regard et ses questions m'ont vraiment aidée à progresser.", name: "Laetitia R.", role: "Responsable Marketing et Communication, France", image: laetitiaImg },
    { quote: "Raphaelle m'a permis de mieux appréhender mon quotidien. Une très bonne expérience qui m'a permis d'évoluer sur mon poste actuel.", name: "Yves-Michel C.", role: "Responsable d'équipe, Belgique" },
    { quote: "Raphaelle m'a proposé divers outils que j'ai facilement adoptés au quotidien. Son accompagnement a été source de beaucoup d'apprentissage et d'évolution, avec une vraie compréhension de mes besoins, de mon parcours et de mes challenges.", name: "Lucile R.", role: "Global Communication Manager, France", image: lucileImg },
    { quote: "Cet accompagnement m'a permis de grandir, de retrouver un équilibre et une confiance en moi. Merci pour les échanges riches, les exercices pratiques et concrets, et les conseils de lectures.", name: "Delphine V.", role: "Expert HSE, France", image: delphineImg },
    { quote: "Raphaelle m'a accompagnée dans un espace de confiance avec efficacité et bienveillance durant une période de transition importante. Sa capacité d'écoute, ses conseils avisés et son soutien constant ont été déterminants dans mon évolution.", name: "Maïlys B.", role: "Product Manager, France", image: mailysImg },
    { quote: "Son accompagnement en douceur et avec beaucoup d'ouverture m'a beaucoup apporté. Elle sait écouter et utiliser tous les outils qu'elle a à sa disposition de manière très efficace et pragmatique.", name: "Solenne V.", role: "Director, France", image: solenneImg },
    { quote: "Travailler avec Raphaelle, c'est investir dans l'apprentissage de sa propre grandeur. Sa créativité, ses outils et ses ressources créent un espace sûr où la transformation devient possible.", name: "Natasa P.", role: "Homéopathe et enseignante, UK", image: natasaImg },
  ];

  const testimonials = lang === "fr" ? testimonialsFr : testimonialsEn;

  return (
    <main>
      {/* Hero — white with subtle bottom vignette */}
      <section className="py-20 md:py-28 text-center relative" style={{ backgroundColor: "#ffffff" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(37 71% 96% / 0.5) 0%, transparent 70%)" }} />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <ScrollFadeIn>
            <p className="font-body text-sm uppercase tracking-[4px] text-muted-foreground mb-4">
              {t("Precision coaching programme", "Programme de coaching haute précision")}
            </p>
            <h1 className="section-title mb-6 text-3xl md:text-4xl">FROM PRESSURE TO CLARITY</h1>
            <div className="w-12 h-[2px] mx-auto mb-6" style={{ background: "linear-gradient(90deg, hsl(37 64% 48%), hsl(37 68% 63%))" }} />
            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {t("90-day precision mental fitness for leaders under pressure.", "90 jours de fitness mental haute précision pour dirigeants et managers sous pression.")}
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
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <div className="bg-card rounded-2xl px-8 py-10 md:px-12 md:py-12" style={{ boxShadow: "0 4px 30px -8px hsl(204 22% 28% / 0.06)" }}>
              <p className="font-body text-foreground text-lg leading-relaxed">
                {t(
                  "You're performing. But you're running on willpower. The mental load keeps building, decisions pile up, and clarity fades. You know this can't go on.",
                  "Tu performes. Mais tu tiens à bout de bras. La charge mentale augmente, les arbitrages s'accumulent, la clarté mentale diminue. Tu sais que ça ne peut pas durer comme ça."
                )}
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#fdf8f0" to="#ffffff" />

      {/* Promise */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <div className="bg-card rounded-2xl px-8 py-10 md:px-12 md:py-12" style={{ boxShadow: "0 4px 30px -8px hsl(37 60% 48% / 0.08)" }}>
              <p className="font-body text-foreground text-lg leading-relaxed font-medium">
                {t(
                  "We don't eliminate pressure. We change the way your mind and leadership respond to it. That's precision mental fitness.",
                  "On ne supprime pas la pression. On change la façon dont ton mental et ton leadership y répondent. C'est ça, le fitness mental haute précision."
                )}
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#fdf8f0" />

      {/* For who */}
      <section className="bg-sw-cream py-16 md:py-20">
        <div className="container max-w-3xl mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="section-title text-center mb-10">{t("This programme is for you if...", "Ce programme est pour toi si...")}</h2>
            <div className="bg-card rounded-2xl p-8 md:p-10" style={{ boxShadow: "0 4px 30px -8px hsl(204 22% 28% / 0.06)" }}>
              <ul className="space-y-4">
                {forYouItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-foreground">
                    <Check size={18} className="text-sw-teal mt-0.5 flex-shrink-0" />
                    {t(item.en, item.fr)}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Pricing — slightly warm off-white for contrast */}
      <section className="py-20 md:py-24" style={{ backgroundColor: "#faf9f7" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="section-title text-center mb-4">{t("Choose your path", "Choisis ta formule")}</h2>
            <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
              {t("Two formats, same rigour. Pick the level of support that fits your needs.", "Deux formats, même rigueur. Choisis le niveau d'accompagnement qui te correspond.")}
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Standard */}
            <ScrollFadeIn>
              <div
                className="bg-card rounded-2xl p-8 md:p-10 text-center transition-all duration-300"
                style={{
                  border: "1px solid hsl(204 22% 28% / 0.1)",
                  boxShadow: "0 2px 20px -6px hsl(204 22% 28% / 0.06)",
                }}
              >
                <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-xl mb-2">STANDARD</h3>
                <div className="text-3xl font-display font-bold text-sw-teal mb-1">2 000 EUR</div>
                <p className="text-xs text-muted-foreground font-body mb-8">3x 667 EUR/{t("month", "mois")}</p>
                <div className="space-y-3 text-left">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-body">
                      {f.standard ? <Check size={16} className="text-sw-teal flex-shrink-0" /> : <Minus size={16} className="text-muted-foreground/30 flex-shrink-0" />}
                      <span className={f.standard ? "text-foreground" : "text-muted-foreground/30"}>{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            {/* Augmented — elevated */}
            <ScrollFadeIn>
              <div
                className="bg-card rounded-2xl p-8 md:p-10 text-center relative transition-all duration-300"
                style={{
                  border: "1.5px solid hsl(37 64% 48% / 0.35)",
                  boxShadow: "0 8px 40px -8px hsl(37 60% 48% / 0.12), 0 2px 12px -4px hsl(37 60% 48% / 0.06)",
                }}
              >
                {/* Recommended badge */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider text-primary-foreground flex items-center gap-1.5"
                  style={{ background: "linear-gradient(135deg, hsl(37 64% 48%), hsl(37 68% 58%))" }}
                >
                  <Sparkles size={12} />
                  {t("Recommended", "Recommandé")}
                </div>

                <h3
                  className="font-display font-bold uppercase tracking-[2px] text-xl mb-2 mt-2"
                  style={{ color: "hsl(37 64% 42%)" }}
                >
                  AUGMENTED
                </h3>
                <div className="text-3xl font-display font-bold text-sw-teal mb-1">3 500 EUR</div>
                <p className="text-xs text-muted-foreground font-body mb-8">3x 1 167 EUR/{t("month", "mois")}</p>
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
            <p className="text-center text-sm text-muted-foreground font-body italic mt-10">
              {t(
                "Limited availability. I work with a small number of clients at a time to guarantee quality.",
                "Places limitées. J'accompagne un nombre restreint de personnes à la fois pour garantir la qualité."
              )}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#faf9f7" to="#fdf8f0" />

      {/* Testimonials */}
      <section className="bg-sw-cream py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="section-title text-center mb-12">{t("What they say", "Ce qu'ils en disent")}</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {[0, 1, 2].map((col) => (
              <div key={col} className="flex flex-col gap-6">
                {testimonials
                  .filter((_, i) => i % 3 === col)
                  .map((t, i) => (
                    <ScrollFadeIn key={i}>
                      <TestimonialCard quote={t.quote} name={t.name} role={t.role} image={(t as any).image} />
                    </ScrollFadeIn>
                  ))}
              </div>
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
