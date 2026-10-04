/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Static export for upload to shared/Apache hosting
  output: 'export',
  // `npm run build` writes to ./build; `npm run dev` keeps using ./.next so they never clash
  distDir: isProd ? 'build' : '.next',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
