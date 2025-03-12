
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
              <Badge className="w-fit mx-auto" variant="outline">Konverter</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Konversi unit dengan presisi
              </h1>
              <p className="text-muted-foreground">
                Pilih kategori, pilih unit Anda, dan dapatkan hasil konversi instan.
                Tambahkan beberapa konversi, ekspor ke CSV, atau lakukan konversi batch.
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
