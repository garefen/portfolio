import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12" role="contentinfo" aria-label="Site Footer">
      <div className="container mx-auto px-6 text-center">
        <p className="text-neutral-500 text-sm mb-4 font-medium">
          &copy; {new Date().getFullYear()} Engenharia Digital Premium. Todos os direitos reservados.
        </p>
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold font-display">
          Desenvolvido com React, Tailwind & Motion
        </p>
      </div>
    </footer>
  );
};