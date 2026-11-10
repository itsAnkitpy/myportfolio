import SectionTitle from './SectionTitle';
import Summerhill from './works/Summerhill';
import Himtech from './works/Himtech';
import Freelancer from './works/Freelancer';

// Newest first. Every job stays visible; there are no tabs to click.
const jobs = [
  {
    title: 'Software Engineer',
    company: 'SummerHill Technologies',
    dates: 'Oct 2024 – Present',
    meta: '7 apps · SaaS & legacy rebuilds · Laravel, Next.js & NestJS',
    body: <Summerhill />
  },
  {
    title: 'Freelance Projects',
    company: 'Independent',
    dates: '2021 – 2024',
    meta: 'Shimla · Project-based client work',
    body: <Freelancer />
  },
  {
    title: 'Junior Developer',
    company: 'Himtech',
    dates: 'Jan 2020 – Feb 2021',
    meta: 'Django & Python · HTML, CSS, JS',
    body: <Himtech />
  }
];

const Experience = () => {
  return (
    <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title='Experience' />

      <ol className='mt-10 flex flex-col'>
        {jobs.map(({ title, company, dates, meta, body }, index) => (
          <li key={company} className='relative pl-8 pb-12 last:pb-0'>
            {/* The line runs from this dot down to the next one. */}
            {index < jobs.length - 1 && (
              <span className='absolute left-[5px] top-4 bottom-0 w-px bg-[#233554]' />
            )}
            <span className='absolute left-0 top-[9px] w-[11px] h-[11px] rounded-full border-2 border-accent bg-bodyColor' />

            <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
              <h3 className='font-titleFont font-semibold text-xl text-textLight'>
                {title} <span className='text-accent'>· {company}</span>
              </h3>
              <p className='text-sm font-medium text-textDark whitespace-nowrap'>{dates}</p>
            </div>
            <p className='mt-1 text-sm text-textDark'>{meta}</p>

            <div className='mt-5'>{body}</div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
