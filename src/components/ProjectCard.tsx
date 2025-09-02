import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  status: 'completed' | 'in-progress';
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-accent rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-primary">
          {project.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'completed'
          ? 'bg-green-100 text-green-800'
          : 'bg-blue-100 text-blue-800'
          }`}>
          {project.status === 'completed' ? 'Concluído' : 'Em andamento'}
        </span>
      </div>

      <p className="text-text mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-accent text-secondary text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-accent text-primary rounded-lg hover:bg-accent transition-colors duration-200"
        >
          Ver projeto
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;