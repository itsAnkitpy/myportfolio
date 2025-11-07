import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';

const Holisol = () => {
  const highlights = [
    { icon: <FiTrendingUp />, label: 'Digital Transformation', value: 'Supply Chain' },
    { icon: <FiZap />, label: 'Tech Stack', value: 'Full-Stack Web' },
    { icon: <FiUsers />, label: 'Focus', value: 'SaaS Logistics' }
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
          Software Engineer
          <span className='text-textGreen tracking-wide'>@Holisol Logistics</span>
        </h3>
        <div className='flex items-center gap-2'>
          <p className='text-sm font-medium text-textDark'>Oct 2024 - Present</p>
          <span className='px-2 py-1 text-xs bg-textGreen/10 text-textGreen rounded-md border border-textGreen/20'>
            Current Role
          </span>
        </div>
      </div>

      {/* Quick Impact Highlights */}
      <div className='grid grid-cols-3 gap-3 mb-6'>
        {highlights.map(({ icon, label, value }) => (
          <div
            key={label}
            className='bg-[#0a192f] border border-[#233554] rounded-lg px-3 py-3 flex flex-col gap-1'
          >
            <span className='text-textGreen text-lg'>{icon}</span>
            <span className='text-xs text-textDark uppercase tracking-wide'>{label}</span>
            <span className='text-sm font-medium text-textLight'>{value}</span>
          </div>
        ))}
      </div>

      <ul className='mt-6 flex flex-col gap-4'>
        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Developing and maintaining tech-enabled end-to-end supply chain logistics solutions,
            contributing to the company&apos;s digital transformation initiatives.
          </span>
        </li>

        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Building scalable web applications and APIs to optimize logistics operations, warehouse
            management, and supply chain visibility.
          </span>
        </li>

        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Collaborating with cross-functional teams to design and implement features that enhance
            operational efficiency and improve customer experience.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Holisol;

