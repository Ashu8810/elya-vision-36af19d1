import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureSectionProps {
  number: string;
  tagline: string;
  title: string;
  description: string;
  icon: LucideIcon;
  reversed?: boolean;
}

const FeatureSection = ({
  number,
  tagline,
  title,
  description,
  icon: Icon,
  reversed = false,
}: FeatureSectionProps) => {
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
    <div
      ref={sectionRef}
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 lg:gap-20 items-center py-20`}
    >
      {/* Text Content */}
      <div
        className={`flex-1 space-y-6 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : reversed
            ? "opacity-0 translate-x-10"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <span className="text-5xl font-bold text-primary">{number}</span>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          {tagline}
        </p>
        <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      {/* Mock UI Preview */}
      <div
        className={`flex-1 w-full max-w-xl transition-all duration-700 delay-200 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : reversed
            ? "opacity-0 -translate-x-10"
            : "opacity-0 translate-x-10"
        }`}
      >
        <div className="relative group">
          {/* Glow effect behind */}
          <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-3xl transition-all duration-500 group-hover:bg-primary/30" />
          
          {/* Device frame */}
          <div className="relative rounded-3xl border border-border/30 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-background/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-lg bg-muted/30 text-xs text-muted-foreground">
                  elyaitra.ai
                </div>
              </div>
            </div>
            
            {/* Content area */}
            <div className="aspect-[4/3] p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-40 bg-muted/30 rounded mx-auto" />
                  <div className="h-3 w-32 bg-muted/20 rounded mx-auto" />
                  <div className="h-3 w-36 bg-muted/20 rounded mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
