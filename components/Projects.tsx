import { cineImg, gitcommitImg, ecommImg } from "@/public/assets";
import SectionTitle from "./SectionTitle"
import Image from 'next/image';
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";

const Projects = () => {
    return (
        <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title="Some things I have built" titleNo="03" />

            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                {/* Project One */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a className="w-full xl:w-1/2 h-auto relative group"
                            href="https://vms.tech.rangrik.com/home" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain"
                                    src={cineImg}
                                    alt="cine" />
                            </div>
                        </a>

                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">Project/Employee Management System</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                A Management System which can be used for tracking growth of projects, the tasks related to them,
                                and the team members involved in relation to a particular department. Along with project management it
                                also offers services of employee management including services like leave management and shift scheduling.
                            </p>

                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between
                        text-textDark">
                                <li>Laravel</li>
                                <li>Php</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                            </ul>

                            <div className="text-2xl flex gap-4">
                                <a className="hover:text-textGreen duration-300"
                                    href="https://vms.tech.rangrik.com/home" target="_blank">
                                    <TbBrandGithub />
                                </a>

                                <a className="hover:text-textGreen duration-300"
                                    href="https://vms.tech.rangrik.com/home" target="_blank">
                                    <AiOutlineYoutube />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Project Two */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <a className="w-full xl:w-1/2 h-auto relative group"
                            href="https://github.com/itsAnkitpy/git_commit" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain"
                                    src={gitcommitImg}
                                    alt="cine" />
                            </div>
                        </a>

                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">Git Commit</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                                An experimental and fun dating application project I made just for programmers which works just like
                                any other dating app. It has the basics of right and left swiping along with the message functionlity
                                once you find the right match. Enjoy!!
                            </p>

                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between
                        text-textDark">
                                <li>Django</li>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                            </ul>

                            <div className="text-2xl flex gap-4">
                                <a className="hover:text-textGreen duration-300"
                                    href="https://github.com/itsAnkitpy/git_commit" target="_blank">
                                    <TbBrandGithub />
                                </a>

                                <a className="hover:text-textGreen duration-300"
                                    href="https://github.com/itsAnkitpy/git_commit" target="_blank">
                                    <AiOutlineYoutube />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Project Three */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a className="w-full xl:w-1/2 h-auto relative group"
                            href="https://github.com/itsAnkitpy/Bisum" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain"
                                    src={ecommImg}
                                    alt="cine" />
                            </div>
                        </a>

                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">Ecommerce Website</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                A very basic setup of an ecommerce website to buy products with add to cart and
                                payment functionality. 
                            </p>

                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between
                        text-textDark">
                                <li>Django</li>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                            </ul>

                            <div className="text-2xl flex gap-4">
                                <a className="hover:text-textGreen duration-300"
                                    href="https://github.com/itsAnkitpy/Bisum" target="_blank">
                                    <TbBrandGithub />
                                </a>

                                <a className="hover:text-textGreen duration-300"
                                    href="https://github.com/itsAnkitpy/Bisum" target="_blank">
                                    <AiOutlineYoutube />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Projects