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
  const isAuthPage = ["/login", "/signup", "/forgot-password"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isAuthPage) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4",
        scrolled && "bg-background/80 backdrop-blur-xl border-b border-border/30"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
            !scrolled && "glass-dark"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-white">
              Elyai<span className="text-primary">tra</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 text-sm font-medium rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Sign In
            </Link>
            <GetStartedButton className="px-5 py-2.5 text-sm" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass-dark rounded-2xl p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium rounded-xl text-white hover:bg-white/10 transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-white/10" />
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-xl text-center border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                Sign In
              </Link>
              <GetStartedButton className="w-full justify-center mt-1" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
