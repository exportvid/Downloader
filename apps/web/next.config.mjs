/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@exportvid/shared'],
  eslint: {
    dirs: ['app', 'components', 'lib'],
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
