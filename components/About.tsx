import {profileImg} from '@/public/assets';   
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
        id='about'
        className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me" titleNo="01"/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                    Hello! My name is Ankit Sharma and I enjoy creating things that live on the internet. My interest
                    in web development started back in 2020 when I decided to try editing some themes for local businesses.
                    Turns out hacking together a website with your own touch taught me a lot about all things on internet
                    including HTML and CSS!
                </p>
                <p>
                    Fast-forward to today, and I have had the oppurtunity of working on various freelancing projects and if 
                    I am not there I take interest in creating and working on some personal small projects which again has 
                    <span className='text-textGreen'> solidified my approach of creating and building things</span>.
                </p>

                <p>
                    Here are a few technologies I have been working with recently:
                </p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>JavaScript (ES6+)
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>Next.js
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>React
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>Node.js
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>TypeScript
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>Express.js
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>MongoDB
                    </li>

                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>Tailwind CSS
                    </li>

                </ul>
            </div>
            {/* Image */}
            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                        <Image className='rounded-lg h-full object-cover'
                        src={profileImg}
                        alt="profileImg"/>

                        <div className='hidden lgl:inline-block absolute w-full h-80 bt-textGreen/20 rounded-md left-0
                        group-hover:bg-transparent duration-300'>
                        </div>
                    </div>
                </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2
                group-hover:-translate-y-2 transition-transform duration-300'></div>
            </div>
        </div>
    </section> 
  );
};

export default About;