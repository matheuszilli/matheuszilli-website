import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-accent">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-secondary text-sm">
          © {currentYear} Matheus Zilli. Desenvolvido com React e TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;