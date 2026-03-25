import ScrollFadeIn from "@/components/ScrollFadeIn";

const Terms = () => (
  <main className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
    <div className="container max-w-3xl mx-auto px-4">
      <ScrollFadeIn>
        <h1 className="section-title mb-2">THE WAY WE DO BUSINESS</h1>
        <h2 className="font-display font-bold text-sw-teal uppercase tracking-[2px] text-lg mb-8">COACHING AND CONSULTING AGREEMENT</h2>
        <p className="font-body text-muted-foreground mb-8">Welcome to our coaching and consulting services. Before we begin, please read and understand the terms below.</p>
      </ScrollFadeIn>

      {[
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
      ].map((s, i) => (
        <ScrollFadeIn key={i}>
          <div className="mb-6">
            <h3 className="font-display font-bold text-sw-teal text-base mb-1">{s.title}</h3>
            <p className="font-body text-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        </ScrollFadeIn>
      ))}

      <p className="font-body text-sm text-muted-foreground mt-8">Questions: info@strengthwise.co</p>
    </div>
  </main>
);

export default Terms;
