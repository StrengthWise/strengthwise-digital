import { useLang } from "@/i18n/LanguageContext";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import WaveTransition from "@/components/WaveTransition";
import { Compass, Brain, ShieldAlert, BarChart3, Zap, Share2, Crown, HeartPulse, LucideIcon } from "lucide-react";

interface Quiz {
  title: string;
  titleFr?: string;
  descEn: string;
  descFr: string;
  linkEn: string;
  linkFr: string;
  icon: LucideIcon;
}

const quizzes: Quiz[] = [
  { title: "DISC", icon: Compass, descEn: "How do you communicate, decide, and influence? The DISC model reveals your dominant behavioural style and how to work with others more effectively.", descFr: "Comment communiques-tu, décides-tu, influes-tu ? Le modèle DISC révèle ton style comportemental dominant et comment travailler plus efficacement avec les autres.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/AWNSegUX", linkFr: "https://n3x9yc2lsn3.typeform.com/to/VXwJBGCB" },
  { title: "Mental Fitness Score", icon: Brain, descEn: "How strong is your mental muscle right now? This is your baseline - the starting point for everything we'll work on.", descFr: "Où en est ton mental fitness aujourd'hui ? C'est ton point de départ, la base de tout ce sur quoi on va travailler.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/nozddA5i", linkFr: "https://n3x9yc2lsn3.typeform.com/to/uGtHIRDD" },
  { title: "Meet Your Saboteurs", titleFr: "Rencontre tes Saboteurs", icon: ShieldAlert, descEn: "What's the voice in your head that holds you back? Identify your mental saboteurs - the patterns that undermine your performance under pressure.", descFr: "Quelle est la voix dans ta tête qui te freine ? Identifie tes saboteurs mentaux - les schémas qui minent ta performance sous pression.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/nfX6K4Xo", linkFr: "https://n3x9yc2lsn3.typeform.com/to/nt2W1JTD" },
  { title: "Performance SustainAbility", icon: BarChart3, descEn: "Break performance down into 8 key dimensions. See where you're solid and where the cracks are forming.", descFr: "Décortique ta performance en 8 dimensions clés. Vois où tu es solide et où les fissures apparaissent.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/rF7VGTax", linkFr: "https://n3x9yc2lsn3.typeform.com/to/pQB85riu" },
  { title: "Modus Operandi", icon: Zap, descEn: "How do you naturally take action - not think, act? Inspired by the Kolbe model, this reveals your instinctive operating style.", descFr: "Comment agis-tu naturellement - pas ce que tu penses, ce que tu fais ? Inspiré du modèle Kolbe, ce quiz révèle ton style opératoire instinctif.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/GmMOaw1J", linkFr: "https://n3x9yc2lsn3.typeform.com/to/zuZF9UCV" },
  { title: "Delegat'Score", icon: Share2, descEn: "Are you delegating, or just redistributing your own workload? Assess your real delegation practices.", descFr: "Tu délègues, ou tu redistribues juste ta propre charge ? Évalue tes pratiques réelles de délégation.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/R0NpZ4PF", linkFr: "https://n3x9yc2lsn3.typeform.com/to/nJLwotGI" },
  { title: "Leadership Profiler", icon: Crown, descEn: "What's your leadership impact? This assessment maps your style, your strengths, and your blind spots as a leader.", descFr: "Quel est ton impact en tant que leader ? Cet outil cartographie ton style, tes forces et tes angles morts.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/uWFLOhQ0", linkFr: "https://n3x9yc2lsn3.typeform.com/to/YkdCsVUi" },
  { title: "TeamBeat", icon: HeartPulse, descEn: "What's the real pulse of your team? For managers who need an honest read on engagement and performance.", descFr: "Quel est le vrai pouls de ton équipe ? Pour les managers qui veulent une lecture honnête de l'engagement et de la performance.", linkEn: "https://n3x9yc2lsn3.typeform.com/to/K9wsHsg0", linkFr: "https://n3x9yc2lsn3.typeform.com/to/M6v4jU2g" },
];

const Quizzes = () => {
  const { lang, t } = useLang();

  return (
    <main>
      {/* Hero intro */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h1 className="section-title mb-4">{t("Where do you start?", "Par où commencer ?")}</h1>
            <div
              className="w-16 h-0.5 mx-auto mb-6"
              style={{ background: "linear-gradient(90deg, #c5922f, #e8b45a)" }}
            />
            <p className="font-body text-muted-foreground max-w-3xl mx-auto mb-4">
              {t(
                "Before we talk, take one of these assessments. They're not personality games. They're precision tools, built to give you a clear picture of where you are and what to work on first. Most of my clients start here. It takes 5 to 15 minutes per quiz. The results go straight to your inbox.",
                "Ces outils ne sont pas que des tests de personnalité. Ce sont des outils de précision, conçus pour te donner une image claire de là où tu en es et de ce sur quoi travailler en premier. Chaque quiz prend entre 5 et 15 minutes par quiz. Les résultats arrivent directement dans ta boîte mail."
              )}
            </p>
            <p className="text-sm font-body text-muted-foreground italic">
              {t("More than 400 assessments completed to date.", "Plus de 400 évaluations complétées à ce jour.")}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <WaveTransition from="#ffffff" to="#faf9f7" />

      {/* Quiz grid */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((q, i) => {
              const Icon = q.icon;
              return (
                <ScrollFadeIn key={i}>
                  <div
                    className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      border: "0.5px solid hsl(37 64% 48% / 0.25)",
                      boxShadow: "0 4px 20px -6px hsl(37 60% 48% / 0.08), 0 1px 6px -2px hsl(204 22% 28% / 0.04)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: "hsl(37 71% 96%)" }}
                    >
                      <Icon className="text-sw-teal" size={20} strokeWidth={1.8} />
                    </div>
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
              );
            })}
          </div>
        </div>
      </section>

      <WaveTransition from="#faf9f7" to="#ffffff" />

      {/* Bottom note */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container max-w-2xl mx-auto px-4">
          <ScrollFadeIn>
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: "hsl(37 71% 96%)",
                boxShadow: "0 2px 12px -4px hsl(204 22% 28% / 0.05)",
                border: "1px solid hsl(37 64% 48% / 0.1)",
              }}
            >
              <p className="font-body text-sm text-muted-foreground">
                {t(
                  "All assessments are free. Results go straight to your inbox. No spam, ever. Once you've taken one or more, book a Clarity Call. I'll give you personalised recommendations based on your results.",
                  "Tous les quiz sont gratuits. Les résultats arrivent dans ta boîte mail. Sans spam. Une fois que tu en as fait un ou plusieurs, book un Clarity Call. Je te donne des recommandations personnalisées basées sur tes résultats."
                )}
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </main>
  );
};

export default Quizzes;
