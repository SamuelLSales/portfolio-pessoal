import React from 'react';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-6 bg-[#1a1c1b]">
      <div className="container max-w-[864px] mx-auto">
        <h2 className="heading-2 text-[#d9fb06] text-center mb-16 font-black text-6xl uppercase">
          Educação
        </h2>
        
        <div className="space-y-8">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-[#302f2c] rounded-lg p-8 hover:bg-[#3f4816]/30 transition-colors duration-300"
            >
              <div className="flex items-start mb-6">
                <GraduationCap size={24} className="text-[#d9fb06] mr-4 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="heading-4 text-[#d9fb06] mb-2 text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-[#888680] font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-[#d9fb06]/80 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
              </div>
              
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="ml-10">
                  <h4 className="text-[#888680] font-medium mb-3 text-sm uppercase tracking-wide">
                    Destaques
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-[#d9fb06]">
                        <span className="text-[#d9fb06] mr-3 mt-2 w-2 h-2 bg-[#d9fb06] rounded-full flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;