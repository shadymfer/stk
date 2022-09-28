import NextAuth from "next-auth";
import DiscordProvider from 'next-auth/providers/discord'



export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'identify email guilds applications.commands.permissions.update'
                }
            }
          })
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
          return '/toolkit'
        },
    },
    pages:{
        signIn: '/auth/login'
    },
   
        secret: process.env.JWT_SECRET
});