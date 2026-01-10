
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BookGrid } from './components/BookGrid';
import { Footer } from './components/Footer';
import { booksData } from './data/booksData';

function App() {
  const featuredBook = booksData.find(book => book.isFeatured) || booksData[0];
  const otherBooks = booksData.filter(book => book.id !== featuredBook.id);

  return (
    <div className="min-h-screen bg-secondary font-sans text-text">
      <Header />
      <main>
        <Hero book={featuredBook} />
        <BookGrid books={otherBooks} />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
