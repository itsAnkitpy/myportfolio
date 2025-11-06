import { GetStaticPaths, GetStaticProps } from 'next';
import { projects, Project } from '../../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import Head from 'next/head';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <>
      <Head>
        <title>{project.title} - Ankit Sharma</title>
        <meta name="description" content={project.shortDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight">
        <div className="max-w-contentContainer mx-auto px-4 py-24">
          
          {/* Back Button */}
          <Link href="/#project">
            <div className="flex items-center gap-2 text-textGreen hover:text-textLight cursor-pointer mb-8 transition-colors duration-300">
              <FiArrowLeft />
              <span className="text-sm">Back to Projects</span>
            </div>
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-titleFont mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-textDark mb-8 max-w-3xl">
              {project.shortDescription}
            </p>
            
            {/* Project Links */}
            <div className="flex gap-4 mb-8">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-textGreen text-textGreen rounded-md hover:bg-textGreen hover:text-bodyColor transition-colors duration-300"
                >
                  <RxOpenInNewWindow />
                  Live Demo
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-textGreen text-textGreen rounded-md hover:bg-textGreen hover:text-bodyColor transition-colors duration-300"
                >
                  <TbBrandGithub />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About the Project */}
              <section>
                <h2 className="text-2xl font-titleFont font-semibold mb-6 text-textGreen">
                  About the Project
                </h2>
                <p className="text-textDark leading-relaxed">
                  {project.longDescription}
                </p>
              </section>

              {/* Problem Statement */}
              <section>
                <h2 className="text-2xl font-titleFont font-semibold mb-6 text-textGreen">
                  Problem Statement
                </h2>
                <p className="text-textDark leading-relaxed">
                  {project.problemStatement}
                </p>
              </section>

              {/* My Solution */}
              <section>
                <h2 className="text-2xl font-titleFont font-semibold mb-6 text-textGreen">
                  My Solution
                </h2>
                <p className="text-textDark leading-relaxed">
                  {project.solution}
                </p>
              </section>

              {/* Challenges & Learnings */}
              <section>
                <h2 className="text-2xl font-titleFont font-semibold mb-6 text-textGreen">
                  Challenges & Learnings
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-[#112240] p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-3 text-textLight">
                        {challenge.challenge}
                      </h3>
                      <p className="text-textDark leading-relaxed">
                        {challenge.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Technology Stack */}
              <section>
                <h2 className="text-2xl font-titleFont font-semibold mb-6 text-textGreen">
                  Technology Stack
                </h2>
                <div className="space-y-4">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="bg-[#112240] p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2 text-textLight">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-textDark leading-relaxed">
                        {tech.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <section>
                <h2 className="text-2xl font-titleFont font-semibold mb-6 text-textGreen">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#112240] text-textGreen text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage; 