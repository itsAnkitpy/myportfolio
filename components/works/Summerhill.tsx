import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { FiPackage, FiLayers, FiZap } from 'react-icons/fi';

const Summerhill = () => {
  const highlights = [
    { icon: <FiPackage />, label: 'Projects', value: '7 Applications' },
    { icon: <FiLayers />, label: 'Focus', value: 'Multi-Tenant SaaS' },
    { icon: <FiZap />, label: 'Stack', value: 'Laravel & Next.js' }
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
          <span className='text-textGreen tracking-wide'>@SummerHill Technologies</span>
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
            Building production multi-tenant systems including{' '}
            <span className='text-textLight'>LinkAbode</span> (schema-per-tenant),{' '}
            <span className='text-textLight'>LeadCheck</span> (database-per-tenant), and{' '}
            <span className='text-textLight'>AMT</span> (row-level isolation) using Laravel and Next.js ecosystems.
          </span>
        </li>

        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Delivered <span className='text-textLight'>HP Bar Council</span> digital enrollment platform, integrating
            Billdesk payment gateway and AWS S3 for document management.
          </span>
        </li>

        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Contributed to <span className='text-textLight'>Holistart</span> workforce onboarding platform with
            automated approval workflows and employee provisioning integrations.
          </span>
        </li>

        <li className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-textGreen mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>
            Maintaining legacy CakePHP ticketing system (<span className='text-textLight'>Dopex</span>) and
            Laravel-based internal operations tool (<span className='text-textLight'>Insite</span>) for company-wide operations.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Summerhill;

