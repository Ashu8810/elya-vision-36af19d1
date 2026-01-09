import { Link, useLocation } from "react-router-dom";
import { Brain, Code, FlaskConical, Cog } from "lucide-react";
import { cn } from "@/lib/utils";

const subjects = [
  { 
    id: "ai", 
    name: "AI & ML", 
    path: "/tutor/ai", 
    icon: Brain, 
    color: "purple",
    bgClass: "bg-purple-500/20",
    borderClass: "border-purple-500/30",
    textClass: "text-purple-400"
  },
  { 
    id: "python", 
    name: "Python", 
    path: "/tutor/python", 
    icon: Code, 
    color: "green",
    bgClass: "bg-green-500/20",
    borderClass: "border-green-500/30",
    textClass: "text-green-400"
  },
  { 
    id: "chemistry", 
    name: "Chemistry", 
    path: "/tutor/chemistry", 
    icon: FlaskConical, 
    color: "cyan",
    bgClass: "bg-cyan-500/20",
    borderClass: "border-cyan-500/30",
    textClass: "text-cyan-400"
  },
  { 
    id: "mechanical", 
    name: "Mechanical", 
    path: "/tutor/mechanical", 
    icon: Cog, 
    color: "orange",
    bgClass: "bg-orange-500/20",
    borderClass: "border-orange-500/30",
    textClass: "text-orange-400"
  },
];

export function SubjectSwitcher() {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentSubject = subjects.find(s => s.path === currentPath);

  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
        Switch Subject
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {subjects.map((subject) => {
          const isActive = subject.path === currentPath;
          const Icon = subject.icon;
          
          return (
            <Link
              key={subject.id}
              to={subject.path}
              className={cn(
                "flex flex-col items-center gap-1 p-3 rounded-xl border transition-all duration-200",
                isActive 
                  ? `${subject.bgClass} ${subject.borderClass} ring-2 ring-offset-2 ring-offset-background ring-${subject.color}-500/50`
                  : "bg-card/50 border-border/50 hover:bg-accent/50"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                isActive ? subject.bgClass : "bg-muted/50"
              )}>
                <Icon className={cn("w-4 h-4", isActive ? subject.textClass : "text-muted-foreground")} />
              </div>
              <span className={cn(
                "text-xs font-medium text-center",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}>
                {subject.name}
              </span>
              {isActive && (
                <span className={cn("text-[10px] font-medium", subject.textClass)}>
                  Current
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
