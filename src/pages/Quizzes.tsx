import { useLang } from "@/i18n/LanguageContext";
import ScrollFadeIn from "@/components/ScrollFadeIn";

interface Quiz {
  title: string;
  titleFr?: string;
  descEn: string;
  descFr: string;
  linkEn: string;
  linkFr: string;
}

const quizzes: Quiz[] = [
  { title: "DISC", descEn: "How do you communicate, decide, and influence? The DISC model reveals your dominant behavioural style and how to work with others more effectively.", descFr: "Comment communiques-tu, decides-tu, influes-tu ? Le modele DISC revele ton style comportemental dominant et comment travailler plus efficacement avec les autres.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/AWNSegUX", linkFr: "https://n3x9yc2lsn3.typeform.com/to/VXwJBGCB" },
  { title: "Meet Your Saboteurs", titleFr: "Rencontre tes Saboteurs", descEn: "What's the voice in your head that holds you back? Identify your mental saboteurs - the patterns that undermine your performance under pressure.", descFr: "Quelle est la voix dans ta tete qui te freine ? Identifie tes saboteurs mentaux - les schemas qui minent ta performance sous pression.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/nfX6K4Xo", linkFr: "https://n3x9yc2lsn3.typeform.com/to/nt2W1JTD" },
  { title: "Mental Fitness Score", descEn: "How strong is your mental muscle right now? This is your baseline - the starting point for everything we'll work on.", descFr: "Ou en est ton mental fitness aujourd'hui ? C'est ton point de depart, la base de tout ce sur quoi on va travailler.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/nozddA5i", linkFr: "https://n3x9yc2lsn3.typeform.com/to/uGtHIRDD" },
  { title: "Performance SustainAbility", descEn: "Break performance down into 8 key dimensions. See where you're solid and where the cracks are forming.", descFr: "Decortique ta performance en 8 dimensions cles. Vois ou tu es solide et ou les fissures apparaissent.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/rF7VGTax", linkFr: "https://n3x9yc2lsn3.typeform.com/to/pQB85riu" },
  { title: "Modus Operandi", descEn: "How do you naturally take action - not think, act? Inspired by the Kolbe model, this reveals your instinctive operating style.", descFr: "Comment agis-tu naturellement - pas ce que tu penses, ce que tu fais ? Inspire du modele Kolbe, ce quiz revele ton style operatoire instinctif.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/GmMOaw1J", linkFr: "https://n3x9yc2lsn3.typeform.com/to/zuZF9UCV" },
  { title: "Delegat'Score", descEn: "Are you delegating, or just redistributing your own workload? Assess your real delegation practices.", descFr: "Tu delegues, ou tu redistribues juste ta propre charge ? Evalue tes pratiques reelles de delegation.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/R0NpZ4PF", linkFr: "https://n3x9yc2lsn3.typeform.com/to/nJLwotGI" },
  { title: "Leadership Profiler", descEn: "What's your leadership impact? This assessment maps your style, your strengths, and your blind spots as a leader.", descFr: "Quel est ton impact en tant que leader ? Cet outil cartographie ton style, tes forces et tes angles morts.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/uWFLOhQ0", linkFr: "https://n3x9yc2lsn3.typeform.com/to/YkdCsVUi" },
  { title: "TeamBeat", descEn: "What's the real pulse of your team? For managers who need an honest read on engagement and performance.", descFr: "Quel est le vrai pouls de ton equipe ? Pour les managers qui veulent une lecture honnete de l'engagement et de la performance.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/K9wsHsg0", linkFr: "https://n3x9yc2lsn3.typeform.com/to/M6v4jU2g" },
];

const Quizzes = () => {
  const { lang, t } = useLang();

  return (
    <main>
      <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-6xl mx-auto px-4">
          <ScrollFadeIn>
            <h1 className="section-title text-center mb-4">{t("Where do you start?", "Par ou commencer ?")}</h1>
            <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-4">
              {t(
                "Before we talk, take one of these assessments. They're not personality games. They're precision tools, built to give you a clear picture of where you are and what to work on first. Most of my clients start here. It takes 5 to 15 minutes. The results go straight to your inbox.",
                "Avant qu'on se parle, fais un ou plusieurs de ces quiz. Ce ne sont pas des tests de personnalite ludiques. Ce sont des outils de precision, concus pour te donner une image claire de la ou tu en es, et de ce sur quoi travailler en premier. La plupart de mes clients commencent par la. Ca prend 5 a 15 minutes. Les resultats arrivent directement dans ta boite mail."
              )}
            </p>
            <p className="text-center text-sm font-body text-muted-foreground mb-12 italic">
              {t("More than 400 assessments completed to date.", "Plus de 400 evaluations completees a ce jour.")}
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((q, i) => (
              <ScrollFadeIn key={i}>
                <div className="card-sw-gold flex flex-col h-full">
                  <h3 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-base mb-2">
                    {lang === "fr" && q.titleFr ? q.titleFr : q.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                    {t(q.descEn, q.descFr)}
                  </p>
                  <a
                    href={lang === "fr" ? q.linkFr : q.linkEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs self-start"
                  >
                    {t("Take the quiz", "Faire le quiz")}
                  </a>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn>
            <p className="font-body text-sm text-muted-foreground text-center mt-12 max-w-2xl mx-auto">
              {t(
                "All assessments are free. Results go straight to your inbox. No spam, ever. Once you've taken one or more, book a Clarity Call. I'll give you personalised recommendations based on your results.",
                "Tous les quiz sont gratuits. Les resultats arrivent dans ta boite mail. Sans spam. Une fois que tu en as fait un ou plusieurs, book un Clarity Call. Je te donne des recommandations personnalisees basees sur tes resultats."
              )}
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </main>
  );
};

export default Quizzes;
