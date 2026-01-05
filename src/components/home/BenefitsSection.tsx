import { Link } from "react-router-dom";
import barbershopInterior from "@/assets/barbershop-interior.jpg";

const BenefitsSection = () => {
  return (
    <section className="bg-secondary">
      <div className="tile rounded-none">
        {/* Background */}
        <img 
          src={barbershopInterior} 
          alt="Nossa marca" 
          className="tile-bg"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="tile-content text-white">
          <p className="eyebrow-apple text-white/70 mb-4 animate-fade-up">
            Nossa Marca
          </p>
          
          <h2 className="headline-apple text-white mb-6 max-w-3xl animate-fade-up delay-100">
            Inspirada nas barbearias nova-iorquinas dos anos 50.
          </h2>
          
          <p className="subheadline-apple text-white/70 max-w-2xl mx-auto mb-8 animate-fade-up delay-200">
            Resgatamos a cultura masculina clássica, onde os homens se encontravam para fazer a barba à navalha enquanto conversavam.
          </p>

          <Link to="/sobre" className="link-apple text-white hover:text-white/80 animate-fade-up delay-300">
            Conhecer nossa história
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
