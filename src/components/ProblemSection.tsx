import { useEffect, useRef, useState } from "react";

interface ProblemCard {
  text: string;
  position: { x: string; y: string };
  variant: "default" | "highlight" | "emphasis";
  delay: number;
}

const problemCards: ProblemCard[] = [
  { text: "Struggling to understand?", position: { x: "8%", y: "12%" }, variant: "default", delay: 0 },
  { text: "Can't crack concepts?", position: { x: "72%", y: "8%" }, variant: "emphasis", delay: 0.2 },
  { text: "Confused?", position: { x: "5%", y: "52%" }, variant: "highlight", delay: 0.4 },
  { text: "Too many resources, no direction?", position: { x: "52%", y: "32%" }, variant: "default", delay: 0.6 },
  { text: "Feeling left behind", position: { x: "68%", y: "65%" }, variant: "emphasis", delay: 0.8 },
  { text: "Exams coming, nothing's clear", position: { x: "18%", y: "75%" }, variant: "default", delay: 1 },
];

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Sound Familiar?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Every Student's Struggle</h2>
        </div>

        {/* Main container */}
        <div className={`relative aspect-[16/9] max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Outer frame */}
          <div className="absolute inset-0 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent" />
          
          {/* Animated SVG lines connecting to center */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Animated connecting lines */}
            {problemCards.map((card, i) => {
              const startX = parseFloat(card.position.x) + 8;
              const startY = parseFloat(card.position.y) + 4;
              return (
                <line
                  key={i}
                  x1={startX}
                  y1={startY}
                  x2="50"
                  y2="50"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.15"
                  strokeDasharray="2 2"
                  className="animate-pulse-glow"
                  style={{ animationDelay: `${card.delay}s` }}
                />
              );
            })}
          </svg>

          {/* Floating dots on lines */}
          {[
            { x: "28%", y: "28%" },
            { x: "65%", y: "22%" },
            { x: "25%", y: "55%" },
            { x: "42%", y: "60%" },
            { x: "72%", y: "52%" },
            { x: "58%", y: "42%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40 animate-pulse-glow"
              style={{ left: pos.x, top: pos.y, animationDelay: `${i * 0.3}s` }}
            />
          ))}

          {/* Central element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Outer glow ring */}
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" />
            
            {/* Pulsing rings */}
            <div className="absolute -inset-4 rounded-2xl border border-primary/20 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
            <div className="absolute -inset-2 rounded-xl border border-primary/30 animate-ping opacity-30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
            
            {/* Main box */}
            <div className="relative w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-[0_0_40px_rgba(7,186,255,0.2)]">
              <span className="text-4xl font-bold text-primary animate-pulse">?</span>
            </div>
          </div>

          {/* Problem cards */}
          {problemCards.map((card, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                left: card.position.x,
                top: card.position.y,
                transitionDelay: `${card.delay + 0.3}s`
              }}
            >
              <div
                className={`
                  px-5 py-3 rounded-xl backdrop-blur-md border shadow-lg
                  transition-all duration-300 hover:scale-105 cursor-default
                  ${card.variant === 'highlight' 
                    ? 'bg-primary/20 border-primary/40 shadow-primary/20' 
                    : card.variant === 'emphasis'
                    ? 'bg-card/60 border-white/20 shadow-white/5'
                    : 'bg-card/40 border-white/10 shadow-black/20'
                  }
                `}
              >
                <p className={`text-sm font-medium whitespace-nowrap ${
                  card.variant === 'highlight' ? 'text-primary' : 
                  card.variant === 'emphasis' ? 'text-white' : 'text-muted-foreground'
                }`}>
                  {card.text}
                </p>
              </div>
            </div>
          ))}

          {/* Corner accent dots */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Bottom tagline */}
        <p className={`text-center text-muted-foreground mt-12 text-lg transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-white font-semibold">ELYAITRA</span> is here to change that.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
