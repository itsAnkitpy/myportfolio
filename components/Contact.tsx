const links = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/its-ankit-sharma/' },
  { name: 'GitHub', url: 'https://github.com/itsAnkitpy' }
];

const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-16 xl:py-32 mdl:px-10 xl:px-4 flex flex-col gap-6'
    >
      <p className='font-titleFont text-sm tracking-[0.2em] uppercase text-textDark'>Contact</p>

      <h2 className='font-titleFont text-4xl lgl:text-6xl font-bold text-textLight leading-tight max-w-[800px]'>
        Building a multi-tenant product? Let&apos;s talk.
      </h2>

      <p className='text-base md:text-lg text-textDark'>I reply to every email within 24 hours.</p>

      {/* The address is the button text, so people can copy it even if their mail app does not open. */}
      <div className='flex flex-wrap gap-4 mt-4'>
        <a
          href='mailto:ankit3585@gmail.com'
          className='px-6 py-3 rounded-md bg-accent text-bodyColor font-titleFont font-semibold hover:bg-accent/90 duration-300'
        >
          ankit3585@gmail.com
        </a>
        {links.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 rounded-md border border-[#233554] text-textLight font-titleFont hover:border-accent hover:text-accent duration-300'
          >
            {name} ↗
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
