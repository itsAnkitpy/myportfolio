import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { FiCode, FiServer, FiLayout } from 'react-icons/fi';

const Himtech = () => {
  const highlights = [
    { icon: <FiCode />, label: 'Role', value: 'Junior Developer' },
    { icon: <FiServer />, label: 'Backend', value: 'Django & Python' },
    { icon: <FiLayout />, label: 'Frontend', value: 'HTML, CSS, JS' }
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
          Junior Developer
          <span className='text-textGreen tracking-wide'>@Himtech</span>
        </h3>
        <div className='flex items-center gap-2'>
          <p className='text-sm font-medium text-textDark'>Jan 2020 - Feb 2021</p>
          <span className='text-xs text-textDark'>• 1 year</span>
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
            Contributed to the development of a freelance marketplace platform specializing in
            services such as gardening, plumbing, and other home services.
          </span>
        </li>

        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Engineered a robust backend system with Django and Python, ensuring seamless integration
            and functionality.
          </span>
        </li>

        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Developed the front-end using HTML, CSS, JavaScript, and SCSS, creating a responsive and
            user-friendly interface.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Himtech;