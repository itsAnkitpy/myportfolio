import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import { Project } from "../lib/data";
import { useRouter } from 'next/router';

interface Props {
    project: Project;
}

const ArchiveCard = ({ project }: Props) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/projects/${project.slug}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col gap-6
            hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
        >
            <div className="flex justify-between items-center">
                <FaRegFolder className="text-4xl text-textGreen" />
                <div className="flex gap-2">
                    {project.sourceCodeUrl && (
                        <a 
                            href={project.sourceCodeUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-textGreen transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <TbBrandGithub />
                        </a>
                    )}
                    {project.liveDemoUrl && (
                        <a 
                            href={project.liveDemoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-textGreen transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <RxOpenInNewWindow />
                        </a>
                    )}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
                    {project.title}
                </h2>
                <p className="text-sm mt-3">
                    {project.shortDescription}
                </p>
            </div>

            <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
                {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArchiveCard