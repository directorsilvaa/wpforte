import React from 'react';
import { Hero } from '../components/Hero';

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <Hero />
      </main>
    </div>
  );
}