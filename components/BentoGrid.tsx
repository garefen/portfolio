import React from 'react';
import { Zap, ShieldCheck, Globe, Code2 } from 'lucide-react';

const Item = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <article className="bg-neutral-900/50 border border-neutral-800 p-8 hover:bg-neutral-900 hover:border-violet-500/30 transition-all duration-300 group flex flex-col h-full">
    <div className="h-12 w-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-500" aria-hidden="true">
      <Icon className="w-6 h-6 text-neutral-300 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-display font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-neutral-400 leading-relaxed text-sm font-medium">{description}</p>
  </article>
);

export const BentoGrid = () => {
  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">O Padrão de Entrega</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-normal text-lg">
            A interseção entre arte e funcionalidade. Não apenas código, mas uma experiência digital robusta.
          </p>
        </div>

        {/* Updated Layout: 4 Equal Columns on Large Screens, 2x2 on Medium, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <Item
            title="SEO Estrutural"
            description="Arquitetura de informação e metadados construídos para dominar os motores de busca."
            icon={ShieldCheck}
          />

          <Item
            title="Performance Extrema"
            description="Carregamento instantâneo. Core Web Vitals otimizados para retenção máxima de usuários."
            icon={Zap}
          />

          <Item
            title="Acessibilidade Global"
            description="Design inclusivo seguindo normas WCAG. Seu conteúdo acessível a todos os públicos."
            icon={Globe}
          />

        </div>
      </div>
    </section>
  );
};