import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';


interface MobileStickyBarProps {
  price: string;
  link: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ price, link }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Trigger once on mount to check initial position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Using 'transform' for smooth slide-up animation
  // Added 'transition-transform duration-300'
  // When visible: 'translate-y-0', Hidden: 'translate-y-full'
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 block md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-4 py-3 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
       <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Oferta Especial</span>
             <span className="text-lg font-bold text-gray-900 leading-none">{price}</span>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-full font-serif font-medium shadow-md hover:brightness-110 active:scale-95 transition-all text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Comprar Agora</span>
          </a>
       </div>
    </div>
  );
};
