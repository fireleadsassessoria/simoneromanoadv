import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const { toast } = useToast();
  const { elementRef, isVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xeonealb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setShowWhatsAppModal(true);
      }
    } catch (error) {
      setShowWhatsAppModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact-form" className="py-20 bg-background">
        <div
          ref={elementRef}
          className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                Formulário 100% Sigiloso
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Avalie seu caso gratuitamente
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo para que possamos entender sua situação e oferecer a
                melhor orientação jurídica
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Informações de Contato</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Seus dados estão protegidos por sigilo profissional
                </p>
              </div>

              <div>
                <Label htmlFor="name">
                  Nome completo <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">
                    Telefone com WhatsApp <span className="text-primary">*</span>
                  </Label>
                  <PhoneInput
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    required
                    className="mt-2"
                    maxLength={15}
                  />
                </div>
                <div>
                  <Label htmlFor="email">
                    E-mail <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-3 block">
                  Qual benefício você gostaria de garantir? <span className="text-primary">*</span>
                </Label>

                <div className="space-y-3">

                  {/* BPC LOAS */}
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <Checkbox id="bpc_loas" name="benefits" value="bpc_loas" />
                    <Label htmlFor="bpc_loas" className="cursor-pointer flex-1">
                      BPC LOAS
                    </Label>
                  </div>

                  {/* Isenção de IPVA */}
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <Checkbox id="ipva" name="benefits" value="ipva" />
                    <Label htmlFor="ipva" className="cursor-pointer flex-1">
                      Isenção de IPVA
                    </Label>
                  </div>

                  {/* Isenção de Imposto de Renda */}
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <Checkbox id="ir" name="benefits" value="ir" />
                    <Label htmlFor="ir" className="cursor-pointer flex-1">
                      Isenção de Imposto de Renda
                    </Label>
                  </div>

                  {/* Saque do FGTS */}
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <Checkbox id="fgts" name="benefits" value="fgts" />
                    <Label htmlFor="fgts" className="cursor-pointer flex-1">
                      Saque do FGTS
                    </Label>
                  </div>

                  {/* Medicamentos e Planos de Saúde Negados */}
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <Checkbox id="medicamentos" name="benefits" value="medicamentos" />
                    <Label htmlFor="medicamentos" className="cursor-pointer flex-1">
                      Medicamentos e Planos de Saúde Negados
                    </Label>
                  </div>

                </div>
              </div>

              <div>
                <Label className="mb-3 block">
                  Qual sua renda mensal atual? <span className="text-primary">*</span>
                </Label>
                <RadioGroup name="monthly_income" required className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="3k-5k" id="3k-5k" />
                    <Label htmlFor="1k-3k" className="cursor-pointer flex-1">
                      R$ 1.500 - R$ 3.000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="5k-10k" id="5k-10k" />
                    <Label htmlFor="3k-5k" className="cursor-pointer flex-1">
                      R$ 3.000 - R$ 5.000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="10k+" id="10k+" />
                    <Label htmlFor="5k+" className="cursor-pointer flex-1">
                      Acima de R$ 5.000
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">
                  Você possui emprego CLT? <span className="text-primary">*</span>
                </Label>
                <RadioGroup name="has_clt" required className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="clt-yes" />
                    <Label htmlFor="clt-yes" className="cursor-pointer">
                      Sim
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="clt-no" />
                    <Label htmlFor="clt-no" className="cursor-pointer">
                      Não
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="message">
                  Conte brevemente o que está acontecendo
                </Label>
                <p className="text-xs text-muted-foreground mt-1 mb-2">
                  Descreva sua situação de forma breve.
                </p>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Descreva sua situação..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Quero que um especialista avalie meu caso"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao enviar este formulário, você concorda que suas informações sejam utilizadas
                exclusivamente pela polícia e contato profissional. Prometemos não enviar spam ou
                vender seus dados.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Erro ao enviar formulário</DialogTitle>
            <DialogDescription>
              Não foi possível enviar o formulário. Por favor, entre em contato conosco diretamente
              pelo WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <Button
            variant="hero"
            size="lg"
            className="w-full hover:scale-105 transition-all duration-300"
            onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          >
            Abrir WhatsApp
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
