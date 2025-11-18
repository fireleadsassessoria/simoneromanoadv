import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Eligibility } from "@/components/Eligibility";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Eligibility />
      <ContactForm />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
