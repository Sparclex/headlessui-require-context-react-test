/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://nextjs.org/blog/next-11-1#es-modules-support
  experimental: {
    esmExternals: false
  },
}

module.exports = nextConfig
