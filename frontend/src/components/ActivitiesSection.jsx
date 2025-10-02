import React from 'react';
import { Badge } from './ui/badge';
import { BookOpen, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const ActivitiesSection = () => {
  const { activities } = portfolioData;

  return (
    <section id="activities" className="py-20 px-6 bg-[#1a1c1b]">
      <div className="container max-w-[864px] mx-auto">
        <h2 className="heading-2 text-[#d9fb06] text-center mb-16 font-black text-6xl uppercase">
          Atividades
        </h2>
        
        <div className="space-y-6">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="bg-[#302f2c] rounded-lg p-6 hover:bg-[#3f4816]/30 transition-colors duration-300 border border-[#3f4816]/20"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start mb-3">
                    <BookOpen size={20} className="text-[#d9fb06] mr-3 mt-1 flex-shrink-0" />
                    <h3 className="heading-5 text-[#d9fb06] font-semibold text-lg leading-tight">
                      {activity.title}
                    </h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-[#888680] mb-2 font-medium">
                      {activity.platform}
                    </p>
                    
                    <div className="flex items-center text-[#d9fb06]/80">
                      <Calendar size={16} className="mr-2" />
                      <Badge 
                        variant="secondary" 
                        className="bg-[#3f4816]/50 text-[#d9fb06] border-[#3f4816]"
                      >
                        {activity.year}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;