import {motion} from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti';

const Freelancer = () => {
    return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration:0.1 }}
          className='w-full'>
          <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
              Web Developer <span className='text-textGreen tracking-wide'>@Freelancer</span>
          </h3>
          <p className='text-sm mt-1 font-medium text-textDark'>
              Feb 2021 - Present
          </p>
          <ul className='mt-6 flex flex-col gap-3'>
              <li className='text-base flex gap-2 text-textDark'>
                  <span className='text-textGreen mt-1'><TiArrowForward/></span>
                  Cinesamugam - Developed a comprehensive Project Management System using PHP and Laravel, resulting in a 20%
                   productivity increase. A real-time collaborative dashboard streamlined task distribution for 60+ employees,
                     reducing project delays by 30%. The integrated time-tracking feature improved scheduling efficiency by 
                     25% across 20+ projects through data-driven decision-making.
              </li>
  
              <li className='text-base flex gap-2 text-textDark'>
                  <span className='text-textGreen mt-1'><TiArrowForward/></span>
                  InfraUp - Designed and developed a responsive landing page for a construction firm, tailored to the client's specific needs and brand identity.Ensured a seamless user experience across all devices by implementing responsive design principles, optimizing the layout and content for both desktop and mobile users.Designed and developed a responsive landing page for a construction firm, tailored to the client's specific needs and brand identity increasing client engagement by 15%.
              </li>
  
              <li className='text-base flex gap-2 text-textDark'>
                  <span className='text-textGreen mt-1'><TiArrowForward/></span>
                  Atithi Tour & Travel - Designed a tourism website for a client. The website was designed with a user-friendly interface, showcasing various travel packages, destinations, and special offers. 
              </li>
          </ul>
      </motion.div>
    )
  }
  
  export default Freelancer