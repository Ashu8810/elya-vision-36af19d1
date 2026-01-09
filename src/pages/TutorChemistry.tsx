import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Layers,
  GitBranch,
  Menu,
  X,
  ArrowLeft,
  FlaskConical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import NotesPanel from "@/components/tutor/NotesPanel";
import ChatTutor from "@/components/tutor/ChatTutor";
import FlashcardViewer from "@/components/tutor/FlashcardViewer";
import FlowchartCanvas from "@/components/tutor/FlowchartCanvas";
import { useToast } from "@/hooks/use-toast";

type WorkspaceTab = "chat" | "flashcards" | "flowchart";

interface Note {
  id: string;
  title: string;
  subject: string;
  topic: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  pages: number;
}

const TutorChemistry = () => {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>("chat");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [mobileLeftPanelOpen, setMobileLeftPanelOpen] = useState(false);
  const [tutoringStarted, setTutoringStarted] = useState(false);
  const { toast } = useToast();

  const handleNoteSelect = (note: Note | null) => {
    setSelectedNote(note);
    setTutoringStarted(false);
  };

  const handleGenerateSummary = () => {
    setActiveTab("chat");
  };

  const handleGenerateFlashcards = () => {
    setActiveTab("flashcards");
  };

  const handleStartTutoring = () => {
    if (selectedNote) {
      setActiveTab("chat");
      setTutoringStarted(true);
      setMobileLeftPanelOpen(false);
      toast({
        title: "🧪 Chemistry Tutoring Started!",
        description: `Now teaching: ${selectedNote.title}`,
      });
    }
  };

  const tabs = [
    { id: "chat" as WorkspaceTab, label: "Chat", icon: MessageSquare },
    { id: "flashcards" as WorkspaceTab, label: "Flashcards", icon: Layers },
    { id: "flowchart" as WorkspaceTab, label: "Flowchart", icon: GitBranch },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile Overlay */}
      {mobileLeftPanelOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileLeftPanelOpen(false)}
        />
      )}

      {/* Left Panel - Notes Management */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 lg:relative lg:translate-x-0",
          mobileLeftPanelOpen ? "translate-x-0" : "-translate-x-full",
          leftPanelOpen ? "lg:w-80" : "lg:w-0 lg:overflow-hidden"
        )}
      >
        {/* Mobile Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 lg:hidden z-10"
          onClick={() => setMobileLeftPanelOpen(false)}
        >
          <X className="w-5 h-5" />
        </Button>
        <NotesPanel
          onNoteSelect={handleNoteSelect}
          onGenerateSummary={handleGenerateSummary}
          onGenerateFlashcards={handleGenerateFlashcards}
          onStartTutoring={handleStartTutoring}
          selectedNote={selectedNote}
          subjectFilter="Chemistry"
        />
      </aside>

      {/* Main Content - Right Panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-14 border-b border-border/50 bg-card/30 backdrop-blur-sm flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileLeftPanelOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex"
              onClick={() => setLeftPanelOpen(!leftPanelOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/subjects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Back to Subjects</span>
            </Link>
          </div>

          {/* Active Note Indicator */}
          {selectedNote ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium truncate max-w-[200px]">
                {selectedNote.title}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Chemistry</span>
            </div>
          )}

          {/* Workspace Tabs */}
          <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </header>

        {/* Workspace Content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "chat" && <ChatTutor selectedNote={selectedNote} startTeaching={tutoringStarted} onTeachingStarted={() => setTutoringStarted(false)} subjectName="Chemistry" />}
          {activeTab === "flashcards" && <FlashcardViewer />}
          {activeTab === "flowchart" && <FlowchartCanvas />}
        </div>
      </div>
    </div>
  );
};

export default TutorChemistry;
