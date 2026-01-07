import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-bold text-white">
            Elyai<span className="text-primary">tra</span>
          </span>
        </Link>

        {/* Right side - Login */}
        <Link
          to="/login"
          className="px-6 py-2.5 rounded-xl border border-border/50 text-white/80 hover:text-white hover:bg-white/5 transition-all font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
