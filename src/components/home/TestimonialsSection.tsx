import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Silva",
    text: "Melhor barbearia da cidade. Ambiente incrível e profissionais de primeira!",
    rating: 5,
  },
  {
    name: "João Pedro",
    text: "Atendimento impecável. Voltarei sempre!",
    rating: 5,
  },
  {
    name: "André Costa",
    text: "O corte ficou perfeito. Recomendo demais!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider">
            DEPOIMENTOS
          </h2>
          <div className="divider-ornament mt-6 max-w-md mx-auto">
            <span className="text-muted-foreground text-sm tracking-widest">CLIENTES</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="vintage-card p-8 text-center animate-fade-up hover-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-display text-foreground tracking-wider">
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
