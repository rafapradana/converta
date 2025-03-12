
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const faqs = [
    {
      question: "How accurate are the conversions?",
      answer: "Converta provides high-precision conversions based on standard conversion factors. For most everyday use, the results are more than accurate enough. The application rounds numbers appropriately based on their magnitude to avoid showing unnecessary decimal places."
    },
    {
      question: "Can I use Converta offline?",
      answer: "Yes! Converta is built as a Progressive Web App (PWA), which means you can install it on your device and use it even without an internet connection. The app will work seamlessly offline with all features available."
    },
    {
      question: "How do I create custom units?",
      answer: "To create a custom unit, go to the Converter page, select a category, and use the 'Add Custom Unit' option. You'll need to provide a name, symbol, and conversion factor relative to the base unit of the category."
    },
    {
      question: "Can I export my conversion results?",
      answer: "Absolutely! Converta allows you to export your conversion results in CSV format, which can be opened in spreadsheet applications like Excel or Google Sheets. Just click the 'Export CSV' button after performing a conversion."
    },
    {
      question: "Is Converta free to use?",
      answer: "Yes, Converta is completely free to use with all features available. There are no hidden costs, subscriptions, or in-app purchases."
    },
    {
      question: "How do I report bugs or suggest features?",
      answer: "We welcome your feedback! You can report bugs or suggest features by contacting us through the feedback link in the footer of the website."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="page-container">
            <div className="flex flex-col text-center space-y-4 max-w-2xl mx-auto mb-12">
              <Badge className="w-fit mx-auto" variant="outline">About</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                About Converta
              </h1>
              <p className="text-muted-foreground">
                Learn more about Converta, how it works, and the team behind it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  Converta was created with a simple mission: to make unit conversion 
                  accessible, accurate, and intuitive for everyone. Whether you're a 
                  student working on assignments, a professional doing calculations, 
                  or just someone who needs to convert units in daily life, Converta 
                  is designed to be your go-to solution.
                </p>
                <p className="text-muted-foreground">
                  We believe that tools should be simple, beautiful, and efficient. 
                  That's why we've built Converta to work offline, without requiring 
                  a backend or complex infrastructure. Just open the app and convert 
                  units instantly.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Real-time conversion with instant results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Support for multiple unit categories and conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Batch conversion for multiple values at once</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Export results to CSV for further analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Works offline as a Progressive Web App</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
