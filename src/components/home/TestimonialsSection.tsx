import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Marcos Silva", role: "Cliente desde 2020", text: "Vou à Paradise toda semana e nunca me decepcionei. O ambiente é impecável, os barbeiros são atenciosos e o resultado é sempre acima do esperado. Recomendo de olhos fechados.", rating: 5, source: "Google Reviews" },
  { name: "João Pedro", role: "Membro do Clube", text: "Depois que assinei o Clube, não consigo imaginar ir a outra barbearia. O custo-benefício é absurdo e a qualidade do corte se mantém consistente toda vez.", rating: 5, source: "Google Reviews" },
  { name: "André Costa", role: "Membro do Clube", text: "O Jonathan é um artista. Expliquei o que eu queria uma vez e desde então ele já sabe exatamente o que fazer. Fora o café e a sinuca, que fazem da espera um prazer.", rating: 5, source: "Google Reviews" },
  { name: "Dr. Luís Reis", role: "Cliente", text: "Excelente atendimento na barbearia! Cada detalhe faz a diferença: do cuidado com os clientes ao atendimento personalizado, tudo impecável. Quero parabenizar toda a equipe incrível: Jonathan, Tariki, Lucas e Kelvin — vocês transformam cada visita em uma experiência VIP, do corte ao momento de barbearia. Vale muito a pena conhecer e se sentir cuidado com tanto profissionalismo e dedicação!", rating: 5, source: "Google Reviews" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="section-clean bg-gradient-soft relative grain">
      <div className="container-clean relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-10 opacity-0 animate-fade-up">
            <p className="eyebrow mb-4">Depoimentos</p>
            <h2 className="headline-section text-foreground">O que dizem sobre nós</h2>
          </div>

          <div className="mb-10">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-foreground text-foreground" />
              ))}
            </div>
            <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic mb-6 min-h-[100px]">
              "{t.text}"
            </blockquote>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role} · {t.source}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-foreground w-6" : "bg-border hover:bg-muted-foreground"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
