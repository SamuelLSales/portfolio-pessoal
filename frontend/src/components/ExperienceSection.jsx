import React from 'react';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 bg-[#1a1c1b]">
      <div className="container max-w-[864px] mx-auto">
        <h2 className="heading-2 text-[#d9fb06] text-center mb-16 font-black text-6xl uppercase">
          Experiência
        </h2>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div 
              key={job.id}
              className="bg-[#302f2c] rounded-lg p-8 hover:bg-[#3f4816]/30 transition-colors duration-300"
            >
              <div className="mb-6">
                <h3 className="heading-4 text-[#d9fb06] mb-2 text-xl font-semibold">
                  {job.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[#888680] mb-4">
                  <p className="font-medium">{job.company}</p>
                  <div className="text-sm">
                    <span>{job.period}</span>
                    <span className="mx-2">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-[#d9fb06]">
                      <span className="text-[#d9fb06] mr-3 mt-2 w-2 h-2 bg-[#d9fb06] rounded-full flex-shrink-0"></span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    variant="secondary" 
                    className="bg-[#3f4816]/50 text-[#d9fb06] border-[#3f4816] hover:bg-[#3f4816] transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;