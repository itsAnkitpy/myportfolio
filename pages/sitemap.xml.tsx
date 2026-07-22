import { GetServerSideProps } from 'next';
import { projects } from '@/lib/data';
import { SITE_URL } from '@/lib/site';

// Generated from lib/data.ts rather than kept as a static file in public/, so
// renaming or adding a project can never leave the sitemap pointing at a dead
// address. Archive projects are excluded on purpose — they have no pages.
const buildSitemap = () => {
  const urls = [SITE_URL, ...projects.map((project) => `${SITE_URL}/projects/${project.slug}`)];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml');
  res.write(buildSitemap());
  res.end();

  return { props: {} };
};

// Never rendered — getServerSideProps writes the response directly.
const Sitemap = () => null;

export default Sitemap;
