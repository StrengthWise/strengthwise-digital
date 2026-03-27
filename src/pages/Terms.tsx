import { useLang } from "@/i18n/LanguageContext";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Terms = () => {
  const { t } = useLang();

  const sectionsEn = [
    { title: "1. Your Well-Being Matters", text: "You are responsible for your physical, mental, and emotional well-being during our sessions. You may discontinue our services at any time." },
    { title: "2. What Coaching Is", text: "Coaching is a collaborative process to help you create and achieve personal, professional, or business goals." },
    { title: "3. What Consulting Is", text: "Consulting covers leadership, strategy, marketing, financial planning, human resources, and team dynamics. Sessions may include brainstorming, strategy development, and actionable recommendations." },
    { title: "4. Confidentiality", text: "Your information is held confidential unless required by law or agreed otherwise in writing." },
    { title: "5. Professional Guidance", text: "Coaching and consulting is not a substitute for legal, medical, financial, or other professional advice. Decisions remain yours." },
    { title: "6. Fees and Services", text: "Fees are paid in advance unless specified otherwise. Rescheduling requires 24 hours notice." },
    { title: "7. Collaborative Approach", text: "Successful coaching requires your active participation. If the process is not working as desired, please communicate openly." },
    { title: "8. Prior History and Mental Health", text: "Please disclose any past or present psychological or psychiatric treatment. If mental health difficulties arise, we will discuss and refer as needed." },
    { title: "9. Termination and Postponement", text: "Coaching continues for the contracted period. Termination may occur under extenuating circumstances, with possible postponement up to six months." },
    { title: "10. Your Acknowledgement", text: "Payment indicates full acceptance of these terms, our Code of Ethics, and our Privacy Policy." },
  ];

  const sectionsFr = [
    { title: "1. Votre bien-être compte", text: "Vous êtes responsable de votre bien-être physique, mental et émotionnel pendant nos sessions. Vous pouvez interrompre nos services à tout moment." },
    { title: "2. Qu'est-ce que le coaching", text: "Le coaching est un processus collaboratif pour vous aider à créer et atteindre vos objectifs personnels, professionnels ou d'entreprise." },
    { title: "3. Qu'est-ce que le conseil", text: "Le conseil couvre le leadership, la stratégie, le marketing, la planification financière, les ressources humaines et la dynamique d'équipe. Les sessions peuvent inclure du brainstorming, du développement stratégique et des recommandations actionnables." },
    { title: "4. Confidentialité", text: "Vos informations sont tenues confidentielles sauf obligation légale ou accord écrit contraire." },
    { title: "5. Accompagnement professionnel", text: "Le coaching et le conseil ne remplacent pas un avis juridique, médical, financier ou tout autre avis professionnel. Les décisions vous appartiennent." },
    { title: "6. Honoraires et services", text: "Les honoraires sont payés à l'avance sauf indication contraire. Tout report nécessite un préavis de 24 heures." },
    { title: "7. Approche collaborative", text: "Un coaching réussi nécessite votre participation active. Si le processus ne fonctionne pas comme souhaité, communiquez ouvertement." },
    { title: "8. Antécédents et santé mentale", text: "Veuillez signaler tout traitement psychologique ou psychiatrique passé ou en cours. En cas de difficultés de santé mentale, nous en discuterons et vous orienterons si nécessaire." },
    { title: "9. Résiliation et report", text: "Le coaching se poursuit pendant la durée contractée. La résiliation peut intervenir dans des circonstances exceptionnelles, avec un report possible jusqu'à six mois." },
    { title: "10. Votre acceptation", text: "Le paiement vaut acceptation pleine et entière de ces conditions, de notre Code de déontologie et de notre Politique de confidentialité." },
  ];

  const sections = t("en", "fr") === "fr" ? sectionsFr : sectionsEn;

  return (
    <main className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="container max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <h1 className="section-title mb-2">{t("THE WAY WE DO BUSINESS", "NOTRE FAÇON DE TRAVAILLER")}</h1>
          <h2 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-lg mb-8">
            {t("COACHING AND CONSULTING AGREEMENT", "ACCORD DE COACHING ET DE CONSEIL")}
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            {t(
              "Welcome to our coaching and consulting services. Before we begin, please read and understand the terms below.",
              "Bienvenue dans nos services de coaching et de conseil. Avant de commencer, veuillez lire et comprendre les conditions ci-dessous."
            )}
          </p>
        </ScrollFadeIn>

        {sections.map((s, i) => (
          <ScrollFadeIn key={i}>
            <div className="mb-6">
              <h3 className="font-display font-bold text-sw-teal text-base mb-1">{s.title}</h3>
              <p className="font-body text-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          </ScrollFadeIn>
        ))}

        <p className="font-body text-sm text-muted-foreground mt-8">Questions : info@strengthwise.co</p>
      </div>
    </main>
  );
};

export default Terms;
