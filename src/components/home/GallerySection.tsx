import { useState } from "react";
import { X } from "lucide-react";
import galleryBarbearia from "@/assets/gallery-barbearia.jpg";
import galleryBar from "@/assets/gallery-bar.jpg";
import galleryBanheiro from "@/assets/gallery-banheiro.jpg";
import galleryLoja from "@/assets/gallery-loja.jpg";
import galleryOutlet from "@/assets/gallery-outlet.jpg";
import galleryLogoMadeira from "@/assets/gallery-logo-madeira.jpg";

const galleryImages = [
  { src: galleryBarbearia, alt: "Área de corte", span: "col-span-2 row-span-2" },
  { src: galleryBar, alt: "Bar e sinuca", span: "" },
  { src: galleryBanheiro, alt: "Banheiro", span: "" },
  { src: galleryLoja, alt: "Loja de roupas", span: "" },
  { src: galleryOutlet, alt: "Outlet", span: "" },
  { src: galleryLogoMadeira, alt: "Logo Paradise na madeira", span: "" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="section-clean bg-background">
      <div className="container-clean">
        {/* Header — left aligned */}
        <div className="mb-12 opacity-0 animate-fade-up">
          <div className="gold-line mb-5" />
          <h2 className="headline-section text-foreground">
            Nosso<br />
            <span className="italic">ambiente</span>
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg group cursor-pointer opacity-0 animate-fade-up ${image.span}`}
              style={{ animationDelay: `${(index + 2) * 0.06}s` }}
              onClick={() => setLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
