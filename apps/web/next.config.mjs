/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@exportvid/shared'],
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  async redirects() {
    return [
      // The homepage is the general video downloader; a second page would compete with it for the same searches.
      { source: '/video-downloader', destination: '/', permanent: true },
      // One canonical host: send www to the bare domain.
      { source: '/:path*', has: [{ type: 'host', value: 'www.exportvid.com' }], destination: 'https://exportvid.com/:path*', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
