import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Upload,
  FolderOpen,
  BookOpen,
  Sparkles,
  Layers,
  Check,
  File,
  X,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Note {
  id: string;
  title: string;
  subject: string;
  topic: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  pages: number;
}

interface NotesPanelProps {
  onNoteSelect: (note: Note | null) => void;
  onGenerateSummary: () => void;
  onGenerateFlashcards: () => void;
  selectedNote: Note | null;
}

const preloadedNotes: Note[] = [
  { id: "1", title: "Introduction to Machine Learning", subject: "AI", topic: "ML Basics", difficulty: "Beginner", pages: 24 },
  { id: "2", title: "Neural Networks Deep Dive", subject: "AI", topic: "Deep Learning", difficulty: "Advanced", pages: 48 },
  { id: "3", title: "Python Data Structures", subject: "Programming", topic: "Python", difficulty: "Intermediate", pages: 32 },
  { id: "4", title: "Organic Chemistry Fundamentals", subject: "Chemistry", topic: "Organic", difficulty: "Beginner", pages: 56 },
  { id: "5", title: "Thermodynamics Principles", subject: "Mechanical", topic: "Thermodynamics", difficulty: "Intermediate", pages: 40 },
];

const difficultyColors = {
  Beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Advanced: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

const NotesPanel = ({ onNoteSelect, onGenerateSummary, onGenerateFlashcards, selectedNote }: NotesPanelProps) => {
  const [activeTab, setActiveTab] = useState<"preloaded" | "upload">("preloaded");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success">("idle");
  const [filterSubject, setFilterSubject] = useState<string | null>(null);

  const subjects = [...new Set(preloadedNotes.map((note) => note.subject))];

  const filteredNotes = filterSubject
    ? preloadedNotes.filter((note) => note.subject === filterSubject)
    : preloadedNotes;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setUploadStatus("uploading");
      // Simulate upload
      setTimeout(() => {
        setUploadStatus("success");
      }, 1500);
    }
  };

  const clearUpload = () => {
    setUploadedFile(null);
    setUploadStatus("idle");
  };

  return (
    <div className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-r border-border/50">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Study Notes</h2>
            <p className="text-xs text-muted-foreground">Select or upload notes</p>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex gap-1 p-1 bg-muted/50 rounded-lg">
          <button
            onClick={() => setActiveTab("preloaded")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all",
              activeTab === "preloaded"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <FolderOpen className="w-4 h-4" />
            Preloaded
          </button>
          <button
            onClick={() => setActiveTab("upload")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all",
              activeTab === "upload"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Upload className="w-4 h-4" />
            Upload
          </button>
        </div>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          {activeTab === "preloaded" ? (
            <>
              {/* Subject Filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant={filterSubject === null ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => setFilterSubject(null)}
                >
                  All
                </Badge>
                {subjects.map((subject) => (
                  <Badge
                    key={subject}
                    variant={filterSubject === subject ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => setFilterSubject(subject)}
                  >
                    {subject}
                  </Badge>
                ))}
              </div>

              {/* Notes List */}
              <div className="space-y-2">
                {filteredNotes.map((note) => (
                  <button
                    key={note.id}
                    onClick={() => onNoteSelect(note)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl border transition-all group",
                      selectedNote?.id === note.id
                        ? "bg-primary/10 border-primary/50 shadow-md"
                        : "bg-background/50 border-border/50 hover:bg-accent/50 hover:border-primary/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        selectedNote?.id === note.id ? "bg-primary/20" : "bg-muted/50 group-hover:bg-primary/10"
                      )}>
                        <FileText className={cn(
                          "w-5 h-5",
                          selectedNote?.id === note.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        )} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm truncate">{note.title}</span>
                          {selectedNote?.id === note.id && (
                            <Check className="w-4 h-4 text-primary shrink-0" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{note.topic}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{note.pages} pages</span>
                        </div>
                        <Badge
                          variant="outline"
                          className={cn("mt-2 text-xs", difficultyColors[note.difficulty])}
                        >
                          {note.difficulty}
                        </Badge>
                      </div>
                      <ChevronRight className={cn(
                        "w-4 h-4 text-muted-foreground shrink-0 transition-transform",
                        selectedNote?.id === note.id && "text-primary rotate-90"
                      )} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Upload Section */
            <div className="space-y-4">
              {!uploadedFile ? (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border/50 rounded-xl cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <div className="flex flex-col items-center justify-center p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Upload className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-sm font-medium mb-1">Drop your notes here</p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, TXT</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                  />
                </label>
              ) : (
                <div className="p-4 rounded-xl border border-border/50 bg-background/50">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center",
                      uploadStatus === "success" ? "bg-emerald-500/20" : "bg-primary/20"
                    )}>
                      {uploadStatus === "uploading" ? (
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <File className="w-6 h-6 text-emerald-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{uploadedFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {uploadStatus === "uploading" ? "Uploading..." : "Ready to use"}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={clearUpload}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  {uploadStatus === "success" && (
                    <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-xs text-emerald-400 flex items-center gap-2">
                        <Check className="w-3 h-3" />
                        File uploaded successfully!
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <h4 className="text-sm font-medium mb-2">Supported Formats</h4>
                <div className="flex flex-wrap gap-2">
                  {["PDF", "DOC", "DOCX", "TXT"].map((format) => (
                    <Badge key={format} variant="outline" className="text-xs">
                      .{format.toLowerCase()}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Action Buttons */}
      <div className="p-4 border-t border-border/50 space-y-2">
        <Button
          className="w-full gap-2"
          disabled={!selectedNote && !uploadedFile}
        >
          <BookOpen className="w-4 h-4" />
          Use for Tutoring
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={onGenerateSummary}
            disabled={!selectedNote && !uploadedFile}
          >
            <Sparkles className="w-4 h-4" />
            Summary
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={onGenerateFlashcards}
            disabled={!selectedNote && !uploadedFile}
          >
            <Layers className="w-4 h-4" />
            Flashcards
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotesPanel;
