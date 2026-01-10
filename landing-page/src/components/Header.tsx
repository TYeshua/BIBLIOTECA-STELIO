import React, { useState } from 'react';
import { BookOpen, X, Instagram, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <>
      <header className="w-full py-6 px-4 md:px-8 bg-secondary/80 backdrop-blur-md fixed top-0 z-50 border-b border-primary/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="w-8 h-8" />
            <span className="font-serif text-2xl font-bold tracking-wide">Stélio Thauassu</span>
          </div>
          <nav className="hidden md:flex gap-8 text-text/80 font-medium">
            <a href="#lancamento" className="hover:text-primary transition-colors">Lançamento</a>
            <a href="#livros" className="hover:text-primary transition-colors">Livros</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          </nav>
          <button 
            onClick={toggleContact}
            className="px-6 py-2 bg-primary text-white font-serif rounded-full hover:bg-red-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contato
          </button>
        </div>
      </header>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative animate-scale-up">
            <button 
              onClick={toggleContact}
              className="absolute top-4 right-4 text-text/50 hover:text-text transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="font-serif text-2xl font-bold text-center mb-8 text-primary">Entre em Contato</h3>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/559185390380" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 w-full rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-all transform hover:-translate-y-1"
              >
                <div className="p-2 bg-white rounded-full shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="font-medium">WhatsApp</span>
              </a>

              <a 
                href="https://www.instagram.com/thauassu?igsh=MXV4cGprdHNsbnR5ag==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 w-full rounded-xl bg-pink-50 text-pink-700 hover:bg-pink-100 transition-all transform hover:-translate-y-1"
              >
                <div className="p-2 bg-white rounded-full shadow-sm">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="font-medium">Instagram</span>
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
