import { useLang } from "@/i18n/LanguageContext";
import emccLogo from "@/assets/logos/EMCC.png";
import iinLogo from "@/assets/logos/IIN.png";
import ewobLogo from "@/assets/logos/EWOB.png";
import flowLogo from "@/assets/logos/Flow_Research_Collective.png";
import pqLogo from "@/assets/logos/Positive_Intelligence.png";

const SocialProof = () => {
  const { t } = useLang();

  const metrics = [
    { value: "9", label: t("years of practice", "ans de pratique") },
    { value: "200+", label: t("clients", "clients") },
    { value: "400+", label: t("assessments", "évaluations") },
    { value: "3", label: t("publications", "publications") },
  ];

  const accreditations = [
    { name: "EMCC", logo: emccLogo },
    { name: "IIN Integrative Nutrition", logo: iinLogo },
    { name: "EWOB", logo: ewobLogo },
    { name: "Flow Research Collective", logo: flowLogo },
    { name: "Positive Intelligence", logo: pqLogo },
  ];

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
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {accreditations.map((item, i) => (
            <div
              key={i}
              className="h-14 w-36 rounded-xl bg-white border border-sw-teal/10 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 cursor-default shadow-sm p-2"
              title={item.name}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
