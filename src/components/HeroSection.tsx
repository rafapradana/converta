
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 max-w-2xl animate-slideUp">
            <div className="flex flex-col space-y-2">
              <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                Unit Conversion Simplified
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-gradient">Convert</span> anything, <br />
                <span className="text-gradient">anywhere.</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Converta is a powerful, intuitive unit converter that works offline.
              Convert between multiple units seamlessly with real-time results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button asChild size="lg" className="rounded-full button-glow group">
                <Link to="/converter">
                  Start Converting
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden backdrop-blur-sm neo-blur border border-white/20 shadow-elevated p-6 animate-float">
              <div className="flex flex-col h-full">
                <div className="h-10 mb-6 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-background/50 rounded-xl p-6 space-y-4 backdrop-blur-sm">
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-medium">Value</label>
                    <div className="bg-background rounded-lg p-3 text-xl font-medium">
                      100
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-medium">From</label>
                      <div className="bg-background rounded-lg p-3 text-sm">
                        Celsius
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-medium">To</label>
                      <div className="bg-background rounded-lg p-3 text-sm">
                        Fahrenheit
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-medium">Result</label>
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 text-xl font-medium">
                      212°F
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
