import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GetStartedButtonProps {
  className?: string;
  size?: "default" | "lg";
}

const GetStartedButton = ({ className, size = "default" }: GetStartedButtonProps) => {
  return (
    <Link
      to="/signup"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-200 glow-primary hover:glow-primary-hover hover:brightness-110 active:scale-[0.98]",
        size === "default" && "px-6 py-2.5 text-sm",
        size === "lg" && "px-8 py-3.5 text-base",
        className
      )}
    >
      Get Started
    </Link>
  );
};

export default GetStartedButton;
