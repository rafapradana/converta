
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Home, Calculator, Info } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { name: 'Beranda', url: '/', icon: Home },
    { name: 'Konverter', url: '/converter', icon: Calculator },
    { name: 'Tentang', url: '/about', icon: Info }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="page-container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 text-xl md:text-2xl font-semibold">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md mr-1">C</span>
            <span className="text-gradient">Converta</span>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      <NavBar items={navItems} className="mt-4" />
    </header>
  );
}
