/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,env:{
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    JWT_SECRET:process.env.JWT_SECRET,
    NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
    REACT_APP_DONATION_ADDRESS:process.env.REACT_APP_DONATION_ADDRESS,
    REACT_APP_SOLANA_NETWORK:process.env.REACT_APP_SOLANA_NETWORK,
    REACT_APP_SOLANA_RPC_HOST:process.env.REACT_APP_SOLANA_RPC_HOST,
    REACT_APP_COUNTER_PROGRAM_ACCOUNT:process.env.REACT_APP_COUNTER_PROGRAM_ACCOUNT,
    REACT_APP_COUNTER_PROGRAM_ID:process.env.REACT_APP_COUNTER_PROGRAM_ID,

  },
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
