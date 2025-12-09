import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const FAQ = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "Como funciona a consulta inicial?",
      answer:
        "A primeira consulta é totalmente sigilosa e gratuita. Analisamos seu caso, identificamos as possibilidades jurídicas e traçamos um plano de ação personalizado para sua situação.",
    },
    {
      question: "Quanto tempo em média levam os processos?",
      answer:
        "O tempo varia de acordo com cada caso, mas geralmente leva de 3 a 6 meses. Trabalhamos para agilizar ao máximo, mantendo você informado em todas as etapas do processo.",
    },
    {
      question: "Preciso ter laudo médico para começar?",
      answer:
        "Não é necessário ter laudo médico inicialmente. Podemos orientá-lo sobre como obter o diagnóstico adequado e encaminhá-lo para profissionais especializados em saúde mental.",
    },
    {
      question: "Como funciona o atendimento humanizado?",
      answer:
        "Cada caso é analisado de forma personalizada, entendendo a necessidade real de cada família, com todo o apoio que a situação demanda.",
    },
    {
      question: "Quais documentos preciso apresentar?",
      answer:
        "Na primeira consulta, basta trazer RG, CPF e comprovante de residência. Documentos adicionais como comprovantes de empréstimos e extratos bancários podem ser solicitados posteriormente, conforme a estratégia definida para seu caso.",
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div
        ref={elementRef}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços e processos jurídicos
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
