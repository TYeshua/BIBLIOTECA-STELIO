import React, { useEffect } from 'react';
import { X, Book as BookIcon, Tablet, Check } from 'lucide-react';
import type { Book } from '../data/booksData';

interface BookModalProps {
  book: Book;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors z-10 shadow-sm"
        >
          <X className="w-6 h-6 text-text" />
        </button>

        <div className="grid md:grid-cols-[40%_60%] h-full overflow-hidden">
          {/* Image Side - Fixed */}
          <div className="relative bg-secondary/50 p-8 flex items-center justify-center h-full min-h-[300px] md:min-h-auto">
            <img 
              src={book.coverUrl} 
              alt={book.title}
              className="w-full max-w-xs rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 object-contain max-h-[80%]"
            />
          </div>

          {/* Content Side - Scrollable */}
          <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {book.title}
            </h2>
            
            <div className="prose prose-lg text-text/70 leading-relaxed mb-10 whitespace-pre-line">
              {book.description}
            </div>

            <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-serif font-bold text-xl text-text border-b border-gray-200 pb-2 mb-4">
                Escolha seu formato
              </h3>

              <div className="grid gap-4">
                {/* Physical Option */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <BookIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-text text-lg">Livro Físico</div>
                      <div className="text-sm text-text/60">Capa comum, papel padrão</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{book.pricePhysical}</div>
                    <a 
                      href={book.buyLinkPhysical}
                      className="inline-block mt-1 text-sm font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      Comprar
                    </a>
                  </div>
                </div>

                {/* E-book Option */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 text-accent rounded-lg">
                      <Tablet className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-text text-lg">E-book Digital</div>
                      <div className="text-sm text-text/60">PDF, EPUB e MOBI</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{book.priceEbook}</div>
                    <a 
                      href={book.buyLinkEbook}
                      className="inline-block mt-1 text-sm font-bold text-primary border border-primary px-4 py-2 rounded-full hover:bg-primary/5 transition-colors"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-6 text-sm text-text/60 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Entrega Garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Pagamento Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
