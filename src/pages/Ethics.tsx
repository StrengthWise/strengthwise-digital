import ScrollFadeIn from "@/components/ScrollFadeIn";

const Ethics = () => {
  const principles = [
    { title: "Equality", text: "We respect all cultures, ethnicities, national origins, genders, sexual orientations, gender identities, ages, religions, and abilities. We do not reject any client on these grounds." },
    { title: "Confidentiality", text: "Everything discussed with clients is held in strict confidence, unless information poses a risk to safety or we receive written consent to share." },
    { title: "Personal Growth", text: "We commit to ongoing learning and professional development to serve our clients at the highest level." },
    { title: "Professional Relationship", text: "Our relationship with clients remains strictly professional." },
    { title: "Payments", text: "We are fully transparent about fees from the start. No hidden charges." },
    { title: "Compassion", text: "We respect each client's identity, values, beliefs, and stage of growth." },
    { title: "Communication", text: "Our communication is clear and respectful at all times." },
    { title: "Scope of Practice", text: "We refer clients to other professionals immediately when a situation falls outside our scope of practice." },
  ];

  return (
    <main className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="container max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <h1 className="section-title mb-4">CODE OF ETHICS</h1>
          <p className="font-body text-muted-foreground mb-8">These are the principles that guide our work as coaches.</p>
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
