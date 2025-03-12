
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        
        <section className="section-padding">
          <div className="page-container">
            <div className="bg-muted/30 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center space-y-8 neo-blur">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Siap untuk mulai mengkonversi?
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Converta menyediakan semua alat yang Anda butuhkan untuk konversi unit yang tepat.
                Apakah untuk belajar, bekerja, atau kehidupan sehari-hari, antarmuka kami yang intuitif
                membuat konversi unit menjadi sederhana dan akurat.
              </p>
              <RainbowButton className="mt-4">
                <Link to="/converter" className="flex items-center">Coba Converta Sekarang</Link>
              </RainbowButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
