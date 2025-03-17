/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages deployment
  // If your repo is username.github.io, use empty string ''
  // If your repo is username.github.io/portfolio, use '/portfolio'
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true,
}

export default nextConfig

