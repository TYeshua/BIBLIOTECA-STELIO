import React, { useEffect, useState } from 'react';
import { ArrowLeft, Quote, Feather, Star, Minus } from 'lucide-react';
import { thoughts, type Thought } from '../data/thoughts';
import { useScrollReveal } from '../hooks/useScrollReveal';

// --- COMPONENTES VISUAIS AUXILIARES ---

// 1. Textura de Papel (Ruído SVG Nativo para performance e qualidade)
const NoiseFilter = () => (
  <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-[5] opacity-[0.03] mix-blend-multiply">
    <filter id="noiseFilter">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.6" 
        numOctaves="3" 
        stitchTiles="stitch" 
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

// 2. Separador Editorial (Ornamento entre pensamentos)
const EditorialDivider = () => (
  <div className="flex items-center justify-center gap-4 my-24 opacity-30">
    <div className="h-px w-12 bg-gray-400" />
    <Star className="w-3 h-3 text-brand-gold" />
    <div className="h-px w-12 bg-gray-400" />
  </div>
);

// --- RENDERIZADORES DE ESTILO (The "Art" Pieces) ---

// ESTILO 1: SERIF EDITORIAL (Clássico, Drop Cap, Texto Fluido)
const RenderSerifEditorial = ({ text }: { text: string }) => {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);

  return (
    <div className="relative px-6 md:px-0 max-w-2xl mx-auto">
      {/* Decorative Line Decoration */}
      <div className="absolute -left-4 md:-left-12 top-0 h-full w-px bg-brand-gold/20 hidden md:block" />
      
      <div className="font-serif text-xl md:text-[1.35rem] text-gray-800 leading-[1.8] text-pretty">
        <span className="float-left text-7xl md:text-8xl font-bold text-brand-gold mr-4 -mt-2 md:-mt-4 leading-[0.8] font-serif select-none">
          {firstLetter}
        </span>
        {rest}
      </div>
    </div>
  );
};

// ESTILO 2: MODERN DEEP (Cartão Flutuante, Imersivo, Sombra Colorida)
const RenderModernDeep = ({ text }: { text: string }) => {
  // Tenta separar a primeira frase para destaque
  const splitMatch = text.match(/^(.+?[\.\!\?])\s+(.*)/s);
  const firstPhrase = splitMatch ? splitMatch[1] : text;
  const restPhrase = splitMatch ? splitMatch[2] : "";

  return (
    <div className="relative w-full my-12 group">
      {/* Ambient Glow (Sombra colorida difusa) */}
      <div className="absolute inset-0 bg-brand-red blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000 rounded-full" />
      
      <div className="relative bg-gradient-to-br from-[#801628] to-[#5a0f1c] text-white/95 py-20 px-8 md:px-20 text-center rounded-[2rem] shadow-2xl border border-white/5 overflow-hidden">
        {/* Grão interno sutil */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" style={{ filter: 'url(#noiseFilter)' }}></div>
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <Feather className="w-8 h-8 text-white/30 mb-8" />
          
          <p className="font-serif text-xl md:text-2xl leading-relaxed">
            <span className="block text-2xl md:text-3xl font-bold mb-6 text-brand-gold tracking-tight">
              {firstPhrase}
            </span>
            <span className="opacity-80 font-light tracking-wide text-lg">
              {restPhrase}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// ESTILO 3: MANUSCRIPT GOLD (Borda Dupla, Aspas, Estilo Citação)
const RenderManuscriptGold = ({ text }: { text: string }) => {
  return (
    <div className="relative max-w-3xl mx-auto py-12 px-8 md:px-16 bg-brand-cream border-y-4 border-double border-brand-gold/30">
      <Quote className="absolute top-8 left-8 w-16 h-16 text-brand-gold/10 -scale-x-100 pointer-events-none" />
      
      <p className="relative z-10 font-serif text-xl md:text-2xl text-gray-800 leading-loose italic text-center text-balance">
        "{text}"
      </p>
      
      <div className="flex justify-center mt-8">
        <Minus className="w-8 h-px text-brand-gold/50" />
      </div>
    </div>
  );
};

// --- COMPONENTE DO ITEM INDIVIDUAL ---

const ThoughtItem = ({ thought, index }: { thought: Thought; index: number }) => {
  const { elementRef, isVisible } = useScrollReveal(0.15);

  // Lógica de Renderização do Conteúdo
  const renderContent = () => {
    switch (thought.style) {
      case 'serif-editorial': return <RenderSerifEditorial text={thought.content} />;
      case 'manuscript-gold': return <RenderManuscriptGold text={thought.content} />;
      case 'modern-deep': return <RenderModernDeep text={thought.content} />;
      default: return <RenderSerifEditorial text={thought.content} />; // Fallback seguro
    }
  };

  return (
    <div ref={elementRef} className="w-full">
      {/* Separador (exceto para o primeiro item) */}
      {index > 0 && <EditorialDivider />}

      <article className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}>
        
        {/* O Conteúdo Principal */}
        <div className="group">
          {renderContent()}
        </div>

        {/* Footer do Pensamento (Data e Assinatura) */}
        <div className={`mt-8 flex flex-col items-center justify-center gap-2 transition-opacity duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
           {/* Assinatura "Fake" elegante */}
           <span className="font-serif italic text-lg text-gray-400">
             — Stélio Thauassu
           </span>
           
           <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold/80">
             {thought.date}
           </span>
        </div>
      </article>
    </div>
  );
};

// --- PÁGINA PRINCIPAL ---

export interface ThoughtsPageProps {
  onBack: () => void;
}

export const ThoughtsPage: React.FC<ThoughtsPageProps> = ({ onBack }) => {
  // Efeito para scrollar para o topo ao abrir
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* 1. Camada de Textura (Noise) */}
      <NoiseFilter />

      {/* 2. Header Flutuante Minimalista */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 z-50 flex justify-between items-start pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto group flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-full hover:bg-white hover:border-brand-gold/30 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-brand-red transition-colors" />
          <span className="font-serif text-sm text-gray-600 italic group-hover:text-gray-900">Voltar para Biblioteca</span>
        </button>
      </header>

      {/* 3. Conteúdo Principal */}
      <main className="relative z-10 pt-32 pb-40 px-4 md:px-8 max-w-4xl mx-auto">
        
        {/* Título da Seção (Editorial Style) */}
        <div className="text-center mb-32 animate-fade-in-down">
          <span className="inline-block mb-4">
            <Star className="w-4 h-4 text-brand-gold mx-auto" />
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-red mb-6 tracking-tight">
            Reflexões
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] text-gray-500 uppercase">
            Teologia & Sabedoria
          </p>
        </div>

        {/* Lista de Pensamentos */}
        <div className="flex flex-col">
          {thoughts.map((thought, index) => (
            <ThoughtItem key={thought.id} thought={thought} index={index} />
          ))}
        </div>

        {/* Rodapé Decorativo Final */}
        <div className="mt-32 text-center opacity-40">
           <Feather className="w-6 h-6 mx-auto mb-4 text-gray-400" />
           <p className="font-serif italic text-sm text-gray-500">Fim da coleção</p>
        </div>

      </main>
    </div>
  );
};

export default ThoughtsPage;