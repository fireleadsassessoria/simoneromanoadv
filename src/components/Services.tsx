import { Card } from "@/components/ui/card";
import { FileText, Briefcase, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div
        ref={elementRef}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como podemos ajudar você
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções jurídicas concretas para transformar sua situação
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:scale-105 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Revisão de Empréstimos</h3>
            <p className="text-muted-foreground mb-4">
              Anulação ou revisão de empréstimos feitos sob compulsão por jogos.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <ArrowRight className="w-4 h-4" />
              <span>Redução significativa de dívidas</span>
            </div>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:scale-105 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Afastamento Remunerado</h3>
            <p className="text-muted-foreground mb-4">
              Afastamento CLT com laudo médico (CID F63.0 – Jogo Patológico).
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <ArrowRight className="w-4 h-4" />
              <span>Tempo para tratamento mantendo renda</span>
            </div>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:scale-105 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Stethoscope className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Encaminhamento Médico</h3>
            <p className="text-muted-foreground mb-4">
              Orientação para tratamento e comprovação legal do transtorno.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <ArrowRight className="w-4 h-4" />
              <span>Documentação necessária para seus direitos</span>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="hover:scale-105 transition-all duration-300" onClick={scrollToForm}>
            Falar com a especialista
          </Button>
        </div>
      </div>
    </section>
  );
};
