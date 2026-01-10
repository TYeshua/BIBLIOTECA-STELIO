import React from 'react';
import { ShoppingCart, ExternalLink, BookOpen } from 'lucide-react';
import type { Book } from '../data/booksData';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div 
      className="group w-full text-left bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full relative"
    >
      <div className="relative overflow-hidden aspect-[2/3] bg-gray-100">
        <img 
          src={book.coverUrl} 
          alt={book.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Overlay on hover */}
        <a 
          href={book.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
        >
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center gap-2 text-white">
            <ShoppingCart className="w-12 h-12 mb-2" />
            <span className="font-serif text-xl font-medium">Ver na Amazon</span>
          </div>
        </a>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {book.title}
        </h3>
        <p className="text-text/70 text-sm mb-4 line-clamp-3 flex-grow">
          {book.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 w-full flex flex-col gap-3">
            <a 
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <span>Ver na Amazon</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            
            {book.samplePdfUrl && (
              <a 
                href={book.samplePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm text-text/60 hover:text-primary transition-colors flex items-center justify-center gap-1"
              >
                <BookOpen className="w-3 h-3" />
                Ler trecho
              </a>
            )}
        </div>
      </div>
    </div>
  );
};
