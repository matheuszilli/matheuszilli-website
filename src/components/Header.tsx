import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-accent">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-semibold text-primary">
            Matheus Zilli
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              Contato
            </button>
          </div>
          
          <div className="md:hidden">
            <button className="text-secondary hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;