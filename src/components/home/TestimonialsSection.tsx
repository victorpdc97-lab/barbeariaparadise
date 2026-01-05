import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Oliveira",
    text: "Melhor barbearia da cidade! Atendimento impecável e resultado sempre perfeito.",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    text: "Ambiente top e profissionais de primeira. Nunca mais troco de barbearia.",
    rating: 5,
  },
  {
    name: "André Lima",
    text: "O degradê que fazem aqui é outro nível. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Felipe Costa",
    text: "Pontualidade nota 10. Agendo pelo WhatsApp e sou atendido na hora marcada.",
    rating: 5,
  },
  {
    name: "Bruno Mendes",
    text: "Produtos de qualidade e atendimento personalizado. Vale cada centavo.",
    rating: 5,
  },
  {
    name: "Ricardo Souza",
    text: "Desde que descobri a Paradise, não vou em outro lugar. Simplesmente o melhor.",
    rating: 5,
  },
  {
    name: "Thiago Alves",
    text: "O Carlos é um mestre na barba. Saio de lá me sentindo outro homem.",
    rating: 5,
  },
  {
    name: "Gabriel Ferreira",
    text: "Ambiente acolhedor, clima descontraído e resultado profissional. Perfeito!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O QUE DIZEM <span className="text-primary">NOSSOS CLIENTES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação de quem confia no nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              {/* Quote Icon */}
              <Quote size={24} className="text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-muted-foreground text-sm font-medium">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;