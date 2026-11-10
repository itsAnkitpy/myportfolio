import React from 'react';
import { HiMail, HiDownload } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/its-ankit-sharma/',
      color: 'hover:text-blue-400 hover:border-blue-400'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/itsAnkitpy',
      color: 'hover:text-purple-400 hover:border-purple-400'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://x.com/hi_itsAnkit',
      color: 'hover:text-sky-400 hover:border-sky-400'
    }
  ];


  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 px-4 flex flex-col gap-8 items-center justify-center relative'
    >
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none' />

      <div className='relative z-10 flex flex-col gap-8 items-center justify-center'>
        {/* Header */}
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-2'>
            <span className='h-px w-8 bg-accent/50' />
            <p className='font-titleFont text-lg text-accent font-semibold tracking-wide'>
              What&apos;s Next?
            </p>
            <span className='h-px w-8 bg-accent/50' />
          </div>

          <h2 className='font-titleFont text-4xl md:text-5xl lg:text-6xl font-bold text-textLight'>
            Get In Touch
          </h2>

          {/* Availability Badge */}
          <div className='flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full'>
            <span className='w-2 h-2 bg-accent rounded-full animate-pulse' />
            <span className='text-sm text-accent font-medium'>Available for new opportunities</span>
          </div>
        </div>

        {/* Description */}
        <p className='max-w-[650px] text-center text-base md:text-lg text-textDark leading-relaxed'>
          I&apos;m currently looking for new opportunities and my inbox is always open. Whether you have a
          question, a project idea, or just want to say hi, I&apos;ll do my best to get back to you!
        </p>

        {/* Response Time Info */}
        <div className='flex items-center gap-2 text-sm text-textDark'>
          <BsCalendar3 className='text-accent' />
          <span>Usually responds within 24 hours</span>
        </div>

        {/* Primary CTAs */}
        <div className='flex flex-col sml:flex-row items-center gap-4 mt-4'>
          {/* Email Button */}
          <a href='mailto:ankit3585@gmail.com'>
            <button className='group flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 shadow-md hover:shadow-accent/20 font-medium'>
              <HiMail className='text-xl group-hover:scale-110 transition-transform duration-300' />
              <span>Send Email</span>
            </button>
          </a>

          {/* Resume Button */}
          <a href='/assets/ankit-sharma-latest.pdf' download>
            <button className='group flex items-center gap-2 px-8 py-4 bg-accent/10 border-2 border-accent/30 text-textLight rounded-lg hover:border-accent hover:bg-accent/20 transition-all duration-300 font-medium'>
              <HiDownload className='text-xl group-hover:translate-y-1 transition-transform duration-300' />
              <span>Download Resume</span>
            </button>
          </a>
        </div>

        {/* Social Links */}
        <div className='flex flex-col items-center gap-4 mt-8'>
          <p className='text-sm text-textDark uppercase tracking-wider'>Connect With Me</p>
          <div className='flex items-center gap-4'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`flex items-center justify-center w-12 h-12 border-2 border-[#233554] text-textDark rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                aria-label={social.name}
              >
                <span className='text-xl'>{social.icon}</span>
              </a>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;