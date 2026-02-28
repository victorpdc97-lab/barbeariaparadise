import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const messages: Record<string, string> = {
  "/": "Olá! Vi o site da Barbearia Paradise e gostaria de mais informações.",
  "/servicos": "Olá! Vi a tabela de serviços e gostaria de agendar.",
  "/esteticista": "Olá! Tenho interesse nos serviços de estética.",
  "/contato": "Olá! Gostaria de falar com a Barbearia Paradise.",
  "/clube": "Olá! Tenho interesse no Clube Paradise.",
  "/dia-do-noivo": "Olá! Tenho interesse no pacote Dia do Noivo.",
};

const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const message = messages[pathname] || messages["/"];
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
