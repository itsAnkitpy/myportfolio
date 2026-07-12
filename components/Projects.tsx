import { projects } from '../lib/data';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { getTechIcon } from '../lib/getTechIcon';

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24 px-4'>
      <SectionTitle title='Some things I have built' titleNo='03' />

      <motion.div
        className='w-full flex flex-col items-center gap-20 mt-10'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className='w-full flex flex-col items-center'
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
              } gap-6 w-full`}
            >
              {/* Project Image */}
              <div className='w-full xl:w-1/2 h-auto relative group'>
                <Link href={`/projects/${project.slug}`}>
                  <div className='relative overflow-hidden rounded-lg border border-[#233554] bg-[#0a192f] shadow-lg shadow-[#0a192f]/50 group-hover:shadow-textGreen/10 transition-all duration-300'>
                    {/* Gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-br from-textGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
                    
                    <Image
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer'
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                    />

                    {/* Status Badge Overlay */}
                    <div className='absolute top-4 left-4 z-20'>
                      {project.liveDemoUrl ? (
                        <span className='px-3 py-1 text-xs font-semibold bg-textGreen text-[#0a192f] rounded-full shadow-md'>
                          Live
                        </span>
                      ) : (
                        <span className='px-3 py-1 text-xs font-semibold bg-[#112240] text-textGreen border border-textGreen/30 rounded-full shadow-md'>
                          Open Source
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>

              {/* Project Content */}
              <div
                className={`w-full xl:w-1/2 flex flex-col gap-5 ${
                  index % 2 === 0
                    ? 'xl:items-end xl:text-right xl:-ml-16'
                    : 'xl:items-start xl:text-left xl:-mr-16'
                } z-10`}
              >
                {/* Featured Tag */}
                <div className='flex items-center gap-2'>
                  <span className='h-px w-8 bg-textGreen/50' />
                  <p className='font-titleFont text-textGreen text-sm tracking-wider uppercase'>
                    Featured Project
                  </p>
                </div>

                {/* Title */}
                <Link href={`/projects/${project.slug}`}>
                  <h3 className='text-2xl md:text-3xl font-bold text-textLight hover:text-textGreen transition-colors duration-300 cursor-pointer'>
                    {project.title}
                  </h3>
                </Link>

                {/* Description Card */}
                <div className='bg-[#112240] border border-[#233554] text-sm md:text-base p-5 md:p-6 rounded-lg shadow-lg shadow-[#0a192f]/30 backdrop-blur-sm'>
                  <p className='text-textDark leading-relaxed'>{project.shortDescription}</p>
                </div>

                {/* Tech Stack Tags */}
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'xl:justify-end' : 'xl:justify-start'
                  }`}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#0a192f] text-textGreen border border-textGreen/20 rounded-md hover:border-textGreen/50 hover:bg-[#112240] transition-all duration-300'
                    >
                      <span className='text-sm'>{getTechIcon(tag)}</span>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className='flex items-center gap-4'>
                  {/* View Case Study Button */}
                  <Link href={`/projects/${project.slug}`}>
                    <button className='group flex items-center gap-2 px-5 py-2.5 bg-transparent border border-textGreen text-textGreen rounded-md hover:bg-textGreen/10 transition-all duration-300'>
                      <span className='text-sm font-medium'>View Case Study</span>
                      <HiArrowNarrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
                    </button>
                  </Link>

                  {/* External Links */}
                  <div className='flex items-center gap-3 text-2xl'>
                    {project.sourceCodeUrl && (
                      <a
                        className='text-textDark hover:text-textGreen hover:scale-110 transition-all duration-300'
                        href={project.sourceCodeUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='View Source Code'
                      >
                        <TbBrandGithub />
                      </a>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        className='text-textDark hover:text-textGreen hover:scale-110 transition-all duration-300'
                        href={project.liveDemoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='View Live Demo'
                      >
                        <RxOpenInNewWindow />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;