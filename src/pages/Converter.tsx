
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConversionForm from "@/components/ConversionForm";
import { Badge } from "@/components/ui/badge";

export default function Converter() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="page-container">
            <div className="flex flex-col text-center space-y-4 max-w-2xl mx-auto mb-12">
              <Badge className="w-fit mx-auto" variant="outline">Converter</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Convert units with precision
              </h1>
              <p className="text-muted-foreground">
                Select a category, choose your units, and get instant conversion results.
                Add multiple conversions, export to CSV, or perform batch conversions.
              </p>
            </div>
            
            <ConversionForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
