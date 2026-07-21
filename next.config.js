/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  reactStrictMode: true,
  async redirects() {
    return [
      // Project renames — old addresses kept alive so shared links do not 404
      {
        source: '/projects/facility-management-system',
        destination: '/projects/linkabode',
        permanent: true,
      },
      {
        source: '/projects/amt-saas',
        destination: '/projects/assetlane',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
