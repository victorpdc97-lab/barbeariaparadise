import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import {
  Scissors,
  Sparkles,
  Wine,
  Car,
  Users,
  Lock,
  ShowerHead,
  CalendarCheck,
  CreditCard,
  MessageCircle,
} from "lucide-react";

import diaNoivo1 from "@/assets/dia-noivo-1.webp";
import diaNoivo2 from "@/assets/dia-noivo-2.webp";
import diaNoivo3 from "@/assets/dia-noivo-3.webp";
import diaNoivo4 from "@/assets/dia-noivo-4.webp";
import diaNoivo5 from "@/assets/dia-noivo-5.webp";

// Sistema de reserva online do Dia do Noivo.
const RESERVA_URL = "https://noivo.barbeariaparadise.com.br";

// Itens e preços espelham o config do sistema de reserva (repo dia-do-noivo, config.ts).
// Ao mudar um preço lá, atualize aqui também.
const combo = {
  name: "Combo Barbearia",
  price: "R$ 200",
  includes: ["Corte", "Barba", "Sobrancelha", "Limpeza de pele", "Finalização"],
};

const extraGroups = [
  {
    group: "Bem-estar",
    items: [
      { name: "Banho", price: "R$ 20" },
      { name: "Massagem relaxante", price: "R$ 90" },
    ],
  },
  {
    group: "Look",
    items: [
      {
        name: "Passadoria do look",
        price: "R$ 30",
        note: "Calça, blazer, camisa e paletó. Traga o look no dia.",
      },
      { name: "Engraxate de sapatos sociais", price: "R$ 30" },
      {
        name: "Montagem do look",
        price: "R$ 30",
        note: "Auxílio para vestir o traje, ajustar gravata, posicionar abotoaduras e finalizar a apresentação.",
      },
    ],
  },
  {
    group: "Comida",
    items: [
      { name: "Café da manhã", price: "R$ 60" },
      { name: "Sushi", price: "R$ 150" },
    ],
  },
];

// Exemplos calculados com os preços acima (5 pessoas: noivo + 4 padrinhos).
const examples = [
  { label: "Noivo + 4 padrinhos, Combo Barbearia", total: "R$ 1.000" },
  { label: "O mesmo grupo, com banho e café da manhã para todos", total: "R$ 1.400" },
];

const experience = [
  { icon: Lock, text: "Barbearia reservada para o seu grupo: um Dia do Noivo por dia" },
  { icon: Sparkles, text: "Tratamentos completos por profissionais especializados" },
  { icon: Wine, text: "Espaço climatizado com bar completo e sinuca para os convidados" },
  { icon: ShowerHead, text: "Vestiário com toalete completo para todos saírem prontos" },
  { icon: Car, text: "Estacionamento na porta para sua comodidade" },
  { icon: Users, text: "Consultoria exclusiva para o noivo, cada detalhe perfeito" },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Monte o pacote e escolha a data",
    text: "Defina quantas pessoas em cada item e escolha o dia e o horário. Reservas com pelo menos 7 dias de antecedência, de segunda a sábado. Um grupo por dia, com a barbearia à disposição de vocês.",
  },
  {
    icon: CreditCard,
    title: "Pague no Pix ou no cartão",
    text: "O pagamento é antecipado e garante a data. No Pix, a chave aparece na hora. No cartão, a equipe envia o link pelo WhatsApp.",
  },
  {
    icon: MessageCircle,
    title: "Receba a confirmação no WhatsApp",
    text: "Assim que o pagamento for conferido, você recebe a confirmação da reserva com o resumo completo. Depois, é só chegar e aproveitar.",
  },
];

// Respostas seguem as regras do sistema de reserva (repo dia-do-noivo, config.ts).
const faqs = [
  {
    question: "Tem número mínimo de pessoas?",
    answer:
      "Não. Você escolhe de 1 a 10 pessoas em cada item, de forma independente. Dá para fechar só o Combo Barbearia para o noivo ou montar um pacote completo para todos os padrinhos.",
  },
  {
    question: "Com quanta antecedência preciso reservar?",
    answer:
      "A reserva online aceita datas a partir de 7 dias e até 6 meses à frente. Como é um grupo por dia, vale garantir a data assim que o casamento estiver marcado.",
  },
  {
    question: "Em quais dias e horários acontece?",
    answer:
      "De segunda a sexta das 7h às 20h e aos sábados das 7h às 15h. Não funciona aos domingos. Você escolhe o horário de início na reserva e a duração depende de quantas pessoas vão fazer o Combo Barbearia.",
  },
  {
    question: "Posso pagar no dia?",
    answer:
      "Não. O pagamento é antecipado e é ele que garante a data. Pode ser no Pix ou no cartão de crédito, com link enviado pela nossa equipe pelo WhatsApp. A reserva fica guardada por 48 horas aguardando o pagamento.",
  },
  {
    question: "Posso cancelar ou remarcar?",
    answer:
      "Para cancelar ou mudar a data, fale com a nossa equipe pelo WhatsApp. Pelo site você consulta a reserva, mas não altera.",
  },
  {
    question: "Como consulto minha reserva?",
    answer:
      "No sistema de reserva, em Minha reserva, informando o celular usado no cadastro. Você também recebe o resumo e a confirmação do pagamento no WhatsApp.",
  },
  {
    question: "Preciso levar alguma coisa?",
    answer:
      "Se escolher passadoria ou montagem do look, traga o look no dia (calça, blazer, camisa e paletó). É permitida a entrada de alimentos, e o café da manhã e o sushi também podem ser incluídos no pacote.",
  },
  {
    question: "Posso usar o Clube Paradise?",
    answer: "Não. O Dia do Noivo é um pacote à parte e não entra nos benefícios do Clube Paradise.",
  },
];

const galleryImages = [
  { src: diaNoivo1, alt: "Dia do Noivo, Capa do pacote especial Barbearia Paradise" },
  { src: diaNoivo2, alt: "Paradise, Marca de moda masculina fundada em 2013" },
  { src: diaNoivo3, alt: "Barbearia Paradise, Espaço moderno e diferenciado" },
  { src: diaNoivo4, alt: "Dia do Noivo no Paraíso, Experiência exclusiva para o casamento" },
  { src: diaNoivo5, alt: "Experiência, Bar, sinuca, vestiário e tratamentos completos" },
];

