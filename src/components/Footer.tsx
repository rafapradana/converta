
import { Link } from "react-router-dom";
import { Github, Instagram, Twitter, Heart, User, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto bg-muted/20">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-semibold"
            >
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md mr-1">C</span>
              <span className="text-gradient">Converta</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Aplikasi konversi unit yang lengkap dengan konversi real-time, batch conversion, dan banyak lagi.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium">Tautan</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link to="/converter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Konverter
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tentang
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium">Developer</h3>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm">Muhammad Rafa Shaquille Pradana</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/rafapradana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/rafapradanaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/rafashaqq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium">Kontak</h3>
            <p className="text-sm text-muted-foreground">
              Punya pertanyaan atau saran? Silakan hubungi saya melalui sosial media.
            </p>
            <div className="bg-primary/10 rounded-lg p-3 flex items-center space-x-2 text-sm text-primary">
              <Code className="h-4 w-4" />
              <span>Dibuat dengan ❤️ di Indonesia</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t text-sm text-muted-foreground">
          <p>© {currentYear} Converta. Hak cipta dilindungi undang-undang.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Dibuat dengan <Heart className="h-4 w-4 mx-1 text-red-500" /> untuk presisi
          </p>
        </div>
      </div>
    </footer>
  );
}
