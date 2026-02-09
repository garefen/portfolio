import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Google Ads',
    category: 'R/GA & Google',
    description: 'Participei ativamente do re-design da plataforma, implementando novos módulos e integrando diversas APIs internas.',
    metrics: [
      // { label: 'Conversion', value: '+215%' },
      { label: 'Acessibilidade', value: '100/100' }
    ],
    url: "https://business.google.com/br/google-ads/",
    imageUrl: 'https://wonder55.com/wp-content/uploads/2023/01/Google-Ads-Logo.jpg'
  },
  {
    id: '2',
    title: 'Accelerate With Google',
    category: 'R/GA & Google',
    description: 'Criação de landing page com animações complexas e nova plataforma de conteúdo para negócios.',
    metrics: [
      { label: 'SEO', value: '100/100' }
    ],
    url: "https://business.google.com/us/accelerate/homepage/",
    imageUrl: 'https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png'
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 border-b border-neutral-900 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">Sites que ajudei a construir</h2>
            {/* <p className="text-neutral-500 font-medium">Performance encontra Design</p> */}
          </div>
          {/* <button className="text-violet-400 hover:text-white flex items-center gap-2 transition-colors uppercase text-xs tracking-widest font-bold font-display">
            Ver repositório <ArrowUpRight className="w-4 h-4" />
          </button> */}
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-bold text-violet-400 tracking-widest uppercase font-display">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 group-hover:text-violet-300 transition-colors duration-500 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-normal">
                  {project.description}
                </p>

                <div className="flex gap-12 mb-10">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-3xl font-display font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-neutral-600 uppercase tracking-widest mt-1 font-bold">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white text-sm font-bold border-b border-violet-500 pb-1 hover:text-violet-300 hover:border-violet-300 transition-all font-display tracking-wide"
                  aria-label={`Ver projeto ${project.title} (abre em nova aba)`}
                >
                  LIVE PREVIEW <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />
                </a>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative overflow-hidden bg-neutral-900 aspect-[4/3] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-700 rounded-xl">
                  <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-all duration-700 scale-100"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};