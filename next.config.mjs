/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ap-south-1.linodeobjects.com',
      'media.licdn.com',
      'portfolio-pepep.vercel.app',
    ],
  },
  // Konfigurasi lain di sini
};

export default nextConfig;
