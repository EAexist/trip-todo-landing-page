/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    optimizePackageImports: ['@chakra-ui/react'],
    // inlineCss: true,
  },
}
