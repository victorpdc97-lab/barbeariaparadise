import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Silva",
    text: "Melhor barbearia da cidade. Ambiente incrível e profissionais de primeira!",
    rating: 5,
  },
  {
    name: "João Pedro",
    text: "Atendimento impecável. O corte ficou exatamente como eu queria.",
    rating: 5,
  },
  {
    name: "André Costa",
    text: "O corte ficou perfeito. Recomendo demais para quem busca qualidade!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-apple bg-background">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow-apple mb-4 animate-fade-up">Depoimentos</p>
          <h2 className="headline-apple animate-fade-up delay-100">
            O que nossos<br />clientes dizem.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 text-center animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[hsl(45,100%,50%)] text-[hsl(45,100%,50%)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-semibold text-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
