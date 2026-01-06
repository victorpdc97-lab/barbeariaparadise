import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, MapPin, Clock, Phone, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ContatoPage = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });
    setFormData({
      name: "",
      phone: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider mb-6">
              CONTATO
            </h1>
            <div className="divider-ornament max-w-md mx-auto">
              <span className="text-muted-foreground text-sm tracking-widest">FALE CONOSCO</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wider mb-8">
                  ENVIE UMA MENSAGEM
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                      Nome
                    </label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} required className="bg-secondary border-border" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                      Telefone
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" value={formData.phone} onChange={handleChange} required className="bg-secondary border-border" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                      Mensagem
                    </label>
                    <Textarea id="message" name="message" placeholder="Como podemos ajudar?" value={formData.message} onChange={handleChange} rows={4} className="bg-secondary border-border resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : <>
                        <Send size={18} />
                        ENVIAR MENSAGEM
                      </>}
                  </Button>
                </form>

                <div className="mt-8 p-6 vintage-card">
                  <p className="text-sm text-foreground/80 mb-4 font-light">
                    <strong className="font-medium">Prefere agendar diretamente?</strong> Clique no botão abaixo.
                  </p>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                      AGENDAR HORÁRIO
                    </a>
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wider mb-8">
                  INFORMAÇÕES
                </h2>

                {/* Address */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
                      ENDEREÇO
                    </h3>
                    <p className="text-muted-foreground font-light">
                      Rua Juiz de Fora, 1374<br />
                      Santo Agostinho, Belo Horizonte - MG<br />
                      CEP 30180-061
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
                      HORÁRIOS
                    </h3>
                    <p className="text-muted-foreground font-light">
                      Segunda a Sexta: 09h - 20h<br />
                      Sábado: 09h - 15h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
                      TELEFONE
                    </h3>
                    <p className="text-muted-foreground font-light">
                      (31) 98659-5481 
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Instagram size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
                      INSTAGRAM
                    </h3>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                      @barbearia.paradise
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="overflow-hidden h-[250px] mt-8">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2099387897287!2d-43.93919108449647!3d-19.91719434350752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e3f04d9b81%3A0x99a54a0919a0c7e8!2sR.%20Juiz%20de%20Fora%2C%201374%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                  border: 0,
                  filter: "grayscale(100%) invert(92%) contrast(83%)"
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Barbearia Paradise" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>;
};
export default ContatoPage;