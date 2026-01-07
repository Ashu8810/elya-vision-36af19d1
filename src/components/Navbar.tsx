import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GetStartedButton from "./GetStartedButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Subjects", href: "/subjects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Docs", href: "/docs" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isLightPage = location.pathname === "/features";
  const isAuthPage = ["/login", "/signup", "/forgot-password"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isAuthPage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled && !isLightPage && "bg-background/80 backdrop-blur-lg border-b border-border/50",
        scrolled && isLightPage && "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm",
        isLightPage && !scrolled && "bg-background"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
            !isLightPage && "glass-dark",
            isLightPage && "bg-card shadow-md border border-border"
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "text-xl font-bold tracking-tight",
              isLightPage ? "text-foreground" : "text-white"
            )}
          >
            ELYAITRA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isLightPage
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full border transition-colors",
                isLightPage
                  ? "border-border text-foreground hover:bg-muted"
                  : "border-white/20 text-white hover:bg-white/10"
              )}
            >
              Sign In
            </Link>
            <GetStartedButton />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg",
              isLightPage ? "text-foreground" : "text-white"
            )}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className={cn(
              "md:hidden mt-2 rounded-2xl p-4",
              isLightPage ? "bg-card border border-border shadow-lg" : "glass-dark"
            )}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isLightPage
                      ? "text-foreground hover:bg-muted"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className={cn("my-2", isLightPage ? "border-border" : "border-white/10")} />
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg text-center border transition-colors",
                  isLightPage
                    ? "border-border text-foreground hover:bg-muted"
                    : "border-white/20 text-white hover:bg-white/10"
                )}
              >
                Sign In
              </Link>
              <GetStartedButton className="w-full justify-center" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
