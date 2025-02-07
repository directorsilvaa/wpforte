import React from 'react';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
      </main>
      <Footer />
      {/* Credit Footer */}
      <a
        href="https://github.com/directorsilvaa"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-2 text-[10px] text-gray-500/50 hover:text-gray-500/80 transition-colors"
      >
        feito por Matheus Silva
      </a>
    </div>
  );
}