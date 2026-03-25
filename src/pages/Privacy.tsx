import ScrollFadeIn from "@/components/ScrollFadeIn";

const Privacy = () => {
  const sections = [
    { title: "What We Collect", text: "We collect your name, contact details, and any information you provide through our online forms and assessments. This helps us personalise your experience and communicate effectively." },
    { title: "How We Use It", text: "Your data is used solely to deliver our coaching and consulting services, send relevant communications, and improve our offerings." },
    { title: "AI Tools", text: "In the course of our work, we may use AI-assisted tools such as GPT-based assistants to support session preparation, note-taking, or content creation. When this occurs, we take care not to input personally identifiable information without your knowledge. You may request that your data not be used in conjunction with any AI tool at any time by emailing info@strengthwise.co." },
    { title: "How We Store It", text: "Your data is stored on Typeform (EU-based, GDPR compliant) and Airtable (US-based, protected under Standard Contractual Clauses for international data transfers). Both platforms use encryption, access restrictions, and two-factor authentication." },
    { title: "Newsletter and Communications", text: "If you subscribe to our newsletter, your email is managed via our current email platform. You can unsubscribe at any time using the link in any email." },
    { title: "How Long We Keep It", text: "We retain your data for as long as our coaching relationship is active. Once there has been no contact for 12 months, your data is flagged for deletion in our annual review. Data is held for a maximum of two years after our last interaction. You may request deletion at any time." },
    { title: "Cookies", text: "This website may use cookies for basic functionality and anonymous analytics. You can refuse non-essential cookies at any time via your browser settings or our cookie banner." },
    { title: "Your Rights", text: "You can ask to see, correct, or delete your data at any time. Email: info@strengthwise.co" },
  ];

  return (
    <main className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="container max-w-3xl mx-auto px-4">
        <ScrollFadeIn>
          <h1 className="section-title mb-4">PRIVACY POLICY</h1>
          <p className="font-body text-foreground mb-8">Hello, I'm Raphaelle Hernu, founder of Strengthwise. I manage your data directly.</p>
        </ScrollFadeIn>

        {sections.map((s, i) => (
          <ScrollFadeIn key={i}>
            <div className="mb-6">
              <h3 className="font-display font-bold text-sw-teal text-base mb-1">{s.title}</h3>
              <p className="font-body text-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          </ScrollFadeIn>
        ))}

        <p className="font-body text-xs text-muted-foreground mt-8 italic">We review this policy annually. Any changes will be shared on our website and directly with you by email.</p>
      </div>
    </main>
  );
};

export default Privacy;
