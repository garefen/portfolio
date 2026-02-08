import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Elements - More subtle/creative */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-fuchsia-600/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-10">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm font-display">
            Engenharia Front-End
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[1.05]">
            {/* Sua marca com a <br /> */}
            Interfaces de elite. Performance que<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">
              {/* alma e a técnica */}converte.
            </span> <br />
            {/* das Big Techs. */}
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-normal">
            Interfaces acessíveis e de alta velocidade projetadas para consolidar sua presença digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <Button href="#audit" size="lg" className="w-full sm:w-auto group font-display font-semibold">
              Elevar minha marca
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#portfolio" variant="outline" size="lg" className="w-full sm:w-auto border-neutral-600 hover:border-neutral-400 font-display font-semibold">
              Ver Portfolio
            </Button>
          </div>

          <div className="pt-16 flex flex-wrap justify-center gap-12 text-neutral-500 text-xs font-bold tracking-widest uppercase border-t border-neutral-900 w-full max-w-3xl mt-8 font-display">
            <span className="hover:text-violet-400 transition-colors cursor-default">Acessibilidade WCAG</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">Performance Web</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">Design System</span>
          </div>
        </div>
      </div>
    </section>
  );
};