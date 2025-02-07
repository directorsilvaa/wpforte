import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Shop } from './pages/Shop';
import { LoadingScreen } from './components/LoadingScreen';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}