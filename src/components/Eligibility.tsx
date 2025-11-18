import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Eligibility = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const eligiblePersons = [
    {
      title: "Dívidas em Sites de Apostas",
      description: "Pessoas com dívidas contraídas em sites de apostas online",
      icon: "💳",
    },
    {
      title: "Trabalhadores CLT",
      description: "Trabalhadores CLT afetados por jogo compulsivo",
      icon: "💼",
    },
    {
      title: "Dificuldade em Parar",
      description: "Quem já tentou parar mas não conseguiu sozinho",
      icon: "🤝",
    },
    {
      title: "Empréstimos Compulsivos",
      description: "Pessoas que contraíram empréstimos para jogar",
      icon: "💰",
    },
    {
      title: "Impacto Familiar",
      description: "Quem teve impactos no trabalho ou família",
      icon: "👨‍👩‍👧",
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, eligiblePersons.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-muted/50">
      <div
        ref={elementRef}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quem pode ser atendido?
            </h2>
            <p className="text-lg text-muted-foreground">
              Atendemos pessoas em diferentes situações relacionadas ao jogo patológico
            </p>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {eligiblePersons.map((person, index) => (
                  <Card
                    key={index}
                    className="min-w-[calc(33.333%-1rem)] p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-5xl mb-4">{person.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{person.title}</h3>
                    <p className="text-muted-foreground">{person.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
              onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile/Tablet List */}
          <div className="md:hidden space-y-4">
            {eligiblePersons.map((person, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{person.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{person.title}</h3>
                    <p className="text-muted-foreground text-sm">{person.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
