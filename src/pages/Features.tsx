import { MessageSquare, GitBranch, BookOpen, Brain } from "lucide-react";
import GetStartedButton from "@/components/GetStartedButton";

const featuresData = [
  {
    number: "01",
    subtitle: "INTELLIGENT CONVERSATIONS",
    title: "AI Chat",
    accent: "Instant Clarity",
    description:
      "Get immediate answers to your questions with our advanced AI chat. Whether you're stuck on a complex concept or need quick clarification, ELYAITRA's AI assistant provides detailed, contextual explanations tailored to your learning level.",
    icon: MessageSquare,
  },
  {
    number: "02",
    subtitle: "VISUAL LEARNING",
    title: "Smart Flowcharts",
    accent: "See the Path",
    description:
      "Transform complex topics into visual learning paths. Our smart flowcharts break down subjects into digestible steps, showing you exactly how concepts connect and building your understanding systematically.",
    icon: GitBranch,
  },
  {
    number: "03",
    subtitle: "MEMORY RETENTION",
    title: "Flashcards",
    accent: "Remember Everything",
    description:
      "Master any subject with AI-optimized flashcards. Our spaced repetition system learns your patterns and presents cards at the perfect intervals for maximum retention, making revision efficient and effective.",
    icon: BookOpen,
  },
  {
    number: "04",
    subtitle: "EXAM PREPARATION",
    title: "Smart Quizzes",
    accent: "Test Your Knowledge",
    description:
      "Practice with intelligent quizzes that adapt to your performance. Get instant feedback, identify weak areas, and track your progress with detailed analytics that help you focus on what matters most.",
    icon: Brain,
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wide">Features</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Powerful Tools for{" "}
            <span className="text-primary">Smarter Learning</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the AI-powered features that make ELYAITRA the ultimate learning companion
            for students and lifelong learners.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-32">
          {featuresData.map((feature, index) => {
            const isReversed = index % 2 === 1;
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <span className="text-6xl sm:text-7xl font-bold text-muted/20">
                    {feature.number}
                  </span>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary uppercase tracking-widest">
                      {feature.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                      <span className="text-primary">{feature.accent}</span> — {feature.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* UI Preview Card */}
                <div className="flex-1 w-full max-w-lg">
                  <div className="aspect-[4/3] rounded-3xl bg-card border border-border shadow-xl overflow-hidden">
                    <div className="h-full flex flex-col">
                      {/* Mock header */}
                      <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-destructive/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="px-4 py-1 rounded-lg bg-muted text-xs text-muted-foreground">
                            ELYAITRA / {feature.title}
                          </div>
                        </div>
                      </div>
                      {/* Mock content */}
                      <div className="flex-1 p-6 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 w-32 bg-muted rounded mx-auto" />
                            <div className="h-2 w-24 bg-muted/50 rounded mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Experience the Future of Learning?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start your journey with ELYAITRA today and unlock your full potential.
          </p>
          <GetStartedButton size="lg" />
        </div>
      </section>
    </div>
  );
};

export default Features;
