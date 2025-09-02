import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Matheus Zilli
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary mb-6">
          Estudante de Engenharia de Software
        </p>
        
        <p className="text-lg text-text max-w-2xl mx-auto mb-8 leading-relaxed">
          Experiência em automação financeira e desenvolvimento de dashboards.
          <br />
          Desenvolvo projetos de software para expandir melhorar como desenvolvedor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-accent text-primary rounded-lg hover:bg-accent transition-colors duration-200"
          >
            Ver Projetos
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-accent text-primary rounded-lg hover:bg-accent transition-colors duration-200"
          >
            Entrar em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;