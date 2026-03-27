import { useLang } from "@/i18n/LanguageContext";

const SocialProof = () => {
  const { t } = useLang();

  const metrics = [
    { value: "9", label: t("years of practice", "ans de pratique") },
    { value: "200+", label: t("clients", "clients") },
    { value: "400+", label: t("assessments", "évaluations") },
    { value: "3", label: t("publications", "publications") },
  ];

  const accreditations = ["EMCC", "IIN Integrative Nutrition", "EWOB", "Flow Research Collective", "Positive Intelligence"];

  return (
    <section className="bg-sw-cream py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-sw-teal">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-1 font-body">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {accreditations.map((name, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full border border-sw-teal/20 text-xs font-body text-muted-foreground grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
