import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';

const Banner = () => {
    // Typewriter effect for the name
    const { displayText, cursor } = useTypewriter({
        text: 'Ankit Sharma.',
        speed: 100, // Typing speed in milliseconds
        delay: 800, // Start after the greeting animation
        showCursor: true,
        cursorChar: '|',
    });

    return (
        <section
            id='home'
            className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
        >
            {/* Availability Badge */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex items-center gap-2'
            >
                <span className='relative flex h-3 w-3'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-textGreen opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-3 w-3 bg-textGreen'></span>
                </span>
                <span className='text-sm text-textGreen font-medium'>Available for projects</span>
            </motion.div>

            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='text-lg font-titleFont tracking-wide text-textGreen'>
                Hi | नमस्कार , my name is
            </motion.h3>

            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-4xl lgl:text-6xl font-titleFont font-extrabold flex flex-col'
            >
                <span className='inline-block'>
                    {displayText}
                    {cursor && (
                        <span className='text-textGreen cursor-blink'>{cursor}</span>
                    )}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    className='text-textDark mt-2 lgl:mt-4'>
                    Full-Stack Developer specializing in Multi-Tenant SaaS | Laravel & Next.js
                </motion.span>
            </motion.h1>

            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-base md:max-w-[650px] text-textDark font-medium">
                I build multi-tenant SaaS platforms and enterprise applications. Currently focused on{' '}
                <span className='text-textLight'>Laravel</span> and{' '}
                <span className='text-textLight'>Next.js</span> ecosystems, delivering production-ready
                systems from concept to deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className='flex flex-wrap gap-4 mt-2'
            >
                <a href='#project'>
                    <button className='w-44 h-12 text-sm font-titleFont bg-textGreen text-bodyColor rounded-md
                        tracking-wide hover:bg-textGreen/90 duration-300 font-semibold'>
                        View My Work
                    </button>
                </a>
                <a href='#contact'>
                    <button className='w-44 h-12 text-sm font-titleFont border border-textGreen rounded-md text-textGreen
                        tracking-wide hover:bg-hoverColor duration-300'>
                        Get in Touch
                    </button>
                </a>
            </motion.div>

        </section >
    );

}

export default Banner;