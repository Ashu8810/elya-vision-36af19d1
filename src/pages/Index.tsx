import { MessageSquare, GitBranch, BookOpen, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GetStartedButton from "@/components/GetStartedButton";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat",
    description: "Instant doubt solving and concept clarity with intelligent conversation.",
  },
  {
    icon: GitBranch,
    title: "Smart Flowcharts",
    description: "Visual step-by-step learning paths that guide your understanding.",
  },
  {
    icon: BookOpen,
    title: "Flashcards",
    description: "Fast revision and memory retention for effective studying.",
  },
  {
    icon: Brain,
    title: "Smart Quizzes",
    description: "Exam-ready practice with instant feedback and analytics.",
  },
];

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        
        {/* Subtle glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-32 pb-24 text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">AI-Powered Learning Platform</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Learn Smarter with{" "}
            <span className="text-primary">Artificial Intelligence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            ELYAITRA transforms how you learn with AI-powered tools that adapt to your
            pace, clarify your doubts, and help you master any subject faster.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GetStartedButton size="lg" />
            <button className="px-8 py-3.5 rounded-full border border-border text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
              Watch Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm text-primary font-medium uppercase tracking-wide">Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to{" "}
              <span className="text-primary">Excel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful AI tools designed to accelerate your learning journey and help you achieve your goals.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Explore All Features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of students already using ELYAITRA to study smarter.
          </p>
          <GetStartedButton size="lg" />
        </div>
      </section>
    </div>
  );
};

export default Index;
