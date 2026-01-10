import React from 'react';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-accent/20 transform translate-x-4 translate-y-4 rounded-lg" />
            <img 
              src="/pai.png"
              alt="Stélio Thauassu" 
              className="relative w-full rounded-lg"
            />
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full border border-primary/10">
              <span className="text-sm font-semibold tracking-wider uppercase">Sobre o Autor</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
              Stélio Thauassu
            </h2>

            <div className="relative">
              <Quote className="absolute -top-4 -left-6 w-12 h-12 text-accent/20 transform -scale-x-100" />
              <p className="text-lg text-text/80 leading-relaxed italic relative z-10 pl-6 border-l-4 border-accent">
                "A verdadeira sabedoria não está em inventar novos caminhos, mas em redescobrir as veredas antigas que conduzem à vida, à honra e ao amor verdadeiro."
              </p>
            </div>

            <div className="space-y-4 text-text/70 leading-relaxed">
              <p>
                Stélio Thauassu Rabelo Ferreira nasceu em Salinópolis, no Pará, e estudou durante toda a vida em Belém. Formado em Letras, pela Unama, fez especialização também em Letras, na UFPA; mestrado em Filosofia Cristã, pela, FATECBA; mestrado e doutorado em Letras, pela Universidade de Assunção, no Paraguai. Atua como professor de Língua inglesa há mais de 20 anos, na rede estadual de educação de Salinópolis.
              </p>
              <p>
                No ano de 2016, Stélio publicou o livro didático: Exercicios Suplementares da Língua Inglesa- Gramática sem complicação. No ano de 2017, publicou o segundo livro didático: Redação - O ensino da escrita dissertativa-argumentativa para o Enem. Em 2020, publicou Hermenêutica Bíblica.
              </p>
              <p>
                Stélio Thauassu Rabelo Ferreira é casado com Sheila Damasceno Ferreira, tecnóloga em gestão comercial, pela UNINTER.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
