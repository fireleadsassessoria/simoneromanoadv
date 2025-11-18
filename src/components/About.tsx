import { Card } from "@/components/ui/card";
import { Badge, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              Especialização em Ludopatia
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advogada Especialista em Casos de Ludopatia
          </h2>
          <p className="text-lg text-muted-foreground">
            Já ajudamos pessoas a reduzirem dívidas, anularem empréstimos e conseguirem 
            afastamento remunerado com respaldo jurídico real.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Badge className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">OAB Regularizada</h3>
            <p className="text-muted-foreground">
              Profissional inscrita e autorizada para atuar em todo território nacional
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Experiência Comprovada</h3>
            <p className="text-muted-foreground">
              Anos de atuação específica em casos de jogo patológico e suas consequências
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sigilo Total</h3>
            <p className="text-muted-foreground">
              Suas informações protegidas por sigilo profissional e ética advocatícia
            </p>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};
