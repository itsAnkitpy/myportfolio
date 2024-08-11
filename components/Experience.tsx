import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import Himtech from './works/Himtech';
// import Google from './works/Google';
// import Microsoft from './works/Microsoft';
// import Meta from './works/Meta';
import Freelancer from './works/Freelancer';

const Experience = () => {
    const [workHimtech, setWorkHimtech] = useState(true);
    // const [workGoogle, setWorkGoogle] = useState(false);
    // const [workMicrosoft, setWorkMicrosoft] = useState(false);
    // const [workMeta, setWorkMeta] = useState(false);
    const [workFreelancer, setWorkFreelancer] = useState(false);

    const handleHimtech = () => {
        setWorkHimtech(true);
        // setWorkGoogle(false);
        // setWorkMicrosoft(false);
        // setWorkMeta(false);
        setWorkFreelancer(false);
    };

    // const handleGoogle = () => {
    //     setWorkHimtech(false);
    //     setWorkGoogle(true);
    //     setWorkMicrosoft(false);
    //     setWorkMeta(false);
    //     setWorkFreelancer(false);
    // };

    // const handleMicrosoft = () => {
    //     setWorkHimtech(false);
    //     // setWorkGoogle(false);
    //     // setWorkMicrosoft(true);
    //     // setWorkMeta(false);
    //      setWorkFreelancer(false);
    // };

    // const handleMeta = () => {
    //     setWorkHimtech(false);
    //     // setWorkGoogle(false);
    //     // setWorkMicrosoft(false);
    //     // setWorkMeta(true);
    //      setWorkFreelancer(false);
    // };

    const handleFreelancer = () => {
        setWorkHimtech(false);
        // setWorkGoogle(false);
        // setWorkMicrosoft(false);
        // setWorkMeta(false);
        setWorkFreelancer(true);
    };

    
  return (
    <section 
        id='experience'
        className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
        <SectionTitle title="Where I have Worked"  titleNo="02"/>

        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>

                <li 
                onClick={handleHimtech}
                className={`${
                    workHimtech
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    Himtech
                </li>

                {/* <li 
                onClick={handleGoogle}
                className={`${
                    workGoogle
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    Google
                </li> */}

                {/* <li 
                onClick={handleMicrosoft}
                className={`${
                    workMicrosoft
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    Microsoft
                </li> */}

                {/* <li 
                onClick={handleMeta}
                className={`${
                    workMeta
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    Meta
                </li> */}

                <li 
                onClick={handleFreelancer}
                className={`${
                    workFreelancer
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    Freelancer
                </li>
            </ul>

            {workHimtech && <Himtech />}
            {/* {workGoogle && <Google />}
            {workMicrosoft && <Microsoft />}
            {workMeta && <Meta />} */}
            {workFreelancer && <Freelancer />}
        </div>
    </section>
  )
}

export default Experience