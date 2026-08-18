import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Summerhill from './works/Summerhill';
import Himtech from './works/Himtech';
import Freelancer from './works/Freelancer';
import { HiOfficeBuilding } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('summerhill');

  const experiences = [
    {
      id: 'summerhill',
      company: 'SummerHill Technologies',
      icon: <HiOfficeBuilding />,
      component: <Summerhill />
    },
    {
      id: 'freelancer',
      company: 'Freelancer',
      icon: <MdWork />,
      component: <Freelancer />
    },
    {
      id: 'himtech',
      company: 'Himtech',
      icon: <HiOfficeBuilding />,
      component: <Himtech />
    }
  ];

  return (
    <section
      id='experience'
      className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title='Where I have Worked' titleNo='02' />

      <div className='w-full mt-10 flex flex-col md:flex-row gap-8 md:gap-16'>
        {/* Tab Navigation */}
        {/* Tabs wrap onto a new line rather than shrinking — a squeezed button
            clipped its own company name against `overflow-hidden`. */}
        <div className='md:w-65 flex flex-wrap md:flex-col gap-2'>
          {experiences.map(({ id, company, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`${activeTab === id
                ? 'bg-[#112240] border-l-textGreen text-textGreen shadow-md shadow-textGreen/10'
                : 'border-l-[#233554] text-textDark hover:bg-[#112240] hover:text-textLight'
                } 
              flex items-center gap-3 border-l-2 md:border-l-4 py-3 px-4 text-sm font-medium
              cursor-pointer transition-all duration-300 rounded-r-md whitespace-nowrap shrink-0
              group relative overflow-hidden`}
            >
              <span
                className={`${activeTab === id ? 'text-textGreen' : 'text-textDark group-hover:text-textGreen'
                  } text-lg transition-colors duration-300`}
              >
                {icon}
              </span>
              <span className='font-titleFont tracking-wide'>{company}</span>

              {/* Active indicator dot. Held in the flow, not positioned over the
                  label, and always rendered so switching tabs shifts nothing. */}
              <span
                className={`${activeTab === id ? 'opacity-100 animate-pulse' : 'opacity-0'
                  } ml-auto w-2 h-2 shrink-0 bg-textGreen rounded-full transition-opacity duration-300`}
              />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className='flex-1 min-h-[400px]'>
          {experiences.map(({ id, component }) => (
            <div key={id} className={activeTab === id ? 'block' : 'hidden'}>
              {component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;