import { Card } from "@/components/ui/card";
import { HandCoins, ArrowRight, HeartPulse, Car, CircleDollarSign } from "lucide-react";
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
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
              <CircleDollarSign className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">BPC LOAS</h3>
            <p className="text-muted-foreground mb-4">
              Ajuda financeira para famílias com baixa renda. Se você tem um filho com autismo, pode ter direito ao BPC, que garante um benefício mensal de um salário mínimo.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <ArrowRight className="w-4 h-4" />
              <span>Benefício de prestação continuada</span>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:scale-105 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Car className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Isenção do IPVA para pais de autistas</h3>
            <p className="text-muted-foreground mb-4">
              Você sabia que, em muitos estados, pais de crianças com autismo têm direito à isenção do pagamento do IPVA? Garantimos seu direito a essa isenção, com menos burocracia.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <ArrowRight className="w-4 h-4" />
              <span>Isenção vitalícia</span>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:scale-105 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <HandCoins className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Saque do FGTS para pais de autistas</h3>
            <p className="text-muted-foreground mb-4">
              Pais de autistas podem sacar o FGTS de contas ativas ou inativas para ajudar a custear os tratamentos necessários para seus filhos. Vamos orientá-lo a realizar esse saque.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <ArrowRight className="w-4 h-4" />
              <span>Em casos de CLT</span>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:scale-105 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <HeartPulse className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Plano de Saúde e Medicamentos Negados</h3>
            <p className="text-muted-foreground mb-4">
              Se o plano de saúde negou medicamentos ou tratamentos essenciais para o seu filho com autismo, nós podemos ajudá-lo a reverter essa situação judicialmente.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <ArrowRight className="w-4 h-4" />
              <span>Assistência Total</span>
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
