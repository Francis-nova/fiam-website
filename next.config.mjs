/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  // Serve the generated sitemap (src/app/sitemap.ts) at /sitemap as well as /sitemap.xml.
  async rewrites() {
    return [{ source: '/sitemap/', destination: '/sitemap.xml' }];
  },
};

export default nextConfig;
