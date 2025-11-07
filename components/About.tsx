import {profileImg} from '@/public/assets';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';

const About = () => {
  const achievements = [
    'Delivered 15+ full-stack projects across SaaS, ecommerce, and logistics domains.',
    'Scaled applications to support 10,000+ active users with sub-second response times.',
    'Reduced average page load times by up to 50% through targeted performance optimisation.',
    'Maintained a 100% on-time delivery rate with transparent communication and roadmap visibility.'
  ];

  const metrics = [
    { value: '4+', label: 'Years Experience' },
    { value: '15+', label: 'Client Projects Delivered' },
    { value: '50%', label: 'Average Faster Load Times' },
    { value: '100%', label: 'On-Time Delivery' }
  ];

  const techStack = [
    {
      category: 'Frontend',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      tools: ['Django', 'Laravel', 'Node.js', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Databases',
      tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      category: 'DevOps & Tooling',
      tools: ['Docker', 'CI/CD Pipelines', 'Git & GitHub', 'Vercel', 'AWS']
    }
  ];

  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <SectionTitle title='About Me' titleNo='01' />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-6'>
          <p className='text-lg leading-relaxed text-textLight'>
            I help product teams ship fast, scalable web applications that drive measurable business outcomes. My work blends product thinking with engineering rigour so every release feels purposeful and production-ready.
          </p>

          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-semibold text-textGreen tracking-wide uppercase'>Impact At A Glance</h3>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {metrics.map(({ value, label }) => (
                <div
                  key={label}
                  className='bg-[#112240] border border-[#233554] rounded-lg px-4 py-4 flex flex-col gap-1 shadow-md shadow-[#0a192f]/20'
                >
                  <span className='text-2xl font-semibold text-textGreen'>{value}</span>
                  <span className='text-xs uppercase tracking-wide text-textLight/80'>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-semibold text-textGreen tracking-wide uppercase'>Why Teams Work With Me</h3>
            <ul className='list-disc pl-5 space-y-2'>
              {achievements.map((item) => (
                <li key={item} className='leading-relaxed'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-semibold text-textGreen tracking-wide uppercase'>Tech Stack</h3>
            <div className='grid sm:grid-cols-2 gap-6'>
              {techStack.map(({ category, tools }) => (
                <div
                  key={category}
                  className='bg-[#0f1b33] border border-[#1f2a44] rounded-lg p-4 flex flex-col gap-3'
                >
                  <div className='flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-textLight/80'>
                    <span className='text-textGreen text-lg'>
                      <AiFillThunderbolt />
                    </span>
                    {category}
                  </div>
                  <ul className='space-y-1 text-sm text-textLight/90'>
                    {tools.map((tool) => (
                      <li key={tool} className='flex items-center gap-2'>
                        <span className='text-textGreen text-xs'>•</span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p>
            When we collaborate, you get a partner who obsesses over the details—from accessible UI to maintainable backend architecture—so your product can make the right first impression and scale with confidence.
          </p>
        </div>
        {/* Image */}
        <div className='w-full lgl:w-1/3 h-auto lgl:h-80 relative group'>
          <div className='absolute w-full h-full lgl:h-80 -left-6 -top-6 rounded-lg'>
            <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
              <Image
                className='rounded-lg h-full w-full object-cover'
                src={profileImg}
                alt='Ankit Sharma profile'
              />

              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md left-0 group-hover:bg-transparent duration-300' />
            </div>
          </div>
          <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300' />
        </div>
      </div>
    </section>
  );
};

export default About;