import { FaRegFolder } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { TbBrandGithub } from 'react-icons/tb';
import { FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import { Project } from '../lib/data';

interface Props {
  project: Project;
}

const ArchiveCard = ({ project }: Props) => {
  // Helper function to get tech icon
  const getTechIcon = (tag: string) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('react') || tagLower.includes('vue') || tagLower.includes('next')) {
      return <FiCode />;
    }
    if (
      tagLower.includes('node') ||
      tagLower.includes('django') ||
      tagLower.includes('laravel') ||
      tagLower.includes('express')
    ) {
      return <FiServer />;
    }
    if (tagLower.includes('mongo') || tagLower.includes('sql') || tagLower.includes('postgres')) {
      return <FiDatabase />;
    }
    return <FiCode />;
  };

  // Get status badge styling
  const getStatusBadge = () => {
    if (project.liveDemoUrl) {
      return (
        <span className='px-2 py-1 text-xs font-semibold bg-textGreen text-[#0a192f] rounded-full'>
          Live
        </span>
      );
    }
    if (project.status === 'open-source') {
      return (
        <span className='px-2 py-1 text-xs font-semibold bg-[#112240] text-textGreen border border-textGreen/30 rounded-full'>
          Open Source
        </span>
      );
    }
    return null;
  };

  // Get role badge
  const getRoleBadge = () => {
    if (!project.role) return null;
    const roleColors = {
      solo: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      team: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      freelance: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
    };
    const roleLabels = {
      solo: 'Solo',
      team: 'Team',
      freelance: 'Freelance'
    };
    return (
      <span
        className={`px-2 py-1 text-xs font-medium ${roleColors[project.role]} border rounded-md`}
      >
        {roleLabels[project.role]}
      </span>
    );
  };

  return (
    <div
      className='w-full h-auto min-h-[320px] rounded-lg bg-[#112240] border border-[#233554] p-6 flex flex-col gap-5
            hover:-translate-y-2 hover:shadow-lg hover:shadow-textGreen/10 hover:border-textGreen/30 transition-all duration-300 group'
    >
      {/* Header with icon and links */}
      <div className='flex justify-between items-start'>
        <FaRegFolder className='text-4xl text-textGreen group-hover:scale-110 transition-transform duration-300' />
        <div className='flex gap-3 text-xl'>
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-textDark hover:text-textGreen hover:scale-110 transition-all duration-300'
              onClick={(e) => e.stopPropagation()}
              aria-label='View Source Code'
            >
              <TbBrandGithub />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-textDark hover:text-textGreen hover:scale-110 transition-all duration-300'
              onClick={(e) => e.stopPropagation()}
              aria-label='View Live Demo'
            >
              <RxOpenInNewWindow />
            </a>
          )}
        </div>
      </div>

      {/* Status and Role Badges */}
      <div className='flex items-center gap-2 flex-wrap'>
        {getStatusBadge()}
        {getRoleBadge()}
        {project.year && (
          <span className='px-2 py-1 text-xs text-textDark border border-[#233554] rounded-md'>
            {project.year}
          </span>
        )}
      </div>

      {/* Title and Description */}
      <div className='flex-grow'>
        <h2 className='text-xl font-titleFont font-semibold tracking-wide text-textLight group-hover:text-textGreen transition-colors duration-300 mb-3'>
          {project.title}
        </h2>
        <p className='text-sm text-textDark leading-relaxed line-clamp-3'>
          {project.shortDescription}
        </p>
      </div>

      {/* Tech Stack Tags */}
      <div className='flex flex-wrap gap-2 pt-2 border-t border-[#233554]'>
        {project.tags.slice(0, 4).map((tag, i) => (
          <span
            key={i}
            className='flex items-center gap-1 text-xs text-textDark font-medium'
          >
            <span className='text-textGreen'>{getTechIcon(tag)}</span>
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className='text-xs text-textDark'>+{project.tags.length - 4}</span>
        )}
      </div>
    </div>
  );
};

export default ArchiveCard;