import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Comparison } from './components/Comparison';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-50 selection:bg-violet-500/30 selection:text-violet-100">
      <Header />
      <Hero />
      <BentoGrid />
      <Comparison />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;