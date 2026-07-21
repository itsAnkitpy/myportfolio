import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Freelancer = () => {
  const projects = [
    {
      name: 'Cinesamugam',
      description:
        'Developed a comprehensive Project Management System using PHP and Laravel, resulting in a 20% productivity increase. A real-time collaborative dashboard streamlined task distribution for 60+ employees, reducing project delays by 30%. The integrated time-tracking feature improved scheduling efficiency by 25% across 20+ projects through data-driven decision-making.',
      impact: ['20% productivity ↑', '30% fewer delays', '60+ employees']
    },
    {
      name: 'InfraUp',
      description:
        'Designed and developed a responsive landing page for a construction firm, tailored to client needs and brand identity. Ensured a seamless user experience across all devices by implementing responsive design principles, optimizing the layout and content for both desktop and mobile users, increasing client engagement by 15%.',
      impact: ['15% engagement ↑', 'Fully responsive', 'Custom brand identity']
    },
    {
      name: 'Atithi Tour & Travel',
      description:
        'Designed a tourism website with a user-friendly interface, showcasing various travel packages, destinations, and special offers.',
      impact: ['Tourism sector', 'User-friendly UI', 'Package showcase']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='w-full'
    >
      <div className='flex flex-col gap-2 mb-6'>
        <h3 className='flex flex-wrap items-center gap-2 font-semibold text-2xl font-titleFont text-textLight'>
          Freelance Projects
          <span className='text-textGreen tracking-wide'>@Independent</span>
        </h3>
        <div className='flex items-center gap-2'>
          <p className='text-sm font-medium text-textDark'>2021 - 2024</p>
          <span className='text-xs text-textDark'>• Shimla • Project-based client work</span>
        </div>
      </div>

      <ul className='mt-6 flex flex-col gap-6'>
        {projects.map(({ name, description, impact }) => (
          <li key={name} className='flex flex-col gap-2'>
            <div className='flex gap-3'>
              <span className='text-textGreen mt-1 flex-shrink-0'>
                <TiArrowForward />
              </span>
              <div className='flex flex-col gap-2'>
                <span className='font-semibold text-textLight'>{name}</span>
                <span className='text-base text-textDark leading-relaxed'>{description}</span>
                <div className='flex flex-wrap gap-2 mt-1'>
                  {impact.map((item) => (
                    <span
                      key={item}
                      className='text-xs px-2 py-1 bg-[#112240] text-textGreen border border-textGreen/20 rounded'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Freelancer;