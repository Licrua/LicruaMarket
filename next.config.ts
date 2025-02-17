import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  typescript: {
    ignoreBuildErrors: true, // Отключает проверку TypeScript при сборке
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
