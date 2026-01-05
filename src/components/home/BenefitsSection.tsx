import barbershopInterior from "@/assets/barbershop-interior.jpg";

const BenefitsSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={barbershopInterior} 
          alt="Nossa marca" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Title */}
            <div className="animate-fade-up">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none tracking-wider">
                NOSSA
              </h2>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none tracking-wider">
                MARCA
              </h2>
            </div>

            {/* Right - Description */}
            <div className="animate-fade-up delay-200">
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light">
                Inspirada nas antigas barbearias nova-iorquinas típicas das décadas de 40, 50 e 60, 
                a <span className="text-foreground font-medium">Barbearia Paradise</span> chega com a 
                intenção de resgatar a cultura masculina, perdida ao longo dos anos, em que os homens 
                se encontravam para fazer a barba à navalha e cortar os cabelos enquanto fumavam seus 
                charutos, bebiam e conversavam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
