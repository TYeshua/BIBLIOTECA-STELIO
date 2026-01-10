import React from 'react';
import type { Book } from '../data/booksData';
import { BookCard } from './BookCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BookGridProps {
  books: Book[];
}

export const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  const { elementRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="livros" ref={elementRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Biblioteca do Autor
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-text/70 max-w-2xl mx-auto">
            Explore outras obras que edificam, ensinam e transformam vidas através da sabedoria e da fé.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {books.map((book, index) => (
            <div 
              key={book.id}
              className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <BookCard 
                book={book} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
