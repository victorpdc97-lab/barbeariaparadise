import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const ContatoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-20 bg-foreground">
          <div className="container-narrow text-center">
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight mb-4">Contato</h1>
            <p className="text-primary-foreground/60 text-sm">Fale conosco</p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="gold-line mb-5" />
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Envie uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Nome</label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} required className="border-border bg-transparent focus:border-foreground transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Telefone</label>
                    <Input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" value={formData.phone} onChange={handleChange} required className="border-border bg-transparent focus:border-foreground transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Mensagem</label>
                    <Textarea id="message" name="message" placeholder="Como podemos ajudar?" value={formData.message} onChange={handleChange} rows={4} className="border-border bg-transparent resize-none focus:border-foreground transition-colors" />
                  </div>
                  <InteractiveHoverButton type="submit" disabled={isSubmitting} text={isSubmitting ? "Enviando..." : "Enviar Mensagem"} className="w-full" />
                </form>
                <div className="mt-8 p-5 border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">Prefere agendar diretamente?</p>
                  <InteractiveHoverButton href={bookingLink} target="_blank" text="Agendar Horário" className="w-full" />
                </div>
              </div>

              <div className="space-y-8">
                <div className="gold-line mb-5" />
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Informações</h2>
                {[
                  { icon: MapPin, title: "Endereço", content: <p className="text-sm text-muted-foreground">Rua Juiz de Fora, 1374<br />Santo Agostinho, Belo Horizonte - MG<br />CEP 30180-061</p> },
                  { icon: Clock, title: "Horários", content: <p className="text-sm text-muted-foreground">Segunda a Sexta: 09h - 20h<br />Sábado: 09h - 15h<br />Domingo: Fechado</p> },
                  { icon: Phone, title: "Telefone", content: <a href="tel:+553186595481" className="text-sm text-muted-foreground hover:text-foreground transition-colors">(31) 98659-5481</a> },
                  { icon: Instagram, title: "Instagram", content: <a href="https://www.instagram.com/barbeariaparadise/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">@barbeariaparadise</a> },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="icon-container flex-shrink-0"><item.icon size={18} /></div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                ))}
                <div className="overflow-hidden h-[250px] rounded-lg mt-6 grayscale">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2099387897287!2d-43.93919108449647!3d-19.91719434350752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e3f04d9b81%3A0x99a54a0919a0c7e8!2sR.%20Juiz%20de%20Fora%2C%201374%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Barbearia Paradise" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContatoPage;
