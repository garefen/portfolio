import React from 'react';
import { X, Check } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">Por que a engenharia importa?</h2>
          <p className="text-neutral-400 font-medium text-lg">Distinguindo o amador do profissional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" role="region" aria-label="Comparison Table">
          {/* The Common Way */}
          <article className="p-8 border border-neutral-800 bg-neutral-900/20 rounded-xl">
            <h3 className="text-xl font-display font-bold text-neutral-400 mb-6 flex items-center gap-3">
              <span className="text-neutral-500 text-xs font-bold tracking-widest uppercase border border-neutral-700 px-2 py-1 rounded">Padrão</span>
              Wix / Wordpress
            </h3>

            <ul className="space-y-4 font-medium" aria-label="Wix and Wordpress Disadvantages">
              <li className="flex items-start gap-3 text-neutral-500">
                <X className="w-5 h-5 text-neutral-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Lento e dependente de plugins</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-500">
                <X className="w-5 h-5 text-neutral-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Vulnerabilidades de segurança frequentes</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-500">
                <X className="w-5 h-5 text-neutral-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Visual genérico de templates</span>
              </li>
            </ul>
          </article>

          {/* The Engineered Way */}
          <article className="p-8 border border-violet-900/30 bg-violet-950/5 shadow-[0_0_50px_rgba(124,58,237,0.05)] rounded-xl">
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-violet-300 text-xs font-bold tracking-widest uppercase border border-violet-800 px-2 py-1 bg-violet-900/20 rounded">Custom</span>
              React & Next.js
            </h3>

            <ul className="space-y-4 font-medium" aria-label="React and Next.js Advantages">
              <li className="flex items-start gap-3 text-neutral-200">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Instantâneo. Navegação sem refresh.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-200">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Segurança de arquitetura estática</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-200">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Direção de arte exclusiva</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};