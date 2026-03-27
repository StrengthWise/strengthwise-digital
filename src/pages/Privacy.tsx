import { useLang } from "@/i18n/LanguageContext";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Privacy = () => {
  const { t } = useLang();

  const sectionsEn = [
    { title: "What We Collect", text: "We collect your name, contact details, and any information you provide through our online forms and assessments. This helps us personalise your experience and communicate effectively." },
    { title: "How We Use It", text: "Your data is used solely to deliver our coaching and consulting services, send relevant communications, and improve our offerings." },
    { title: "AI Tools", text: "In the course of our work, we may use AI-assisted tools such as GPT-based assistants to support session preparation, note-taking, or content creation. When this occurs, we take care not to input personally identifiable information without your knowledge. You may request that your data not be used in conjunction with any AI tool at any time by emailing info@strengthwise.co." },
    { title: "How We Store It", text: "Your data is stored on Typeform (EU-based, GDPR compliant) and Airtable (US-based, protected under Standard Contractual Clauses for international data transfers). Both platforms use encryption, access restrictions, and two-factor authentication." },
    { title: "Newsletter and Communications", text: "If you subscribe to our newsletter, your email is managed via our current email platform. You can unsubscribe at any time using the link in any email." },
    { title: "How Long We Keep It", text: "We retain your data for as long as our coaching relationship is active. Once there has been no contact for 12 months, your data is flagged for deletion in our annual review. Data is held for a maximum of two years after our last interaction. You may request deletion at any time." },
    { title: "Cookies", text: "This website may use cookies for basic functionality and anonymous analytics. You can refuse non-essential cookies at any time via your browser settings or our cookie banner." },
    { title: "Your Rights", text: "You can ask to see, correct, or delete your data at any time. Email: info@strengthwise.co" },
  ];

  const sectionsFr = [
    { title: "Ce que nous collectons", text: "Nous collectons votre nom, vos coordonnées et toute information que vous fournissez via nos formulaires et évaluations en ligne. Cela nous permet de personnaliser votre expérience et de communiquer efficacement." },
    { title: "Comment nous les utilisons", text: "Vos données sont utilisées uniquement pour fournir nos services de coaching et de conseil, envoyer des communications pertinentes et améliorer nos offres." },
    { title: "Outils d'intelligence artificielle", text: "Dans le cadre de notre travail, nous pouvons utiliser des outils assistés par l'IA, tels que des assistants basés sur GPT, pour soutenir la préparation des sessions, la prise de notes ou la création de contenu. Lorsque cela se produit, nous veillons à ne pas saisir d'informations personnellement identifiables sans votre connaissance. Vous pouvez demander à tout moment que vos données ne soient pas utilisées en lien avec un outil d'IA en écrivant à info@strengthwise.co." },
    { title: "Comment nous les stockons", text: "Vos données sont stockées sur Typeform (basé dans l'UE, conforme au RGPD) et Airtable (basé aux États-Unis, protégé par les Clauses Contractuelles Types pour les transferts internationaux de données). Les deux plateformes utilisent le chiffrement, des restrictions d'accès et l'authentification à deux facteurs." },
    { title: "Newsletter et communications", text: "Si vous vous abonnez à notre newsletter, votre email est géré via notre plateforme de messagerie actuelle. Vous pouvez vous désabonner à tout moment en utilisant le lien présent dans chaque email." },
    { title: "Durée de conservation", text: "Nous conservons vos données tant que notre relation de coaching est active. En l'absence de contact pendant 12 mois, vos données sont signalées pour suppression lors de notre revue annuelle. Les données sont conservées au maximum deux ans après notre dernière interaction. Vous pouvez demander la suppression à tout moment." },
    { title: "Cookies", text: "Ce site web peut utiliser des cookies pour les fonctionnalités de base et des analyses anonymes. Vous pouvez refuser les cookies non essentiels à tout moment via les paramètres de votre navigateur ou notre bannière de cookies." },
    { title: "Vos droits", text: "Vous pouvez demander à consulter, corriger ou supprimer vos données à tout moment. Email : info@strengthwise.co" },
  ];

  const sections = t("en", "fr") === "fr" ? sectionsFr : sectionsEn;

  return (
    <main className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="container max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <h1 className="section-title mb-4">{t("PRIVACY POLICY", "POLITIQUE DE CONFIDENTIALITÉ")}</h1>
          <p className="font-body text-foreground mb-8">
            {t(
              "Hello, I'm Raphaelle Hernu, founder of Strengthwise. I manage your data directly.",
              "Bonjour, je suis Raphaelle Hernu, fondatrice de StrengthWise. Je gère tes données directement."
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

        <p className="font-body text-xs text-muted-foreground mt-8 italic">
          {t(
            "We review this policy annually. Any changes will be shared on our website and directly with you by email.",
            "Nous révisons cette politique annuellement. Tout changement sera communiqué sur notre site web et directement par email."
          )}
        </p>
      </div>
    </main>
  );
};

export default Privacy;
