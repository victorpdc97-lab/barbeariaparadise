import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Silva",
    role: "Cliente desde 2020",
    text: "Melhor barbearia da cidade. Ambiente incrível e profissionais de primeira! O atendimento é impecável.",
    rating: 5,
  },
  {
    name: "João Pedro",
    role: "Membro do Clube",
    text: "Atendimento impecável. O corte ficou exatamente como eu queria. Sempre saio satisfeito!",
    rating: 5,
  },
  {
    name: "André Costa",
    role: "Membro do Clube",
    text: "O corte ficou perfeito. Recomendo demais para quem busca qualidade! Virei cliente fiel.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-clean bg-background">
      <div className="container-clean">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block opacity-0 animate-fade-up">Depoimentos</span>
          <h2 className="headline-section text-foreground opacity-0 animate-fade-up delay-100">
            O QUE DIZEM SOBRE NÓS
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
