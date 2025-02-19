/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ap-south-1.linodeobjects.com',
      'media.licdn.com',
      process.env.BASE_URL,
    ],
  },
  // Konfigurasi lain di sini
};

export default nextConfig;
