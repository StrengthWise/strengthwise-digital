import { useLang } from "@/i18n/LanguageContext";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Ethics = () => {
  const { t } = useLang();

  const principlesEn = [
    { title: "Equality", text: "We respect all cultures, ethnicities, national origins, genders, sexual orientations, gender identities, ages, religions, and abilities. We do not reject any client on these grounds." },
    { title: "Confidentiality", text: "Everything discussed with clients is held in strict confidence, unless information poses a risk to safety or we receive written consent to share." },
    { title: "Personal Growth", text: "We commit to ongoing learning and professional development to serve our clients at the highest level." },
    { title: "Professional Relationship", text: "Our relationship with clients remains strictly professional." },
    { title: "Payments", text: "We are fully transparent about fees from the start. No hidden charges." },
    { title: "Compassion", text: "We respect each client's identity, values, beliefs, and stage of growth." },
    { title: "Communication", text: "Our communication is clear and respectful at all times." },
    { title: "Scope of Practice", text: "We refer clients to other professionals immediately when a situation falls outside our scope of practice." },
  ];

  const principlesFr = [
    { title: "Égalité", text: "Nous respectons toutes les cultures, ethnies, origines nationales, genres, orientations sexuelles, identités de genre, âges, religions et capacités. Nous ne refusons aucun client sur ces critères." },
    { title: "Confidentialité", text: "Tout ce qui est discuté avec les clients est tenu en stricte confidence, sauf si l'information présente un risque pour la sécurité ou si nous recevons un consentement écrit pour la partager." },
    { title: "Développement personnel", text: "Nous nous engageons dans un apprentissage continu et un développement professionnel pour servir nos clients au plus haut niveau." },
    { title: "Relation professionnelle", text: "Notre relation avec les clients reste strictement professionnelle." },
    { title: "Paiements", text: "Nous sommes totalement transparents sur les honoraires dès le départ. Aucun frais caché." },
    { title: "Compassion", text: "Nous respectons l'identité, les valeurs, les croyances et le stade de développement de chaque client." },
    { title: "Communication", text: "Notre communication est claire et respectueuse en toutes circonstances." },
    { title: "Champ de compétences", text: "Nous orientons immédiatement les clients vers d'autres professionnels lorsqu'une situation dépasse notre champ de compétences." },
  ];

  const principles = t("en", "fr") === "fr" ? principlesFr : principlesEn;

  return (
    <main className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="container max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <h1 className="section-title mb-4">{t("CODE OF ETHICS", "CODE DE DÉONTOLOGIE")}</h1>
          <p className="font-body text-muted-foreground mb-8">
            {t(
              "These are the principles that guide our work as coaches.",
              "Voici les principes qui guident notre travail en tant que coachs."
            )}
          </p>
        </ScrollFadeIn>

        {principles.map((p, i) => (
          <ScrollFadeIn key={i}>
            <div className="mb-6">
              <h3 className="font-display font-bold text-sw-teal text-base mb-1">{p.title}</h3>
              <p className="font-body text-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </main>
  );
};

export default Ethics;
