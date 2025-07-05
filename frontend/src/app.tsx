import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { NewsletterProvider } from './contexts/NewsletterContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <NewsletterProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <FeaturedArticles />
            <NewsletterSignup />
          </main>
          <Footer />
        </div>
      </NewsletterProvider>
    </ThemeProvider>
  );
}

export default App;