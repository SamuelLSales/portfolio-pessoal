import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/mock';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6 bg-[#1a1c1b]">
      <div className="container max-w-[864px] mx-auto">
        <h2 className="heading-2 text-[#d9fb06] text-center mb-16 font-black text-6xl uppercase">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#302f2c] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#3f4816] to-[#302f2c] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1a1c1b]/20"></div>
                <div className="text-[#d9fb06]/60 text-6xl font-bold z-10">
                  {project.id}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="heading-5 text-[#d9fb06] mb-3 font-semibold text-lg group-hover:text-[#d9fb06]/90">
                  {project.title}
                </h3>
                
                <p className="text-[#888680] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx}
                      className="bg-[#3f4816]/50 text-[#d9fb06] border-[#3f4816] text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Project Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-[#d9fb06]/30 text-[#d9fb06] hover:bg-[#d9fb06]/10 hover:border-[#d9fb06] transition-colors"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  Ver Projeto
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;