
import { Link } from "react-router-dom";
import { Github, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-semibold"
            >
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md mr-1">C</span>
              <span className="text-gradient">Converta</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A comprehensive unit conversion tool with real-time conversion, batch conversion, and more.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium">Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/converter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Converter
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t text-sm text-muted-foreground">
          <p>© {currentYear} Converta. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for precision
          </p>
        </div>
      </div>
    </footer>
  );
}
