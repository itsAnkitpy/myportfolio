import { FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import {
  SiAlpinedotjs, SiAmazonaws, SiBootstrap, SiCss3, SiDjango, SiDocker, SiExpo, SiGithub, SiHtml5,
  SiJavascript, SiJquery, SiLaravel, SiLivewire, SiMicrosoftsqlserver, SiMui, SiMysql, SiNestjs,
  SiNextdotjs, SiPhp, SiPlaywright, SiPostgresql, SiPrisma, SiPython, SiReact, SiRedis, SiStripe,
  SiTailwindcss, SiTwilio, SiTypescript, SiVercel, SiVite, SiWebrtc
} from 'react-icons/si';

// First match wins, so a longer name sits above any shorter name it contains.
// Logos take the surrounding text colour, so they stay in the site's accent.
const logos: [string, IconType][] = [
  ['next', SiNextdotjs], ['react', SiReact], ['nest', SiNestjs], ['typescript', SiTypescript],
  ['javascript', SiJavascript], ['tailwind', SiTailwindcss], ['laravel', SiLaravel], ['livewire', SiLivewire],
  ['django', SiDjango], ['python', SiPython], ['sql server', SiMicrosoftsqlserver], ['postgres', SiPostgresql],
  ['mysql', SiMysql], ['redis', SiRedis], ['prisma', SiPrisma], ['docker', SiDocker], ['aws', SiAmazonaws],
  ['vercel', SiVercel], ['github', SiGithub], ['playwright', SiPlaywright], ['expo', SiExpo], ['mui', SiMui],
  ['vite', SiVite], ['stripe', SiStripe], ['twilio', SiTwilio], ['webrtc', SiWebrtc], ['bootstrap', SiBootstrap],
  ['jquery', SiJquery], ['alpine', SiAlpinedotjs], ['html', SiHtml5], ['css', SiCss3]
];

export const getTechIcon = (tag: string) => {
  const tagLower = tag.toLowerCase();

  // FilamentPHP has no logo of its own; without this it would show the PHP logo.
  if (!tagLower.includes('filament')) {
    if (tagLower.includes('php')) return <SiPhp />;
    const match = logos.find(([name]) => tagLower.includes(name));
    if (match) {
      const Logo = match[1];
      return <Logo />;
    }
  }

  // No logo: fall back to a simple icon for the kind of tool.
  if (tagLower.includes('node') || tagLower.includes('express')) return <FiServer />;
  if (tagLower.includes('mongo') || tagLower.includes('sql')) return <FiDatabase />;
  return <FiCode />;
};
