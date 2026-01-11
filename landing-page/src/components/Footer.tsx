import React from 'react';
import { Instagram, MessageCircle, BookOpen, Code2 } from 'lucide-react';

export interface FooterProps {
  onNavigate: (page: 'home' | 'thoughts') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-0">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="font-serif text-xl font-bold">Stélio Thauassu</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Compartilhando sabedoria judaico-cristã para fortalecer famílias e edificar vidas.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-accent">Navegação</h3>
            <ul className="space-y-2 text-white/70">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('thoughts')} className="hover:text-white transition-colors">Pensamentos</button></li>
              <li><a href="#lancamento" className="hover:text-white transition-colors">Lançamento</a></li>
              <li><a href="#livros" className="hover:text-white transition-colors">Livros</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre o Autor</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-accent">Contato para Palestras</h3>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/559185390380" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/thauassu?igsh=MXV4cGprdHNsbnR5ag==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/50 text-xs mt-4">
              © {new Date().getFullYear()} Stélio Thauassu. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Developer Badge - Canto Inferior Direito */}
      <a 
        href="https://www.linkedin.com/in/thiagoyeshua" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 md:bottom-6 md:right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs hover:bg-white/10 hover:text-accent hover:border-accent transition-all duration-300 group backdrop-blur-sm"
        title="Desenvolvido por Thiago Yeshua"
      >
        <Code2 className="w-3 h-3 group-hover:text-accent transition-colors" />
        <span className="group-hover:text-white transition-colors">Thiago Yeshua</span>
      </a>
    </footer>
  );
};