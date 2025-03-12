
import {
  Zap,
  RefreshCw,
  Copy,
  Download,
  PlusCircle,
  Search,
  Moon,
  Smartphone,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border shadow-subtle card-hover h-full transform transition-all duration-300 hover:scale-105 hover:shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Konversi Real-time",
      description:
        "Lihat hasil konversi secara instan saat Anda mengetik, tanpa perlu menekan tombol submit.",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Konversi Balik",
      description:
        "Dengan mudah beralih antara unit sumber dan target dengan satu klik.",
    },
    {
      icon: <Copy className="h-5 w-5" />,
      title: "Salin ke Clipboard",
      description:
        "Salin hasil konversi ke clipboard Anda dengan satu klik.",
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Ekspor Hasil",
      description: "Simpan hasil konversi Anda dalam format CSV.",
    },
    {
      icon: <PlusCircle className="h-5 w-5" />,
      title: "Konversi Berganda",
      description:
        "Konversi ke beberapa unit secara bersamaan untuk alur kerja yang efisien.",
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Pencarian Unit",
      description: "Temukan unit yang Anda butuhkan dengan cepat menggunakan fungsi pencarian.",
    },
    {
      icon: <Moon className="h-5 w-5" />,
      title: "Mode Gelap",
      description:
        "Nyaman di mata dengan mode gelap yang indah untuk penggunaan yang nyaman.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Akses Offline",
      description:
        "Bekerja offline sebagai Progressive Web App, dapat diinstal di perangkat apa pun.",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="page-container">
        <div className="flex flex-col space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Dilengkapi dengan Fitur Kuat
          </h2>
          <p className="text-muted-foreground">
            Converta dirancang dengan kesederhanaan dan fungsionalitas, menyediakan semua alat yang Anda butuhkan untuk konversi unit yang mulus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
