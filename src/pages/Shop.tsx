import React from 'react';
import { Navbar } from '../components/Navbar';
import { Shop as ShopSection } from '../components/Shop';
import { Footer } from '../components/Footer';

export function Shop() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <ShopSection />
      </div>
      <Footer />
    </div>
  );
}