import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Send,
  Bot,
  User,
  Brain,
  Cpu,
  Network,
  Sparkles,
  Menu,
  X,
  Plus,
  History,
  Settings,
  ChevronDown,
  Mic,
  Paperclip,
  MoreHorizontal,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

const suggestedPrompts = [
  { icon: Brain, text: "Explain neural networks and how they learn" },
  { icon: Network, text: "What is the difference between supervised and unsupervised learning?" },
  { icon: Cpu, text: "How does deep learning work?" },
  { icon: Sparkles, text: "Explain transformers and attention mechanism" },
];

const mockSessions: ChatSession[] = [
  { id: "1", title: "Neural Networks Basics", lastMessage: "A neural network consists of...", timestamp: new Date() },
  { id: "2", title: "Machine Learning Types", lastMessage: "There are three main types...", timestamp: new Date(Date.now() - 86400000) },
  { id: "3", title: "GPT Architecture", lastMessage: "GPT uses transformer...", timestamp: new Date(Date.now() - 172800000) },
];

const TutorAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Great question about AI! Let me explain this concept in detail...\n\nArtificial Intelligence encompasses various techniques that allow machines to mimic human intelligence. This includes machine learning, deep learning, natural language processing, and more.\n\nWould you like me to dive deeper into any specific aspect?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
    textareaRef.current?.focus();
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col border-r border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300",
          sidebarOpen ? "w-72" : "w-0 overflow-hidden"
        )}
      >
        <div className="p-4 border-b border-border/50">
          <Link to="/subjects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Subjects</span>
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <span className="font-bold text-lg block">AI Tutor</span>
              <span className="text-xs text-muted-foreground">Machine Learning Expert</span>
            </div>
          </div>
          <Button className="w-full gap-2" variant="outline">
            <Plus className="w-4 h-4" />
            New Chat
          </Button>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 pb-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <History className="w-3 h-3" />
              Recent Chats
            </h3>
          </div>
          <ScrollArea className="flex-1 px-2">
            <div className="space-y-1">
              {mockSessions.map((session) => (
                <button
                  key={session.id}
                  className="w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm truncate">{session.title}</span>
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-1">{session.lastMessage}</p>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="p-4 border-t border-border/50">
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <Settings className="w-4 h-4" />
            Settings
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileSidebarOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border/50 transform transition-transform duration-300 lg:hidden",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <span className="font-bold text-lg">AI Tutor</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMobileSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="p-4">
          <Button className="w-full gap-2" variant="outline">
            <Plus className="w-4 h-4" />
            New Chat
          </Button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b border-border/50 bg-card/30 backdrop-blur-sm flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-sm">AI & Machine Learning Tutor</h1>
                <p className="text-xs text-muted-foreground">Neural networks, deep learning & more</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
              GPT-4
              <ChevronDown className="w-3 h-3" />
            </Button>
          </div>
        </header>

        {/* Messages Area */}
        <ScrollArea className="flex-1">
          <div className="max-w-3xl mx-auto px-4 py-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                  <Brain className="w-10 h-10 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">AI & Machine Learning Tutor</h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Master neural networks, deep learning, and AI fundamentals. Ask me anything about artificial intelligence!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt.text)}
                      className="flex items-center gap-3 p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all text-left group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500/30 transition-colors">
                        <prompt.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-sm">{prompt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className={cn("flex gap-4", message.role === "user" ? "flex-row-reverse" : "")}>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        message.role === "user" ? "bg-primary" : "bg-gradient-to-br from-purple-500 to-blue-500"
                      )}
                    >
                      {message.role === "user" ? <User className="w-4 h-4 text-primary-foreground" /> : <Brain className="w-4 h-4 text-white" />}
                    </div>
                    <div
                      className={cn(
                        "flex-1 max-w-[80%] rounded-2xl px-4 py-3",
                        message.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-card border border-border/50"
                      )}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <span className={cn("text-xs mt-2 block", message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground")}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-card border border-border/50 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border/50 bg-card/30 backdrop-blur-sm p-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative flex items-end gap-2 bg-background border border-border/50 rounded-2xl p-2 focus-within:border-purple-500/50 transition-colors">
              <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about AI, neural networks, machine learning..."
                className="flex-1 min-h-[44px] max-h-32 resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-2"
                rows={1}
              />
              <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground">
                <Mic className="w-5 h-5" />
              </Button>
              <Button onClick={handleSend} disabled={!input.trim() || isTyping} size="icon" className="shrink-0 rounded-xl bg-purple-500 hover:bg-purple-600">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">AI Tutor specializing in artificial intelligence and machine learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorAI;
