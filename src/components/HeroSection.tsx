
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { AnimatedHero } from "@/components/ui/animated-hero";

export default function HeroSection() {
  return (
    <AnimatedHero 
      title="Converta - Alat Konversi Modern" 
      description="Converta adalah konverter unit yang kuat dan intuitif yang bekerja secara offline. Konversi antar beberapa unit dengan mulus dengan hasil real-time."
    />
  );
}
