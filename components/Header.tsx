import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg px-2 py-1" aria-label="Sartii Home">
          <span className="font-display font-bold tracking-tight text-fuchsia-400">Sartii</span>
        </a>

        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          <a href="#" className="text-xs font-bold tracking-wider text-neutral-400 hover:text-white transition-colors uppercase font-display focus-visible:outline-none focus-visible:text-white">Início</a>
          <a href="#portfolio" className="text-xs font-bold tracking-wider text-neutral-400 hover:text-white transition-colors uppercase font-display focus-visible:outline-none focus-visible:text-white">Portfolio</a>
          <a href="#audit" className="px-5 py-2 text-xs font-bold tracking-wider bg-white text-black hover:bg-violet-200 transition-colors uppercase font-display rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};