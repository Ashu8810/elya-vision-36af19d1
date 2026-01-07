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
        {/* Animated background glow beam */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent blur-[100px] opacity-60 animate-pulse-glow" />
          <div className="absolute top-0 right-1/4 w-16 h-[80%] bg-gradient-to-b from-primary via-primary to-transparent blur-[40px] opacity-80" />
          <div className="absolute top-0 right-1/4 w-4 h-[70%] bg-primary blur-sm animate-beam" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: "0s" }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-2xl">
            {/* Main heading with staggered animation */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="inline-block opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="text-muted-foreground italic">Because School</span>
              </span>
              <br />
              <span className="inline-block opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <span className="text-muted-foreground italic">Won't Teach </span>
                <span className="text-primary italic">You </span>
              </span>
              <span className="inline-block opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <span className="text-white">This!</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-10 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              Master any subject with AI-powered tools that adapt to your learning style. 
              Build real understanding, ace your exams, and unlock your full potential.
            </p>

            {/* CTA Button */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <GetStartedButton>Start Learning Now</GetStartedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Laptop / Problem Statement Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        
        <div className="max-w-6xl mx-auto relative">
          {/* Section header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Sound Familiar?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Every Student's Struggle</h2>
          </div>
          
          {/* Mock laptop device */}
          <div className="relative mx-auto opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {/* Glow under device */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/40 blur-[80px] animate-pulse-glow" />
            
            {/* Laptop frame */}
            <div className="relative rounded-3xl border border-border/40 bg-gradient-to-b from-card to-background overflow-hidden shadow-2xl">
              {/* Top bar with camera */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              </div>
              
              {/* Screen content with floating text */}
              <div className="aspect-[16/9] pt-8 relative">
                {/* Central glowing element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse-glow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-card border border-primary/30 flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-primary">?</span>
                    </div>
                  </div>
                </div>
                
                {/* Connecting lines (decorative) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="10%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="30%" y2="85%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="60%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
                
                {/* Floating problem statements with improved styling */}
                <div className="absolute top-[12%] left-[8%] px-4 py-2.5 rounded-xl bg-card/80 backdrop-blur-md border border-border/30 shadow-lg animate-float" style={{ animationDelay: "0s" }}>
                  <p className="text-sm text-muted-foreground">Struggling to understand?</p>
                </div>
                
                <div className="absolute top-[18%] right-[8%] px-4 py-2.5 rounded-xl bg-card/80 backdrop-blur-md border border-white/10 shadow-lg animate-float" style={{ animationDelay: "0.4s" }}>
                  <p className="text-sm text-white font-medium">Can't crack concepts?</p>
                </div>
                
                <div className="absolute top-[55%] left-[5%] px-4 py-2.5 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10 animate-float" style={{ animationDelay: "0.8s" }}>
                  <p className="text-sm text-primary font-bold">Confused?</p>
                </div>
                
                <div className="absolute top-[38%] right-[25%] px-4 py-2.5 rounded-xl bg-card/80 backdrop-blur-md border border-border/30 shadow-lg animate-float" style={{ animationDelay: "0.6s" }}>
                  <p className="text-sm text-muted-foreground">Too many resources, no direction?</p>
                </div>
                
                <div className="absolute bottom-[22%] right-[12%] px-4 py-2.5 rounded-xl bg-card/80 backdrop-blur-md border border-white/10 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-sm text-white font-medium">Feeling left behind</p>
                </div>
                
                <div className="absolute bottom-[12%] left-[20%] px-4 py-2.5 rounded-xl bg-card/80 backdrop-blur-md border border-border/30 shadow-lg animate-float" style={{ animationDelay: "1.2s" }}>
                  <p className="text-sm text-muted-foreground">Exams coming, nothing's clear</p>
                </div>
                
                {/* Extra floating elements for more depth */}
                <div className="absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "0.2s" }} />
                <div className="absolute top-[65%] right-[35%] w-2 h-2 rounded-full bg-white/20 animate-float" style={{ animationDelay: "0.7s" }} />
                <div className="absolute bottom-[35%] left-[40%] w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "1.1s" }} />
              </div>
            </div>
            
            {/* Laptop base with reflection */}
            <div className="h-5 bg-gradient-to-b from-border/30 to-transparent rounded-b-xl mx-6" />
            <div className="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-20 rounded-full" />
          </div>
          
          {/* Bottom tagline */}
          <p className="text-center text-muted-foreground mt-12 text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-white font-semibold">ELYAITRA</span> is here to change that.
          </p>
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
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From Confused to <span className="text-primary">Confident</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
                  delay={index * 150}
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
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
