import React, { useState } from 'react';
import { BookOpen, X, Instagram, MessageCircle, Menu } from 'lucide-react';

export interface HeaderProps {
  onNavigate: (page: 'home' | 'thoughts') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <>
      <header className="w-full py-6 px-4 md:px-8 bg-secondary/80 backdrop-blur-md fixed top-0 z-50 border-b border-primary/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            <BookOpen className="w-8 h-8" />
            <span className="font-serif text-2xl font-bold tracking-wide">Stélio Thauassu</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-text/80 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => onNavigate('thoughts')} className="hover:text-primary transition-colors">Pensamentos</button>
            <a href="#lancamento" className="hover:text-primary transition-colors">Lançamento</a>
            <a href="#livros" className="hover:text-primary transition-colors">Livros</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleContact}
              className="hidden md:block px-6 py-2 bg-primary text-white font-serif rounded-full hover:bg-red-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contato
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-secondary border-l border-primary/10 shadow-2xl p-6 flex flex-col animate-slide-left">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-xl font-serif text-text/80">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setIsMobileMenuOpen(false);
                }} 
                className="text-left py-2 border-b border-primary/5 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate('thoughts');
                  setIsMobileMenuOpen(false);
                }} 
                className="text-left py-2 border-b border-primary/5 hover:text-primary transition-colors"
              >
                Pensamentos
              </button>
              <a 
                href="#lancamento" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-primary/5 hover:text-primary transition-colors"
              >
                Lançamento
              </a>
              <a 
                href="#livros" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-primary/5 hover:text-primary transition-colors"
              >
                Livros
              </a>
              <a 
                href="#sobre" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-primary/5 hover:text-primary transition-colors"
              >
                Sobre
              </a>
              <button 
                onClick={() => {
                  toggleContact();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 border-b border-primary/5 hover:text-primary transition-colors text-primary font-bold"
              >
                Contato para Palestras
              </button>
            </nav>
            
            <div className="mt-auto pt-8 flex justify-center gap-6">
               <a 
                href="https://wa.me/559185390380" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/thauassu?igsh=MXV4cGprdHNsbnR5ag==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-pink-50 text-pink-700 rounded-full hover:bg-pink-100 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative animate-scale-up">
            <button 
              onClick={toggleContact}
              className="absolute top-4 right-4 text-text/50 hover:text-text transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="font-serif text-2xl font-bold text-center mb-8 text-primary">Contato para Palestras</h3>
            
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
