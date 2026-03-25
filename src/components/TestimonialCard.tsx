interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role }) => {
  const initials = name.split(" ").map(n => n[0]).join("");

  return (
    <div className="card-sw flex flex-col gap-4">
      <p className="text-sm font-body italic text-foreground leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-primary-foreground" style={{ backgroundColor: "#384c58" }}>
          {initials}
        </div>
        <div>
          <div className="text-sm font-display font-bold text-sw-teal">{name}</div>
          <div className="text-xs font-body text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
