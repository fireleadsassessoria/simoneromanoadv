import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Eligibility } from "@/components/Eligibility";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Eligibility />
      <Footer />
    </div>
  );
};

export default Index;
