import { Button } from "@/components/ui/button";
import { Shield, Heart, Lock } from "lucide-react";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Existe um caminho legal para sair das dívidas causadas por jogos
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Caminhos jurídicos reais, seguros e sigilosos para quem está sofrendo com dívidas, 
              empréstimos compulsivos e impactos no trabalho por causa de jogos. Você não está sozinho.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Atendimento 100% sigiloso</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm">Especialista em ludopatia</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm">Sem julgamentos</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="text-base">
              Quero avaliar meu caso
            </Button>
          </div>
          
          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
              <div className="relative border-2 border-primary rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={lawyerPortrait} 
                  alt="Dra. Simone Romano - Advogada Especialista" 
                  className="w-full max-w-md object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm p-6 border-t border-primary">
                  <h3 className="text-xl font-semibold">Dra. Simone Romano</h3>
                  <p className="text-muted-foreground">Advogada Especialista</p>
                  <p className="text-sm text-primary mt-1">Especialização em Ludopatia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
