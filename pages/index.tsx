import Navbar from '@/components/Navbar';
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Archive from '@/components/Archive';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Head from 'next/head';
import {motion} from "framer-motion";
import { SITE_URL } from '@/lib/site';

const pageTitle = 'Ankit Sharma — Full-Stack Developer';
const pageDescription =
  'Full-stack developer building multi-tenant SaaS platforms and enterprise applications with Laravel and Next.js — production systems from concept to deployment.';

// Machine-readable identity block. Invisible to visitors; lets search engines
// show name, role and links properly when someone searches for Ankit by name.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ankit Sharma',
  url: SITE_URL,
  jobTitle: 'Full-Stack Developer',
  description: pageDescription,
  worksFor: {
    '@type': 'Organization',
    name: 'SummerHill Technologies',
  },
  sameAs: [
    'https://github.com/itsAnkitpy',
    'https://www.linkedin.com/in/its-ankit-sharma/',
    'https://x.com/hi_itsAnkit',
  ],
  knowsAbout: [
    'Laravel',
    'Next.js',
    'TypeScript',
    'PHP',
    'React',
    'PostgreSQL',
    'MySQL',
    'Multi-tenant SaaS architecture',
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={pageDescription} />
        <link rel='canonical' href={SITE_URL} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={SITE_URL} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:image' content={`${SITE_URL}/og-image.png`} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:image' content={`${SITE_URL}/og-image.png`} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll
      scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60'>
        <Navbar/>

        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>

          <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5}}
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide/>
          </motion.div>

          <div className='h-[88vh] w-full mx-auto p-4'>
            <Banner/>
            <About/>
            <Experience/>
            <Projects/>
            <Archive/>
            <Contact/>
            <Footer/>
          </div>

          <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5}}
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <RightSide/>
          </motion.div>

        </div>
      </main>
    </>
  )
}
