import { TiArrowForward } from 'react-icons/ti';

const name = (text: string) => <span className='text-textLight'>{text}</span>;

const bullets = [
  <>
    Rebuilt {name('Legendaire')}&apos;s live delivery system from .NET and AngularJS to NestJS and React as the
    sole developer. Live since October 2026.
  </>,
  <>
    Building production multi-tenant systems including {name('LinkAbode')} (schema-per-tenant) and{' '}
    {name('LeadCheck')} (database-per-tenant) using Laravel and Next.js ecosystems.
  </>,
  <>
    Delivered {name('HP Bar Council')} digital enrollment platform, integrating Billdesk payment gateway and AWS S3
    for document management.
  </>,
  <>
    Contributed to {name('Holistart')} workforce onboarding platform with automated approval workflows and employee
    provisioning integrations.
  </>
];

const Summerhill = () => {
  return (
    <ul className='flex flex-col gap-4'>
      {bullets.map((bullet, index) => (
        <li key={index} className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-accent mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
};

export default Summerhill;
