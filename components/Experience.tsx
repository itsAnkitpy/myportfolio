// One sentence per job. The projects section below carries the detail.
const jobs = [
  {
    dates: 'Oct 2024 – now',
    title: 'Software Engineer',
    company: 'SummerHill Technologies',
    summary: "Built and ran client systems, from a state Bar Council's enrolment to a logistics company's live delivery system.",
    tools: 'Laravel · Next.js · NestJS'
  },
  {
    dates: '2021 – 2024',
    title: 'Freelance',
    company: 'Independent',
    summary: 'Built a project management system for a 60-person team, plus websites for local businesses.',
    tools: 'Laravel · PHP'
  },
  {
    dates: '2020 – 2021',
    title: 'Junior Developer',
    company: 'Himtech',
    summary: 'Built the Django backend for a home-services marketplace.',
    tools: 'Django · Python'
  }
];

const Experience = () => {
  return (
    <section
      id='experience'
      className='max-w-containerSmall mx-auto py-10 lgl:py-24 grid lgl:grid-cols-[1fr_2.2fr] gap-8 lgl:gap-12'
    >
      <div className='flex flex-col gap-4'>
        <h2 className='font-titleFont text-2xl font-semibold'>Experience</h2>
        <a
          href='/assets/ankit-sharma-latest.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm font-medium text-accent hover:underline underline-offset-4 w-fit'
        >
          Full resume (PDF) →
        </a>
      </div>

      <ol className='border-t border-[#233554]'>
        {jobs.map(({ dates, title, company, summary, tools }) => (
          <li
            key={company}
            className='grid sml:grid-cols-[9rem_1fr] gap-x-6 gap-y-1 py-6 border-b border-[#233554]'
          >
            <p className='text-sm text-textDark tabular-nums pt-1'>{dates}</p>
            <div className='flex flex-col gap-2 min-w-0'>
              <h3 className='font-titleFont text-lg font-semibold text-textLight'>
                {title} · {company}
              </h3>
              <p className='text-base text-textDark leading-relaxed'>{summary}</p>
              <p className='text-sm text-textDark/80'>{tools}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
