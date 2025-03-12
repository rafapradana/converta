
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
    <div className="bg-card rounded-xl p-6 border shadow-subtle card-hover h-full">
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
      title: "Real-time Conversion",
      description:
        "See conversion results instantly as you type, no need to hit submit.",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Reverse Conversion",
      description:
        "Easily flip between source and target units with a single click.",
    },
    {
      icon: <Copy className="h-5 w-5" />,
      title: "Copy to Clipboard",
      description:
        "Copy conversion results to your clipboard with a single click.",
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Export Results",
      description: "Save your conversion results in CSV or PDF formats.",
    },
    {
      icon: <PlusCircle className="h-5 w-5" />,
      title: "Multiple Conversions",
      description:
        "Convert to multiple units simultaneously for efficient workflows.",
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Unit Search",
      description: "Quickly find the exact unit you need with our search functionality.",
    },
    {
      icon: <Moon className="h-5 w-5" />,
      title: "Dark Mode",
      description:
        "Easy on the eyes with a beautiful dark mode for comfortable usage.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Offline Access",
      description:
        "Works offline as a Progressive Web App, install on any device.",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="page-container">
        <div className="flex flex-col space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Packed with Powerful Features
          </h2>
          <p className="text-muted-foreground">
            Converta is designed with simplicity and functionality in mind, providing all the tools you need for seamless unit conversion.
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
