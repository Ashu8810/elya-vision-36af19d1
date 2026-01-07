import { MessageSquare, GitBranch, BookOpen, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import GetStartedButton from "@/components/GetStartedButton";
import FeatureSection from "@/components/FeatureSection";
import StepCard from "@/components/StepCard";

const features = [
  {
    number: "01",
    tagline: "Instant Doubt Solving",
    title: "AI Chat — Get Answers in Seconds",
    description:
      "ELYAITRA's AI Chat understands your questions and provides crystal-clear explanations. Whether you're stuck on calculus or confused about concepts, get instant, human-like help 24/7.",
    icon: MessageSquare,
  },
  {
    number: "02",
    tagline: "Visual Learning Paths",
    title: "Smart Flowcharts — See the Big Picture",
    description:
      "Transform complex topics into beautiful visual roadmaps. Our AI creates step-by-step flowcharts that show exactly how concepts connect, making learning intuitive and memorable.",
    icon: GitBranch,
  },
  {
    number: "03",
    tagline: "Memory Mastery",
    title: "Flashcards — Remember Everything",
    description:
      "AI-optimized flashcards that adapt to your learning patterns. Our spaced repetition system presents cards at the perfect intervals for maximum retention.",
    icon: BookOpen,
  },
  {
    number: "04",
    tagline: "Exam Ready",
    title: "Smart Quizzes — Test Your Knowledge",
    description:
      "Adaptive quizzes that evolve based on your performance. Get instant feedback, identify weak spots, and track your progress with detailed analytics.",
    icon: Brain,
  },
];

const steps = [
  { number: "01", title: "Sign Up", description: "Create your free account" },
  { number: "02", title: "Choose Path", description: "Pick your subjects & goals" },
  { number: "03", title: "Learn & Practice", description: "Use AI tools to master topics" },
  { number: "04", title: "Track Progress", description: "See your improvement" },
];

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background glow beam effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent blur-[100px] opacity-60" />
          <div className="absolute top-0 right-1/4 w-16 h-[80%] bg-gradient-to-b from-primary via-primary to-transparent blur-[40px] opacity-80" />
          <div className="absolute top-0 right-1/4 w-4 h-[70%] bg-primary blur-sm" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-500" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-2xl">
            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-muted-foreground italic">Because School</span>
              <br />
              <span className="text-muted-foreground italic">Won't Teach </span>
              <span className="text-primary italic">You </span>
              <span className="text-white">This!</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Master any subject with AI-powered tools that adapt to your learning style. 
              Build real understanding, ace your exams, and unlock your full potential.
            </p>

            {/* CTA Button */}
            <GetStartedButton>Start Learning Now</GetStartedButton>
          </div>
        </div>
      </section>

      {/* Floating Laptop / Problem Statement Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Mock laptop device */}
          <div className="relative mx-auto">
            {/* Glow under device */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/30 blur-[60px]" />
            
            {/* Laptop frame */}
            <div className="relative rounded-t-3xl border border-border/30 bg-card overflow-hidden shadow-2xl">
              {/* Screen content with floating text */}
              <div className="aspect-[16/10] p-8 relative">
                {/* Floating problem statements */}
                <div className="absolute top-8 left-8 px-4 py-2 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/20">
                  <p className="text-sm text-muted-foreground">Struggling to understand?</p>
                </div>
                
                <div className="absolute top-1/4 right-12 px-4 py-2 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/20">
                  <p className="text-sm text-white font-medium">Can't crack concepts?</p>
                </div>
                
                <div className="absolute top-1/2 left-16 px-4 py-2 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/20">
                  <p className="text-sm text-primary font-bold">Confused?</p>
                </div>
                
                <div className="absolute top-1/3 left-1/3 px-4 py-2 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/20">
                  <p className="text-sm text-muted-foreground">Too many resources, no direction?</p>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 px-4 py-2 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/20">
                  <p className="text-sm text-white font-medium">Feeling left behind</p>
                </div>
                
                <div className="absolute bottom-8 left-1/4 px-4 py-2 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/20">
                  <p className="text-sm text-muted-foreground">Exams coming, nothing's clear</p>
                </div>
              </div>
            </div>
            
            {/* Laptop base */}
            <div className="h-4 bg-gradient-to-b from-card to-muted/50 rounded-b-lg mx-8" />
            <div className="h-2 bg-muted/30 rounded-b-2xl mx-16" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureSection
              key={feature.number}
              number={feature.number}
              tagline={feature.tagline}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              From Confused to <span className="text-primary">Confident</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your journey with ELYAITRA in 4 simple steps
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <StepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Learn <span className="text-primary">Smarter</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of students already using ELYAITRA to master their subjects and ace their exams.
          </p>
          <GetStartedButton>Start Your Journey</GetStartedButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2024 ELYAITRA. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
