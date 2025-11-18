import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const Eligibility = () => {
  const eligiblePersons = [
    "Pessoas com dívidas contraídas em sites de apostas",
    "Trabalhadores CLT afetados por jogo compulsivo",
    "Quem já tentou parar mas não conseguiu sozinho",
    "Pessoas que contraíram empréstimos para jogar",
    "Quem teve impactos no trabalho ou família"
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quem pode ser atendido?
            </h2>
            <p className="text-lg text-muted-foreground">
              Atendemos pessoas em diferentes situações relacionadas ao jogo patológico
            </p>
          </div>
          
          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="space-y-4">
              {eligiblePersons.map((person, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{person}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
