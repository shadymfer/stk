/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.discordapp.com",
      "assets1.holaplex.tools",
      "assets2.holaplex.tools",
      "assets4.holaplex.tools",
      "assets3.holaplex.tools",
      "*.holaplex.tools",
      "assets.holaplex.tools"
     
     
    ]}
}

module.exports = nextConfig