const DiaDoNoivo = () => {
  usePageMeta({
    title: "Dia do Noivo | Barbearia Paradise",
    description:
      "Pacote especial Dia do Noivo. Experiência exclusiva para o noivo e padrinhos com corte, barba, sobrancelha e limpeza de pele por R$200/pessoa, mais extras opcionais. Reserve online.",
  });

  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho uma dúvida sobre o pacote Dia do Noivo."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-foreground">
        <div className="relative z-10 container-clean py-16 lg:py-24">
          <div className="max-w-2xl">
            <div
              className="gold-line mb-6 animate-fade-up"
              style={{ background: "hsl(0 0% 100%)" }}
            />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50 mb-4 animate-fade-up delay-100">
              Pacote Especial
            </p>
            <h1 className="headline-hero text-primary-foreground mb-6 animate-fade-up delay-200">
              Dia do<br />
              <span className="italic text-primary-foreground/90">Noivo</span>
            </h1>
            <p className="text-base text-primary-foreground/60 max-w-lg mb-10 animate-fade-up delay-300 leading-relaxed">
              Uma experiência exclusiva para o noivo e seus padrinhos. Sem
              stress, sem imprevistos, apenas cuidado e preparação para um dos
              dias mais especiais da vida.
            </p>
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row sm:items-center gap-4">
              <a href={RESERVA_URL} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton
                  text="Reservar online"
                  className="w-64 border-foreground/20 bg-primary-foreground text-foreground"
                />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-4"
              >
                Dúvidas? Fale no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Monte o pacote */}
      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 animate-fade-up">
              <div className="gold-line mb-5 mx-auto" />
              <h2 className="headline-section text-foreground mb-3">
                Monte o<br />
                <span className="italic">pacote</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Você escolhe quantas pessoas em cada item. Valores por pessoa.
              </p>
            </div>

            <div className="card-clean bg-card animate-fade-up delay-100">
              <div className="px-6 py-5">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Barbearia
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="icon-container flex-shrink-0">
                      <Scissors size={16} />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold block">
                        {combo.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {combo.includes.join(", ")}
                      </span>
                    </div>
                  </div>
                  <span className="font-display text-xl text-foreground font-bold whitespace-nowrap">
                    {combo.price}
                  </span>
                </div>
              </div>

              {extraGroups.map((group) => (
                <div key={group.group} className="border-t border-border px-6 py-5">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    {group.group}
                  </p>
                  <ul className="space-y-4">
                    {group.items.map((item) => (
                      <li key={item.name} className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-foreground block">{item.name}</span>
                          {item.note && (
                            <span className="text-xs text-muted-foreground">{item.note}</span>
                          )}
                        </div>
                        <span className="font-display text-xl text-foreground whitespace-nowrap">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 animate-fade-up delay-200">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3 text-center">
                Exemplos
              </p>
              <ul className="space-y-2">
                {examples.map((example) => (
                  <li
                    key={example.label}
                    className="flex items-center justify-between gap-4 text-sm border-b border-border pb-2"
                  >
                    <span className="text-muted-foreground">{example.label}</span>
                    <span className="font-display text-lg text-foreground whitespace-nowrap">
                      {example.total}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6 animate-fade-up delay-200">
              Clube Paradise não disponível para este serviço.
            </p>

            <div className="text-center mt-8 animate-fade-up delay-300 flex justify-center">
              <a href={RESERVA_URL} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton text="Reservar online" className="w-56" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="section-clean bg-background border-t border-border">
        <div className="container-clean">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <div className="gold-line mb-5" />
            <h2 className="headline-section text-foreground mb-8">
              A<br />
              <span className="italic">experiência</span>
            </h2>
            <ul className="space-y-4">
              {experience.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="icon-container flex-shrink-0">
                    <item.icon size={16} />
                  </div>
                  <span className="text-foreground text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-tight bg-gradient-soft relative grain">
        <div className="container-clean relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 animate-fade-up">
              <p className="eyebrow mb-4">Reserva online</p>
              <h2 className="headline-section text-foreground">Como funciona</h2>
            </div>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="card-clean p-6 md:p-8 animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-foreground/5 flex items-center justify-center flex-shrink-0">
                      <step.icon size={22} className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        Passo {index + 1}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="text-center mb-14 animate-fade-up">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="headline-section text-foreground">Perguntas frequentes</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 animate-fade-up"
                  style={{ animationDelay: `${(index + 2) * 0.06}s` }}
                >
                  <AccordionTrigger className="text-foreground text-sm font-medium hover:text-foreground/70 hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section-clean bg-background border-t border-border">
        <div className="container-clean">
          <div className="text-center mb-14 animate-fade-up">
            <p className="eyebrow mb-4">Conheça o projeto</p>
            <h2 className="headline-section text-foreground">O espaço</h2>
          </div>
          <div className="flex flex-col gap-3 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                loading={index < 2 ? "eager" : "lazy"}
                className="w-full h-auto rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-clean bg-foreground">
        <div className="container-clean">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-primary-foreground/10 mb-6 animate-fade-up">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4 animate-fade-up delay-100">
              Reserve sua data
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-8 animate-fade-up delay-200">
              Escolha a data, monte o pacote e garanta o Dia do Noivo em poucos
              minutos. Se preferir, tire suas dúvidas pelo WhatsApp.
            </p>
            <div className="animate-fade-up delay-300 flex flex-col items-center gap-4">
              <a href={RESERVA_URL} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton
                  text="Reservar online"
                  className="w-64 border-foreground/20 bg-primary-foreground text-foreground"
                />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-4"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiaDoNoivo;
