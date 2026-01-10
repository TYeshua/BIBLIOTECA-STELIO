import React from 'react';
import { ShoppingCart, ExternalLink, Plus } from 'lucide-react';
import type { Book as BookType } from '../data/booksData';

interface HeroProps {
  book: BookType;
}

export const Hero: React.FC<HeroProps> = ({ book }) => {
  return (
    <section id="lancamento" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-secondary to-rose-100/50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-l-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/10 blur-3xl rounded-r-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left">
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight">
            {book.title}
          </h1>
          
          <p className="text-lg md:text-xl text-text/80 leading-relaxed max-w-xl mx-auto md:mx-0">
            {book.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            {/* Amazon Button (Primary) */}
            <a 
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-primary text-white text-lg font-serif rounded-full shadow-xl hover:shadow-2xl hover:bg-yellow-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Comprar na Amazon</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {book.samplePdfUrl && (
              <a 
                href={book.samplePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-primary border-2 border-primary text-lg font-serif rounded-full shadow-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                {/* Ícone de livro aberto para representar leitura */}
                 <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                <span>Ler um Trecho</span>
              </a>
            )}
          </div>

        </div>

        {/* Book Cover Visual */}
        <a 
          href={book.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group perspective-1000 cursor-pointer outline-none block"
        >
          <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full transform scale-90 translate-y-10 group-hover:scale-100 transition-transform duration-700" />
          <div className="relative transform rotate-y-12 group-hover:rotate-y-0 transition-transform duration-700 ease-out">
            <img 
              src={book.coverUrl} 
              alt={`Capa do livro ${book.title}`}
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-4 border-white"
            />
            {/* Overlay Hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <Plus className="w-5 h-5" />
                <span className="font-medium">Comprar na Amazon</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
