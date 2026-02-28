import { useState } from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useDownloadApp } from "@/contexts/DownloadAppContext";
import { WHATSAPP_NUMBER, PHONE_NUMBER, PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, ADDRESS, HOURS, GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

const ContatoPage = () => {
  usePageMeta({ title: "Contato e Localização | Barbearia Paradise", description: "Entre em contato com a Barbearia Paradise. Endereço, horários, telefone e formulário de contato." });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { openDownloadModal } = useDownloadApp();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.trim().length < 2) newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(formData.phone.trim())) newErrors.phone = "Telefone inválido. Ex: (31) 99999-9999";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({ title: "Verifique os campos", description: "Corrija os erros antes de enviar.", variant: "destructive" });
      return;
    }
    const { name, phone, message } = formData;
    const text = `Olá! Meu nome é ${name}.${phone ? ` Telefone: ${phone}.` : ""}${message ? ` ${message}` : ""}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    toast({ title: "Abrindo WhatsApp...", description: "Sua mensagem será preenchida automaticamente." });
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
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
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Nome</label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} required aria-invalid={!!errors.name} className={`border-border bg-transparent focus:border-foreground transition-colors ${errors.name ? "border-red-500" : ""}`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Telefone</label>
                    <Input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" value={formData.phone} onChange={handleChange} required aria-invalid={!!errors.phone} className={`border-border bg-transparent focus:border-foreground transition-colors ${errors.phone ? "border-red-500" : ""}`} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Mensagem</label>
                    <Textarea id="message" name="message" placeholder="Como podemos ajudar?" value={formData.message} onChange={handleChange} rows={4} className="border-border bg-transparent resize-none focus:border-foreground transition-colors" />
                  </div>
                  <InteractiveHoverButton type="submit" text="Enviar Mensagem" className="w-full" />
                </form>
                <div className="mt-8 p-5 border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">Prefere agendar diretamente?</p>
                  <InteractiveHoverButton onClick={openDownloadModal} text="Agendar Horário" className="w-full" />
                </div>
              </div>

              <div className="space-y-8">
                <div className="gold-line mb-5" />
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Informações</h2>
                {[
                  { icon: MapPin, title: "Endereço", content: <p className="text-sm text-muted-foreground">{ADDRESS.street}<br />{ADDRESS.neighborhood}, {ADDRESS.city} - {ADDRESS.state}<br />CEP {ADDRESS.zip}</p> },
                  { icon: Clock, title: "Horários", content: <p className="text-sm text-muted-foreground">{HOURS.weekdays}<br />{HOURS.saturday}<br />{HOURS.sunday}</p> },
                  { icon: Phone, title: "Telefone", content: <a href={`tel:+${PHONE_NUMBER}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{PHONE_DISPLAY}</a> },
                  { icon: Instagram, title: "Instagram", content: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{INSTAGRAM_HANDLE}</a> },
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
                  <iframe src={GOOGLE_MAPS_EMBED_URL} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Barbearia Paradise" />
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
