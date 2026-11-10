import { profileImg } from '@/public/assets';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';

const About = () => {
  const achievements = [
    "Replaced a state Bar Council's paper enrolment with an online system. I built it alone, presented it on-site to the council, wrote the user guides and recorded onboarding videos for staff and applicants.",
    "Rebuilt a logistics company's live delivery system from .NET to NestJS and React as the sole developer, then supported it through its first weeks of real orders.",
    'Built and launched my own SaaS product, AssetLane, from design to market.'
  ];

  const metrics = [
    { value: '4+', label: 'Years Experience' },
    { value: '8+', label: 'Production Apps' }
  ];

  // Only tools that appear in the projects on this site.
  const techStack = [
    {
      category: 'Frontend',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      tools: ['Laravel', 'FilamentPHP', 'Livewire', 'NestJS', 'Django', 'REST APIs']
    },
    {
      category: 'Databases',
      tools: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Prisma']
    },
    {
      category: 'DevOps & Tooling',
      tools: ['Docker', 'AWS', 'Vercel', 'Git & GitHub', 'Playwright', 'Claude Code & Codex']
    }
  ];

  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <SectionTitle title='About' />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-6'>
          <p className='text-lg leading-relaxed text-textLight'>
            I own software end to end: requirements with the client, the build, deployment and support after launch. Most of my work is business software that staff rely on every day, for a state Bar Council, a logistics company and a BPO.
          </p>


          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-semibold text-accent tracking-wide uppercase'>Impact At A Glance</h3>
            <div className='grid grid-cols-2 gap-4'>
              {metrics.map(({ value, label }) => (
                <div
                  key={label}
                  className='bg-[#112240] border border-[#233554] rounded-lg px-4 py-4 flex flex-col gap-1 shadow-md shadow-[#0a192f]/20 min-w-0'
                >
                  <span className='text-2xl font-semibold text-accent'>{value}</span>
                  {/* A word longer than the card wraps instead of escaping it. */}
                  <span className='text-xs uppercase tracking-wide text-textLight/80 break-words hyphens-auto'>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-semibold text-accent tracking-wide uppercase'>What I have owned</h3>
            <ul className='list-disc pl-5 space-y-2'>
              {achievements.map((item) => (
                <li key={item} className='leading-relaxed'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-semibold text-accent tracking-wide uppercase'>Tech Stack</h3>
            <div className='grid sml:grid-cols-2 gap-6'>
              {techStack.map(({ category, tools }) => (
                <div
                  key={category}
                  className='bg-[#0f1b33] border border-[#1f2a44] rounded-lg p-4 flex flex-col gap-3'
                >
                  <div className='flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-textLight/80'>
                    <span className='text-accent text-lg'>
                      <AiFillThunderbolt />
                    </span>
                    {category}
                  </div>
                  <ul className='space-y-1 text-sm text-textLight/90'>
                    {tools.map((tool) => (
                      <li key={tool} className='flex items-center gap-2'>
                        <span className='text-accent text-xs'>•</span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>        </div>
        {/* Image */}
        <div className='w-full lgl:w-1/3 h-auto lgl:h-80 relative group'>
          <div className='absolute w-full h-full lgl:h-80 -left-6 -top-6 rounded-lg'>
            <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
              <Image
                className='rounded-lg h-full w-full object-cover object-top'
                src={profileImg}
                alt='Ankit Sharma profile'
              />

              <div className='hidden lgl:inline-block absolute w-full h-80 bg-accent/20 rounded-md left-0 group-hover:bg-transparent duration-300' />
            </div>
          </div>
          <div className='hidden lgl:inline-flex w-full h-80 border-2 border-accent rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300' />
        </div>
      </div>
    </section>
  );
};

export default About;