import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from 'framer-motion';
import { archiveProjects } from '../lib/data';

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
    
    // Show first 6 projects initially, then all when showMore is true
    const visibleProjects = showMore ? archiveProjects : archiveProjects.slice(0, 6);
    
    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
                <p className='text-sm font-titleFont text-textGreen'>View the archive</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                {visibleProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ArchiveCard project={project} />
                    </motion.div>
                ))}
            </div>

            <div className='mt-12 flex items-center justify-center'>
                <button
                    onClick={() => setShowMore(!showMore)}
                    className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
                >
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </div>
    )
}

export default Archive