import React from 'react';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 bg-[#1a1c1b]">
      <div className="container max-w-[864px] mx-auto">
        <h2 className="heading-2 text-[#d9fb06] text-center mb-16 font-black text-6xl uppercase">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-[#302f2c] rounded-lg p-8">
            <h3 className="heading-4 text-[#d9fb06] mb-6 text-xl font-semibold flex items-center">
              <span className="w-3 h-3 bg-[#d9fb06] rounded-full mr-3"></span>
              Skills Técnicas
            </h3>
            
            <div className="space-y-6">
              {Object.entries(skills.technical).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-[#888680] font-medium mb-3 text-sm uppercase tracking-wide">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                      <Badge 
                        key={idx}
                        className="bg-[#3f4816]/50 text-[#d9fb06] border-[#3f4816] hover:bg-[#3f4816] transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-[#302f2c] rounded-lg p-8">
            <h3 className="heading-4 text-[#d9fb06] mb-6 text-xl font-semibold flex items-center">
              <span className="w-3 h-3 bg-[#d9fb06] rounded-full mr-3"></span>
              Soft Skills
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, idx) => (
                <Badge 
                  key={idx}
                  variant="outline"
                  className="bg-transparent text-[#d9fb06] border-[#d9fb06]/30 hover:bg-[#d9fb06]/10 hover:border-[#d9fb06] transition-colors py-2 px-4"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;