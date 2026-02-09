import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-5" role="contentinfo" aria-label="Site Footer">
      <div className="container mx-auto px-6 text-right">
        <p className="text-neutral-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Sartii
        </p>
      </div>
    </footer>
  );
};