import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hapagLogo from "@/assets/hapag-logo.png";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={hapagLogo} alt="Hapag Bayanihan Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Hapag Bayanihan</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/whats-here">
              <Button variant="nav" size="sm">
                What's Here
              </Button>
            </Link>
            <Link to="/be-our-driver">
              <Button variant="nav" size="sm">
                Be Our Driver
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="nav" size="sm">
                About
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="cta" size="sm">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;