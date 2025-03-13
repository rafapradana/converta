"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./google-gemini-effect";
import { RainbowButton } from "./rainbow-button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function AnimatedHero({ title, description }: { title: string, description: string }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  return (
    <div
      className="h-[100vh] h-[100svh] w-full relative overflow-hidden flex items-center justify-center"
      ref={ref}
    >
      <div className="page-container z-10 relative">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col space-y-6 max-w-2xl animate-slideUp z-20 mx-auto">
            <div className="flex flex-col space-y-2 items-center">
              <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                Konversi Unit, Disederhanakan
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-gradient">Konversi unit</span> apapun, <br />
                <span className="text-gradient">dimanapun.</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center">
              <RainbowButton className="flex items-center justify-center">
                <Link to="/converter" className="flex items-center">
                  Mulai Konversi
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
