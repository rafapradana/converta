
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { User, Github, Instagram, Twitter } from "lucide-react";

export default function About() {
  const faqs = [
    {
      question: "Seberapa akurat konversi yang disediakan?",
      answer: "Converta menyediakan konversi presisi tinggi berdasarkan faktor konversi standar. Untuk kebanyakan penggunaan sehari-hari, hasilnya lebih dari cukup akurat. Aplikasi membulatkan angka secara tepat berdasarkan besarnya untuk menghindari menampilkan tempat desimal yang tidak perlu."
    },
    {
      question: "Bisakah saya menggunakan Converta secara offline?",
      answer: "Ya! Converta dibangun sebagai Progressive Web App (PWA), yang berarti Anda dapat menginstalnya di perangkat Anda dan menggunakannya bahkan tanpa koneksi internet. Aplikasi akan bekerja mulus secara offline dengan semua fitur tersedia."
    },
    {
      question: "Bagaimana cara membuat unit kustom?",
      answer: "Untuk membuat unit kustom, buka halaman Konverter, pilih kategori, dan gunakan opsi 'Tambah Unit Kustom'. Anda perlu memberikan nama, simbol, dan faktor konversi relatif terhadap unit dasar kategori tersebut."
    },
    {
      question: "Bisakah saya mengekspor hasil konversi saya?",
      answer: "Tentu saja! Converta memungkinkan Anda mengekspor hasil konversi dalam format CSV, yang dapat dibuka di aplikasi spreadsheet seperti Excel atau Google Sheets. Cukup klik tombol 'Ekspor CSV' setelah melakukan konversi."
    },
    {
      question: "Apakah Converta gratis untuk digunakan?",
      answer: "Ya, Converta sepenuhnya gratis untuk digunakan dengan semua fitur tersedia. Tidak ada biaya tersembunyi, langganan, atau pembelian dalam aplikasi."
    },
    {
      question: "Bagaimana cara melaporkan bug atau menyarankan fitur?",
      answer: "Kami menyambut umpan balik Anda! Anda dapat melaporkan bug atau menyarankan fitur dengan menghubungi kami melalui link umpan balik di footer situs web."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="page-container">
            <div className="flex flex-col text-center space-y-4 max-w-2xl mx-auto mb-12">
              <Badge className="w-fit mx-auto" variant="outline">Tentang</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Tentang Converta
              </h1>
              <p className="text-muted-foreground">
                Pelajari lebih lanjut tentang Converta, cara kerjanya, dan tim di baliknya.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Misi Kami</h2>
                <p className="text-muted-foreground">
                  Converta dibuat dengan misi sederhana: membuat konversi unit 
                  dapat diakses, akurat, dan intuitif untuk semua orang. Baik Anda 
                  seorang pelajar yang mengerjakan tugas, profesional yang melakukan 
                  perhitungan, atau hanya seseorang yang perlu mengkonversi unit dalam 
                  kehidupan sehari-hari, Converta dirancang untuk menjadi solusi utama Anda.
                </p>
                <p className="text-muted-foreground">
                  Kami percaya bahwa alat harus sederhana, indah, dan efisien. 
                  Itulah mengapa kami telah membangun Converta untuk bekerja secara 
                  offline, tanpa memerlukan backend atau infrastruktur yang kompleks. 
                  Cukup buka aplikasi dan konversi unit secara instan.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Fitur Utama</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Konversi real-time dengan hasil instan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Dukungan untuk berbagai kategori dan konversi unit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Konversi batch untuk beberapa nilai sekaligus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Ekspor hasil ke CSV untuk analisis lebih lanjut</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Bekerja offline sebagai Progressive Web App</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center">Pertanyaan yang Sering Diajukan</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-20 bg-card rounded-xl p-8 border shadow-elevated">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-primary/10 rounded-full p-8 text-primary">
                  <User className="h-16 w-16" />
                </div>
                
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Tentang Developer</h2>
                  <p className="text-muted-foreground">
                    Converta dikembangkan oleh Muhammad Rafa Shaquille Pradana, seorang pengembang yang bersemangat tentang membuat alat yang berguna dan mudah digunakan.
                  </p>
                  
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a
                      href="https://github.com/rafapradana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card p-2 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://x.com/rafapradanaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card p-2 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/rafashaqq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card p-2 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
