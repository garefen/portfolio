import React, { useState } from 'react';
import { MessageCircle, Send, Loader2, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 1500);
  };

  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-900/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="bg-neutral-900/30 border border-neutral-800 p-8 md:p-16 relative rounded-2xl">

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6 tracking-tight">Próximo Passo</h2>
              <p className="text-neutral-400 mb-10 leading-relaxed font-normal">
                Vamos viabilizar sua ideia? Uma análise técnica rápida, sem burocracia, focada no que importa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulário de Contato">
              <div className="space-y-2">
                <label htmlFor="name" className="sr-only">Seu Nome</label>
                <input
                  id="name"
                  type="text"
                  placeholder="SEU NOME"
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-violet-500 transition-all placeholder:text-neutral-700 text-sm tracking-wide font-medium"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="sr-only">Seu Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="SEU EMAIL"
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-violet-500 transition-all placeholder:text-neutral-700 text-sm tracking-wide font-medium"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="COMO POSSO AJUDAR?"
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-violet-500 transition-all placeholder:text-neutral-700 resize-none text-sm tracking-wide font-medium"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full gap-2 rounded-lg bg-white text-black hover:bg-violet-200 font-bold tracking-wide" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Send className="w-4 h-4" aria-hidden="true" />}
                  ENVIAR MENSAGEM
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => { setShowModal(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

          <div className="relative bg-neutral-900/95 border border-neutral-800 rounded-2xl p-8 max-w-lg mx-4 z-10">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Solicitação enviada</h3>
            <p className="text-neutral-400 mb-6">Obrigado — sua solicitação foi enviada. Entraremos em contato em breve.</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-white text-black rounded-lg font-bold hover:bg-violet-200 transition-colors"
                onClick={() => { setShowModal(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};