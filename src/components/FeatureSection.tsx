import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  number: string;
  tagline: string;
  title: string;
  description: string;
  icon: LucideIcon;
  reversed?: boolean;
  lightMode?: boolean;
  mockupImage?: string;
}

const FeatureSection = ({
  number,
  tagline,
  title,
  description,
  icon: Icon,
  reversed = false,
  lightMode = false,
  mockupImage,
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
        <h3 className={cn(
          "text-3xl sm:text-4xl font-bold leading-tight",
          lightMode ? "text-gray-900" : "text-white"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-lg leading-relaxed max-w-lg",
          lightMode ? "text-gray-600" : "text-muted-foreground"
        )}>
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
          <div className={cn(
            "absolute inset-0 blur-[60px] rounded-3xl transition-all duration-500 group-hover:opacity-100",
            lightMode ? "bg-primary/15 group-hover:bg-primary/25" : "bg-primary/20 group-hover:bg-primary/30"
          )} />
          
          {/* Device frame with mockup image */}
          <div className={cn(
            "relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]",
            lightMode 
              ? "shadow-gray-300/50" 
              : "shadow-primary/10"
          )}>
            {mockupImage ? (
              <img 
                src={mockupImage} 
                alt={title}
                className="w-full h-auto object-cover"
              />
            ) : (
              <>
                {/* Fallback: Browser header */}
                <div className={cn(
                  "flex items-center gap-2 px-4 py-3 border-b",
                  lightMode ? "border-gray-800 bg-gray-900" : "border-border/30 bg-background/50"
                )}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className={cn(
                      "px-4 py-1 rounded-lg text-xs",
                      lightMode ? "bg-gray-800 text-gray-400" : "bg-muted/30 text-muted-foreground"
                    )}>
                      elyaitra.ai
                    </div>
                  </div>
                </div>
                
                {/* Fallback: Content area */}
                <div className={cn(
                  "aspect-[4/3] p-8 flex items-center justify-center border",
                  lightMode ? "bg-gray-900 border-gray-200" : "border-border/30 bg-card/80"
                )}>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className={cn(
                        "h-4 w-40 rounded mx-auto",
                        lightMode ? "bg-gray-700" : "bg-muted/30"
                      )} />
                      <div className={cn(
                        "h-3 w-32 rounded mx-auto",
                        lightMode ? "bg-gray-800" : "bg-muted/20"
                      )} />
                      <div className={cn(
                        "h-3 w-36 rounded mx-auto",
                        lightMode ? "bg-gray-800" : "bg-muted/20"
                      )} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
