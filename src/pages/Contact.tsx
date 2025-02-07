import React from 'react';
import { Navbar } from '../components/Navbar';
import { Contact as ContactSection } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}