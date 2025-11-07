import React, { useState, useMemo } from 'react';
import ArchiveCard from './ArchiveCard';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveProjects } from '../lib/data';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

type CategoryFilter = 'all' | 'full-stack' | 'frontend' | 'backend' | 'learning';

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: archiveProjects.length },
    {
      id: 'full-stack',
      label: 'Full-Stack',
      count: archiveProjects.filter((p) => p.category === 'full-stack').length
    },
    {
      id: 'frontend',
      label: 'Frontend',
      count: archiveProjects.filter((p) => p.category === 'frontend').length
    },
    {
      id: 'backend',
      label: 'Backend',
      count: archiveProjects.filter((p) => p.category === 'backend').length
    },
    {
      id: 'learning',
      label: 'Learning',
      count: archiveProjects.filter((p) => p.category === 'learning').length
    }
  ];

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return archiveProjects;
    return archiveProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  // Show first 6 projects initially, then all when showMore is true
  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    setShowMore(false); // Reset to showing only 6 when changing categories
  };

  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      {/* Header */}
      <div className='w-full flex flex-col items-center gap-3'>
        <h2 className='text-3xl md:text-4xl font-titleFont font-bold text-textLight'>
          More Projects
        </h2>
        <p className='text-sm font-titleFont text-textGreen tracking-wide'>
          Explore additional work and experiments
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className='flex flex-wrap items-center justify-center gap-3 mt-10 mb-8'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id as CategoryFilter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-textGreen/10 text-textGreen border-2 border-textGreen shadow-md shadow-textGreen/10'
                : 'bg-[#112240] text-textDark border-2 border-[#233554] hover:border-textGreen/50 hover:text-textLight'
            }`}
          >
            {category.label}
            <span className='ml-2 text-xs opacity-70'>({category.count})</span>
          </button>
        ))}
      </div>

      {/* Projects Grid with AnimatePresence */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lgl:px-10'
        >
          {visibleProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ArchiveCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className='flex flex-col items-center justify-center py-20 text-center'>
          <p className='text-textDark text-lg'>No projects found in this category yet.</p>
        </div>
      )}

      {/* Show More/Less Button */}
      {filteredProjects.length > 6 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='mt-12 flex items-center justify-center'
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className='group flex items-center gap-2 px-6 py-3 rounded-lg text-textGreen text-sm font-medium border-2 border-textGreen hover:bg-textGreen/10 transition-all duration-300 shadow-md hover:shadow-textGreen/20'
          >
            <span>
              {showMore
                ? 'Show Less'
                : `Show ${filteredProjects.length - 6} More ${
                    filteredProjects.length - 6 === 1 ? 'Project' : 'Projects'
                  }`}
            </span>
            {showMore ? (
              <HiChevronUp className='text-lg group-hover:-translate-y-1 transition-transform duration-300' />
            ) : (
              <HiChevronDown className='text-lg group-hover:translate-y-1 transition-transform duration-300' />
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Archive;