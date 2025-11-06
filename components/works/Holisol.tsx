import {motion} from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti';

const Holisol = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration:0.1 }}
        className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Software Engineer <span className='text-textGreen tracking-wide'>@Holisol Logistics</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            Oct 2024 - Present
        </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Developing and maintaining tech-enabled end-to-end supply chain logistics solutions, contributing to the company&apos;s digital transformation initiatives.
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Building scalable web applications and APIs to optimize logistics operations, warehouse management, and supply chain visibility.
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Collaborating with cross-functional teams to design and implement features that enhance operational efficiency and improve customer experience.
            </li>
        </ul>
    </motion.div>
  )
}

export default Holisol

