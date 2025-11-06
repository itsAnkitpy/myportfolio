import { projects } from "../lib/data";
import SectionTitle from "./SectionTitle"
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
    return (
        <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title="Some things I have built" titleNo="03" />

            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                {projects.map((project, index) => (
                    <div key={project.id} className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} gap-6`}>
                            <div className="w-full xl:w-1/2 h-auto relative group">
                                <Link href={`/projects/${project.slug}`}>
                                    <Image 
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                    />
                                </Link>
                            </div>

                            <div className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between ${index % 2 === 0 ? 'items-end text-right xl:-ml-16' : 'items-start text-left xl:-mr-16'} z-10`}>
                                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                    Featured Project
                                </p>
                                <Link href={`/projects/${project.slug}`}>
                                    <h3 className="text-2xl font-bold hover:text-textGreen transition-colors duration-300 cursor-pointer">
                                        {project.title}
                                    </h3>
                                </Link>
                                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                    {project.shortDescription}
                                </p>

                                <ul className={`text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 ${index % 2 === 0 ? 'justify-between' : 'justify-start'} text-textDark`}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <li key={tagIndex}>{tag}</li>
                                    ))}
                                </ul>

                                <div className="text-2xl flex gap-4">
                                    {project.sourceCodeUrl && (
                                        <a 
                                            className="hover:text-textGreen duration-300"
                                            href={project.sourceCodeUrl} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <TbBrandGithub />
                                        </a>
                                    )}

                                    {project.liveDemoUrl && (
                                        <a 
                                            className="hover:text-textGreen duration-300"
                                            href={project.liveDemoUrl} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <RxOpenInNewWindow />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects