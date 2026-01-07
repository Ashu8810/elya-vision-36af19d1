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

  // Split title to highlight first part in primary color
  const titleParts = title.split(' — ');
  const highlightedTitle = titleParts[0];
  const restOfTitle = titleParts[1] || '';

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col ${
        reversed ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-16 items-center py-24 lg:py-32`}
    >
      {/* Large Image - 60% width */}
      <div
        className={`w-full lg:w-[60%] transition-all duration-700 delay-100 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : reversed
            ? "opacity-0 translate-x-10"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <div className="relative group">
          {/* Outer dark frame */}
          <div className="relative rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-3 sm:p-4 shadow-[0_40px_100px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Top notch */}
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0a0a0a] rounded-b-xl z-20" />
            
            {/* Inner screen area */}
            <div className="relative rounded-xl overflow-hidden bg-[#0f0f0f]">
              {mockupImage ? (
                <img 
                  src={mockupImage} 
                  alt={title}
                  className="w-full h-auto object-cover block rounded-xl"
                />
              ) : (
                <div className="aspect-[4/3] bg-[#111] flex items-center justify-center rounded-xl">
                  <Icon className="w-20 h-20 text-primary/50" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Text Content - 40% width */}
      <div
        className={`w-full lg:w-[40%] space-y-6 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : reversed
            ? "opacity-0 -translate-x-10"
            : "opacity-0 translate-x-10"
        }`}
      >
        {/* Large number */}
        <span className={cn(
          "block text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight",
          lightMode ? "text-gray-900" : "text-white"
        )}>
          {number}
        </span>
        
        {/* Tagline */}
        <p className={cn(
          "text-sm font-bold uppercase tracking-[0.2em]",
          lightMode ? "text-gray-600" : "text-muted-foreground"
        )}>
          {tagline}
        </p>
        
        {/* Divider line */}
        <div className="w-16 h-1 bg-primary rounded-full" />
        
        {/* Title with highlighted first part */}
        <h3 className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
          lightMode ? "text-gray-900" : "text-white"
        )}>
          <span className="text-primary">{highlightedTitle}</span>
          {restOfTitle && (
            <>
              <span className={lightMode ? "text-gray-900" : "text-white"}> — {restOfTitle}</span>
            </>
          )}
        </h3>
        
        {/* Description */}
        <p className={cn(
          "text-lg lg:text-xl leading-relaxed",
          lightMode ? "text-gray-600" : "text-muted-foreground"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
