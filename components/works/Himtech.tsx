import { TiArrowForward } from 'react-icons/ti';

const bullets = [
  'Contributed to the development of a freelance marketplace platform specializing in services such as gardening, plumbing, and other home services.',
  'Engineered a robust backend system with Django and Python, ensuring seamless integration and functionality.',
  'Developed the front-end using HTML, CSS, JavaScript, and SCSS, creating a responsive and user-friendly interface.'
];

const Himtech = () => {
  return (
    <ul className='flex flex-col gap-4'>
      {bullets.map((bullet) => (
        <li key={bullet} className='text-base flex gap-3 text-textDark leading-relaxed'>
          <span className='text-accent mt-1 flex-shrink-0'>
            <TiArrowForward />
          </span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
};

export default Himtech;
