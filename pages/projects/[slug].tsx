import { GetStaticPaths, GetStaticProps } from 'next';
import { projects, Project } from '../../lib/data';
import { SITE_URL } from '../../lib/site';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { FiArrowLeft, FiCalendar, FiUser, FiFolder, FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import { getTechIcon } from '../../lib/getTechIcon';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // All images for lightbox (hero + gallery)
  const allImages = [
    project.images?.hero || project.image,
    ...(project.images?.gallery || []),
    ...(project.images?.mobile ? [project.images.mobile] : [])
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  // Get role label
  const getRoleLabel = () => {
    if (!project.role) return null;
    const roleLabels = {
      solo: 'Solo Project',
      team: 'Team Project',
      freelance: 'Freelance Work',
      product: 'Independent Product'
    };
    return roleLabels[project.role];
  };

  // Get category label
  const getCategoryLabel = () => {
    if (!project.category) return null;
    const categoryLabels = {
      'full-stack': 'Full-Stack',
      'frontend': 'Frontend',
      'backend': 'Backend',
      'learning': 'Learning Project'
    };
    return categoryLabels[project.category];
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      <Head>
        <title>{project.title} - Ankit Sharma</title>
        <meta name='description' content={project.shortDescription} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href={`${SITE_URL}/projects/${project.slug}`} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`${SITE_URL}/projects/${project.slug}`} />
        <meta property='og:title' content={`${project.title} - Ankit Sharma`} />
        <meta property='og:description' content={project.shortDescription} />
        <meta property='og:image' content={`${SITE_URL}${project.image}`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`${project.title} - Ankit Sharma`} />
        <meta name='twitter:description' content={project.shortDescription} />
        <meta name='twitter:image' content={`${SITE_URL}${project.image}`} />
      </Head>

      <main className='w-full min-h-screen font-bodyFont bg-bodyColor text-textLight'>
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
          {/* Back Button */}
          <Link href='/#project'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className='flex items-center gap-2 text-textGreen hover:text-textLight cursor-pointer mb-8 transition-colors duration-300 w-fit'
            >
              <FiArrowLeft />
              <span className='text-sm font-medium'>Back to Projects</span>
            </motion.div>
          </Link>

          {/* Hero Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
            className='mb-16 relative'
          >
            {/* Background Gradient */}
            <div className='absolute inset-0 bg-gradient-to-r from-textGreen/5 via-transparent to-transparent pointer-events-none rounded-lg' />

            <div className='relative z-10'>
              {/* Status and Metadata Badges */}
              <motion.div variants={fadeInUp} className='flex flex-wrap items-center gap-3 mb-6'>
                {/* Status Badge */}
                {project.liveDemoUrl ? (
                  <span className='px-3 py-1.5 text-xs font-semibold bg-textGreen text-[#0a192f] rounded-full shadow-md'>
                    Live Project
                  </span>
                ) : (
                  <span className='px-3 py-1.5 text-xs font-semibold bg-[#112240] text-textGreen border border-textGreen/30 rounded-full shadow-md'>
                    Open Source
                  </span>
                )}

                {/* Year Badge */}
                {project.year && (
                  <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#112240] border border-[#233554] rounded-lg text-xs text-textDark'>
                    <FiCalendar className='text-textGreen' />
                    <span>{project.year}</span>
                  </div>
                )}

                {/* Role Badge */}
                {project.role && (
                  <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#112240] border border-[#233554] rounded-lg text-xs text-textDark'>
                    <FiUser className='text-textGreen' />
                    <span>{getRoleLabel()}</span>
                  </div>
                )}

                {/* Category Badge */}
                {project.category && (
                  <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#112240] border border-[#233554] rounded-lg text-xs text-textDark'>
                    <FiFolder className='text-textGreen' />
                    <span>{getCategoryLabel()}</span>
                  </div>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className='text-4xl md:text-5xl lg:text-6xl font-bold font-titleFont mb-6 text-textLight'
              >
                {project.title}
              </motion.h1>

              {/* Description */}
              <motion.p variants={fadeInUp} className='text-lg text-textDark mb-8 max-w-3xl leading-relaxed'>
                {project.shortDescription}
              </motion.p>

              {/* Project Links */}
              <motion.div variants={fadeInUp} className='flex flex-wrap gap-4'>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-2 px-6 py-3 border-2 border-textGreen text-textGreen rounded-lg hover:bg-textGreen/10 transition-all duration-300 shadow-md hover:shadow-textGreen/20 font-medium'
                  >
                    <RxOpenInNewWindow className='group-hover:scale-110 transition-transform duration-300' />
                    <span>View Live Demo</span>
                  </a>
                )}
                {project.sourceCodeUrl && (
                  <a
                    href={project.sourceCodeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-2 px-6 py-3 bg-[#112240] border-2 border-[#233554] text-textLight rounded-lg hover:border-textGreen hover:bg-textGreen/10 transition-all duration-300 font-medium'
                  >
                    <TbBrandGithub className='group-hover:scale-110 transition-transform duration-300' />
                    <span>View Source Code</span>
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mb-16'
          >
            <div 
              className='relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-[#233554] shadow-lg shadow-[#0a192f]/50 group cursor-pointer'
              onClick={() => openLightbox(0)}
            >
              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-textGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
              
              {/* Zoom Icon */}
              <div className='absolute top-4 right-4 z-20 p-2 bg-[#0a192f]/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <FiMaximize2 className='text-textGreen text-xl' />
              </div>

              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className='object-cover group-hover:scale-105 transition-transform duration-500' 
              />
            </div>
          </motion.div>

          {/* Project Gallery Section */}
          {project.images?.gallery && project.images.gallery.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='mb-16'
            >
              <div className='flex items-center gap-3 mb-8'>
                <span className='h-px w-12 bg-textGreen/50' />
                <h2 className='text-2xl font-titleFont font-semibold text-textGreen'>Project Gallery</h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {project.images.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    className='relative h-64 rounded-lg overflow-hidden border border-[#233554] shadow-lg shadow-[#0a192f]/50 group cursor-pointer'
                    onClick={() => openLightbox(idx + 1)}
                  >
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-br from-textGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
                    
                    {/* Zoom Icon */}
                    <div className='absolute top-4 right-4 z-20 p-2 bg-[#0a192f]/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <FiMaximize2 className='text-textGreen' />
                    </div>

                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Mobile View Section */}
          {project.images?.mobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='mb-16'
            >
              <div className='flex items-center gap-3 mb-8'>
                <span className='h-px w-12 bg-textGreen/50' />
                <h2 className='text-2xl font-titleFont font-semibold text-textGreen'>Mobile Experience</h2>
              </div>

              <div className='flex justify-center'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className='relative w-full max-w-md h-[32rem] rounded-lg overflow-hidden border border-[#233554] shadow-lg shadow-[#0a192f]/50 group cursor-pointer'
                  onClick={() => openLightbox(allImages.indexOf(project.images!.mobile!))}
                >
                  {/* Gradient Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-br from-textGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
                  
                  {/* Zoom Icon */}
                  <div className='absolute top-4 right-4 z-20 p-2 bg-[#0a192f]/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <FiMaximize2 className='text-textGreen' />
                  </div>

                  <Image
                    src={project.images.mobile}
                    alt={`${project.title} mobile view`}
                    fill
                    className='object-contain group-hover:scale-105 transition-transform duration-500'
                  />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Video Demo Section */}
          {project.video && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='mb-16'
            >
              <div className='flex items-center gap-3 mb-8'>
                <span className='h-px w-12 bg-textGreen/50' />
                <h2 className='text-2xl font-titleFont font-semibold text-textGreen'>Video Walkthrough</h2>
              </div>

              <div className='bg-[#112240] border border-[#233554] rounded-lg p-6'>
                <div className='aspect-video w-full rounded-lg overflow-hidden bg-[#0a192f] border border-[#233554]'>
                  <iframe
                    src={project.video.loomUrl}
                    frameBorder='0'
                    allowFullScreen
                    className='w-full h-full'
                    title={`${project.title} demo video`}
                  />
                </div>
                {project.video.duration && (
                  <p className='text-textDark text-sm mt-4 flex items-center gap-2'>
                    <FiCalendar className='text-textGreen' />
                    Duration: {project.video.duration}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* Content Grid */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className='grid grid-cols-1 lg:grid-cols-3 gap-12'
          >
            {/* Main Content */}
            <div className='lg:col-span-2 space-y-12'>
              {/* About the Project */}
              <motion.section variants={fadeInUp}>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='h-px w-12 bg-textGreen/50' />
                  <h2 className='text-2xl font-titleFont font-semibold text-textGreen'>About the Project</h2>
                </div>
                <div className='bg-[#112240] border border-[#233554] p-6 rounded-lg'>
                  <p className='text-textDark leading-relaxed'>{project.longDescription}</p>
                </div>
              </motion.section>

              {/* Problem Statement */}
              <motion.section variants={fadeInUp}>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='h-px w-12 bg-textGreen/50' />
                  <h2 className='text-2xl font-titleFont font-semibold text-textGreen'>Problem Statement</h2>
                </div>
                <div className='bg-[#112240] border border-[#233554] p-6 rounded-lg border-l-4 border-l-red-500/30'>
                  <p className='text-textDark leading-relaxed'>{project.problemStatement}</p>
                </div>
              </motion.section>

              {/* My Solution */}
              <motion.section variants={fadeInUp}>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='h-px w-12 bg-textGreen/50' />
                  <h2 className='text-2xl font-titleFont font-semibold text-textGreen'>My Solution</h2>
                </div>
                <div className='bg-[#112240] border border-[#233554] p-6 rounded-lg border-l-4 border-l-textGreen/50'>
                  <p className='text-textDark leading-relaxed'>{project.solution}</p>
                </div>
              </motion.section>

              {/* Challenges & Learnings */}
              <motion.section variants={fadeInUp}>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='h-px w-12 bg-textGreen/50' />
                  <h2 className='text-2xl font-titleFont font-semibold text-textGreen'>Challenges & Learnings</h2>
                </div>
                <div className='space-y-6'>
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className='bg-[#112240] border border-[#233554] p-6 rounded-lg hover:border-textGreen/30 hover:shadow-md hover:shadow-textGreen/5 transition-all duration-300 group'
                    >
                      <h3 className='text-lg font-medium mb-3 text-textLight group-hover:text-textGreen transition-colors duration-300'>
                        {challenge.challenge}
                      </h3>
                      <p className='text-textDark leading-relaxed'>{challenge.solution}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className='space-y-8'>
              {/* Technology Stack */}
              <motion.section variants={fadeInUp}>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='h-px w-8 bg-textGreen/50' />
                  <h2 className='text-xl font-titleFont font-semibold text-textGreen'>Technology Stack</h2>
                </div>
                <div className='space-y-4'>
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className='bg-[#112240] border border-[#233554] p-4 rounded-lg hover:border-textGreen/30 transition-all duration-300 group'
                    >
                      <div className='flex items-center gap-2 mb-2'>
                        <span className='text-textGreen text-lg'>{getTechIcon(tech.name)}</span>
                        <h3 className='text-lg font-medium text-textLight group-hover:text-textGreen transition-colors duration-300'>
                          {tech.name}
                        </h3>
                      </div>
                      <p className='text-sm text-textDark leading-relaxed'>{tech.rationale}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Tags */}
              <motion.section variants={fadeInUp}>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='h-px w-8 bg-textGreen/50' />
                  <h2 className='text-xl font-titleFont font-semibold text-textGreen'>Technologies Used</h2>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className='flex items-center gap-1.5 px-3 py-1.5 bg-[#0a192f] text-textGreen border border-textGreen/20 text-sm rounded-md hover:border-textGreen/50 hover:bg-[#112240] transition-all duration-300'
                    >
                      <span className='text-xs'>{getTechIcon(tag)}</span>
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.section>
            </div>
          </motion.div>

          {/* Project Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mt-20 pt-12 border-t border-[#233554]'
          >
            <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
              {/* Previous Project */}
              {projects[projects.findIndex((p) => p.id === project.id) - 1] && (
                <Link
                  href={`/projects/${projects[projects.findIndex((p) => p.id === project.id) - 1].slug}`}
                  className='group flex items-center gap-3 px-6 py-4 bg-[#112240] border border-[#233554] rounded-lg hover:border-textGreen/50 transition-all duration-300 w-full sm:w-auto'
                >
                  <FiArrowLeft className='text-textGreen group-hover:-translate-x-1 transition-transform duration-300' />
                  <div>
                    <p className='text-xs text-textDark uppercase tracking-wide mb-1'>Previous Project</p>
                    <p className='text-textLight font-medium group-hover:text-textGreen transition-colors duration-300'>
                      {projects[projects.findIndex((p) => p.id === project.id) - 1].title}
                    </p>
                  </div>
                </Link>
              )}

              {/* Back to Projects */}
              <Link
                href='/#project'
                className='flex items-center gap-2 px-6 py-3 border-2 border-textGreen text-textGreen rounded-lg hover:bg-textGreen/10 transition-all duration-300 font-medium'
              >
                <span>All Projects</span>
              </Link>

              {/* Next Project */}
              {projects[projects.findIndex((p) => p.id === project.id) + 1] && (
                <Link
                  href={`/projects/${projects[projects.findIndex((p) => p.id === project.id) + 1].slug}`}
                  className='group flex items-center gap-3 px-6 py-4 bg-[#112240] border border-[#233554] rounded-lg hover:border-textGreen/50 transition-all duration-300 w-full sm:w-auto'
                >
                  <div className='text-right'>
                    <p className='text-xs text-textDark uppercase tracking-wide mb-1'>Next Project</p>
                    <p className='text-textLight font-medium group-hover:text-textGreen transition-colors duration-300'>
                      {projects[projects.findIndex((p) => p.id === project.id) + 1].title}
                    </p>
                  </div>
                  <FiArrowLeft className='text-textGreen rotate-180 group-hover:translate-x-1 transition-transform duration-300' />
                </Link>
              )}
            </div>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm'
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className='absolute top-4 right-4 z-50 p-3 bg-[#112240] border border-[#233554] rounded-lg text-textLight hover:text-textGreen hover:border-textGreen transition-all duration-300'
                aria-label='Close lightbox'
              >
                <FiX className='text-2xl' />
              </button>

              {/* Image Counter */}
              <div className='absolute top-4 left-4 z-50 px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-textLight'>
                <span className='text-sm font-medium'>
                  {lightboxIndex + 1} / {allImages.length}
                </span>
              </div>

              {/* Previous Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className='absolute left-4 z-50 p-3 bg-[#112240] border border-[#233554] rounded-lg text-textLight hover:text-textGreen hover:border-textGreen transition-all duration-300'
                  aria-label='Previous image'
                >
                  <FiChevronLeft className='text-2xl' />
                </button>
              )}

              {/* Next Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className='absolute right-4 z-50 p-3 bg-[#112240] border border-[#233554] rounded-lg text-textLight hover:text-textGreen hover:border-textGreen transition-all duration-300'
                  aria-label='Next image'
                >
                  <FiChevronRight className='text-2xl' />
                </button>
              )}

              {/* Image Container */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='relative max-w-7xl max-h-[90vh] w-full h-full mx-4'
                onClick={(e) => e.stopPropagation()}
              >
                <div className='relative w-full h-full'>
                  <Image
                    src={allImages[lightboxIndex]}
                    alt={`${project.title} - Image ${lightboxIndex + 1}`}
                    fill
                    className='object-contain'
                    quality={100}
                    priority
                  />
                </div>
              </motion.div>

              {/* Keyboard hint */}
              <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-[#112240]/80 border border-[#233554] rounded-lg text-textDark text-xs'>
                Use arrow keys to navigate • ESC to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage; 