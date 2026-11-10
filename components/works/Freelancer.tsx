import { TiArrowForward } from 'react-icons/ti';

const Freelancer = () => {
  const projects = [
    {
      name: 'Cinesamugam',
      description:
        'Built a project management system in Laravel for 60+ employees across 20+ projects, with a shared task dashboard and time tracking.',
      impact: ['60+ employees', '20+ projects', 'Time tracking']
    },
    {
      name: 'InfraUp',
      description:
        'Designed and built a responsive landing page for a construction firm.',
      impact: ['Fully responsive', 'Custom brand identity']
    },
    {
      name: 'Atithi Tour & Travel',
      description:
        'Designed a tourism website with a user-friendly interface, showcasing various travel packages, destinations, and special offers.',
      impact: ['Tourism sector', 'User-friendly UI', 'Package showcase']
    }
  ];

  return (
    <ul className='flex flex-col gap-6'>
        {projects.map(({ name, description, impact }) => (
          <li key={name} className='flex flex-col gap-2'>
            <div className='flex gap-3'>
              <span className='text-accent mt-1 flex-shrink-0'>
                <TiArrowForward />
              </span>
              <div className='flex flex-col gap-2'>
                <span className='font-semibold text-textLight'>{name}</span>
                <span className='text-base text-textDark leading-relaxed'>{description}</span>
                <div className='flex flex-wrap gap-2 mt-1'>
                  {impact.map((item) => (
                    <span
                      key={item}
                      className='text-xs px-2 py-1 bg-[#112240] text-accent border border-accent/20 rounded'
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
  );
};

export default Freelancer;