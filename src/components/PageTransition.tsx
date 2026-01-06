import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import deltaLogo from "@/assets/delta-logo.png";

const PageTransition = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsAnimating(true);
      
      // After animation completes, update the display location
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsAnimating(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-background transition-opacity duration-300"
        style={{
          animation: "fadeInOut 600ms ease-in-out forwards"
        }}
      />
      
      {/* Animated logo */}
      <img
        src={deltaLogo}
        alt=""
        className="relative z-10 w-24 h-24 object-contain"
        style={{
          animation: "logoAnimation 600ms ease-in-out forwards"
        }}
      />

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes logoAnimation {
          0% { 
            opacity: 0; 
            transform: scale(0.5) rotate(-180deg); 
          }
          30% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
          }
          70% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
          }
          100% { 
            opacity: 0; 
            transform: scale(1.2) rotate(15deg); 
          }
        }
      `}</style>
    </div>
  );
};

export default PageTransition;
