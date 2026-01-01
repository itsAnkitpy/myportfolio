import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Holisol from './works/Holisol';
import Himtech from './works/Himtech';
import Freelancer from './works/Freelancer';
import { HiOfficeBuilding } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('holisol');

  const experiences = [
    {
      id: 'holisol',
      company: 'SummerHill Technologies',
      icon: <HiOfficeBuilding />,
      component: <Holisol />
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
        <div className='md:w-65 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0'>
          {experiences.map(({ id, company, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`${activeTab === id
                ? 'bg-[#112240] border-l-textGreen text-textGreen shadow-md shadow-textGreen/10'
                : 'border-l-[#233554] text-textDark hover:bg-[#112240] hover:text-textLight'
                } 
              flex items-center gap-3 border-l-2 md:border-l-4 py-3 px-6 md:px-4 text-sm font-medium
              cursor-pointer transition-all duration-300 rounded-r-md whitespace-nowrap
              group relative overflow-hidden`}
            >
              <span
                className={`${activeTab === id ? 'text-textGreen' : 'text-textDark group-hover:text-textGreen'
                  } text-lg transition-colors duration-300`}
              >
                {icon}
              </span>
              <span className='font-titleFont tracking-wide'>{company}</span>

              {/* Active indicator dot */}
              {activeTab === id && (
                <span className='absolute right-2 w-2 h-2 bg-textGreen rounded-full animate-pulse' />
              )}
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