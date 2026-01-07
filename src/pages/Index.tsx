import { MessageSquare, GitBranch, BookOpen, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import GetStartedButton from "@/components/GetStartedButton";
import FeatureSection from "@/components/FeatureSection";
import ProblemSection from "@/components/ProblemSection";
import CommunitySection from "@/components/CommunitySection";
import HowItWorksSection from "@/components/HowItWorksSection";

import aiChatMockup from "@/assets/ai-chat-mockup.png";
import flowchartMockup from "@/assets/flowchart-mockup.png";
import flashcardsMockup from "@/assets/flashcards-mockup.png";
import quizMockup from "@/assets/quiz-mockup.png";

const features = [
  {
    number: "01",
    tagline: "Instant Doubt Solving",
    title: "AI Chat — Get Answers in Seconds",
    description:
      "ELYAITRA's AI Chat understands your questions and provides crystal-clear explanations. Whether you're stuck on calculus or confused about concepts, get instant, human-like help 24/7.",
    icon: MessageSquare,
    mockupImage: aiChatMockup,
  },
  {
    number: "02",
    tagline: "Visual Learning Paths",
    title: "Smart Flowcharts — See the Big Picture",
    description:
      "Transform complex topics into beautiful visual roadmaps. Our AI creates step-by-step flowcharts that show exactly how concepts connect, making learning intuitive and memorable.",
    icon: GitBranch,
    mockupImage: flowchartMockup,
  },
  {
    number: "03",
    tagline: "Memory Mastery",
    title: "Flashcards — Remember Everything",
    description:
      "AI-optimized flashcards that adapt to your learning patterns. Our spaced repetition system presents cards at the perfect intervals for maximum retention.",
    icon: BookOpen,
    mockupImage: flashcardsMockup,
  },
  {
    number: "04",
    tagline: "Exam Ready",
    title: "Smart Quizzes — Test Your Knowledge",
    description:
      "Adaptive quizzes that evolve based on your performance. Get instant feedback, identify weak spots, and track your progress with detailed analytics.",
    icon: Brain,
    mockupImage: quizMockup,
  },
];

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated background glow beam */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent blur-[100px] opacity-60 animate-pulse-glow" />
          <div className="absolute top-0 right-1/4 w-16 h-[80%] bg-gradient-to-b from-primary via-primary to-transparent blur-[40px] opacity-80" />
          <div className="absolute top-0 right-1/4 w-4 h-[70%] bg-primary blur-sm animate-beam" />
        </div>

        {/* Left glow */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: "0s" }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
          {/* Main heading with staggered animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8">
            <span className="inline-block opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-white">Learn Smarter with</span>
            </span>
            <br />
            <span className="inline-block opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-primary">Artificial Intelligence</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in leading-relaxed" style={{ animationDelay: "0.7s" }}>
            Master any subject with AI-powered tools that adapt to your learning style. 
            Build real understanding, ace your exams, and unlock your full potential.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <GetStartedButton>Start Learning Now — It's Free</GetStartedButton>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <ProblemSection />

      {/* Features Section - Light Theme */}
      <section className="py-20 px-6 bg-white dark:bg-white">
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
              lightMode
              mockupImage={feature.mockupImage}
            />
          ))}
        </div>
      </section>


      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Community Section */}
      <CommunitySection />

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
