import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryBarbearia from "@/assets/gallery-barbearia.webp";
import galleryBar from "@/assets/gallery-bar.webp";
import galleryBanheiro from "@/assets/gallery-banheiro.webp";
import galleryLoja from "@/assets/gallery-loja.webp";
import galleryOutlet from "@/assets/gallery-outlet.webp";
import galleryLogoMadeira from "@/assets/gallery-logo-madeira.webp";

const galleryImages = [
  { src: galleryBarbearia, alt: "Área de corte", span: "col-span-2 row-span-2" },
  { src: galleryBar, alt: "Bar e sinuca", span: "" },
  { src: galleryBanheiro, alt: "Banheiro", span: "" },
  { src: galleryLoja, alt: "Loja de roupas", span: "col-span-2 row-span-2" },
  { src: galleryOutlet, alt: "Outlet", span: "" },
  { src: galleryLogoMadeira, alt: "Logo Paradise na madeira", span: "" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, goNext, goPrev, close]);

  return (
    <section className="section-clean bg-background">
      <div className="container-clean">
        <div className="mb-12 animate-fade-up">
          <div className="gold-line mb-5" />
          <h2 className="headline-section text-foreground">
            Nosso<br />
            <span className="italic">ambiente</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg group cursor-pointer animate-fade-up ${image.span}`}
              style={{ animationDelay: `${(index + 2) * 0.06}s` }}
              onClick={() => setLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          {/* Counter */}
          <span className="absolute top-6 left-6 text-white/50 text-sm font-medium">
            {lightbox + 1} / {galleryImages.length}
          </span>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
