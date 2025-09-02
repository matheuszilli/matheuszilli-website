import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from './ProjectCard';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Website Corporativo',
      description: 'Site responsivo para estúdio de pilates com landing page otimizada e formulário de contato.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      status: 'completed',
      link: 'https://www.studioserenity.com.br'
    },
    {
      id: 2,
      title: 'Sistema de Gestão',
      description: 'ERP para estúdio de pilates com módulos de CRM, agenda e controle financeiro.',
      technologies: ['C#', '.NET', 'Razor Pages', 'PostgreSQL'],
      status: 'in-progress'
    },
  {
    id: 3,
    title: 'Gestão de Carteira de Investimentos',
    description: 'Sistema acadêmico para análise e controle de portfólio de ações.',
    technologies: ['Python'],
    link: 'https://github.com/matheuszilli/pb-financial',
    status: 'in-progress'
  }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projetos
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;