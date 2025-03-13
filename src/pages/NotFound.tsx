import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Animasi untuk transisi halaman
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      className="flex flex-col min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 py-16 space-y-6 max-w-md">
          <p className="text-sm font-medium text-primary bg-primary/10 rounded-full py-1 px-3 inline-block">Error 404</p>
          <h1 className="text-4xl md:text-5xl font-bold">Halaman tidak ditemukan</h1>
          <p className="text-muted-foreground">
            Maaf, kami tidak dapat menemukan halaman yang Anda cari. Halaman mungkin telah dipindahkan atau dihapus.
          </p>
          <Button asChild className="rounded-full button-glow mt-4 space-x-2">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}

export default NotFound;
