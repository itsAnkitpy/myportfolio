import {motion} from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti';

const ReactBD = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration:0.1 }}
        className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Junior Developer <span className='text-textGreen tracking-wide'>@Himtech</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            Jan 2020 - Feb-2021
        </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Contributed to the development of a freelance marketplace platform specializing in services such as gardening, plumbing, and other home services.
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Engineered a robust backend system with Django and Python to build robust backend system, ensuring seamless integration and functionality.

            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Developed the front-end using HTML, CSS, JavaScript, and SCSS, creating a responsive and user-friendly interface.
            </li>
        </ul>
    </motion.div>
  )
}

export default ReactBD