
import { Instagram, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">C</span>
              <span className="text-xl font-semibold">Converta</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Konversi unit dengan presisi tanpa batasan.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/converter" className="text-muted-foreground hover:text-primary transition-colors">Konverter</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Tentang</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Pengembang</h3>
            <p className="text-sm text-muted-foreground">
              Muhammad Rafa Shaquille Pradana
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rafashaqq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/rafapradanaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/rafapradana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Converta. Dibuat oleh Muhammad Rafa Shaquille Pradana.</p>
        </div>
      </div>
    </footer>
  );
}
