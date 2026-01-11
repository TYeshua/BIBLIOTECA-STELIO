import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BookGrid } from './components/BookGrid';
import { Footer } from './components/Footer';
import { ThoughtsPage } from './pages/ThoughtsPage';
import { MobileStickyBar } from './components/MobileStickyBar';

import { booksData } from './data/booksData';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'thoughts'>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const featuredBook = booksData.find(book => book.isFeatured) || booksData[0];
  const otherBooks = booksData.filter(book => book.id !== featuredBook.id);

  const handleNavigate = (page: 'home' | 'thoughts') => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Wait a bit for scroll to start/happen before fading back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 500); // Wait for fade out
  };

  return (
    <div className={`min-h-screen bg-secondary font-sans text-text md:pb-0 transition-opacity duration-500 ease-in-out ${
      isTransitioning ? 'opacity-0' : 'opacity-100'
    }`}>
      {currentPage === 'home' ? (
        <>
          <Header onNavigate={handleNavigate} />
          <main>
            <Hero book={featuredBook} />
            <BookGrid books={otherBooks} />
            <About />
          </main>
          <Footer onNavigate={handleNavigate} />
          {/* Sticky Bar shows only on Home */}
          <MobileStickyBar 
            price={featuredBook.pricePhysical} 
            link={featuredBook.amazonUrl} 
          />
        </>
      ) : (
        <ThoughtsPage onBack={() => handleNavigate('home')} />
      )}
    </div>
  );
}

export default App;
