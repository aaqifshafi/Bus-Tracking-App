import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authConfig = {
    providers: [
        CredentialsProvider({
            id: "domain-login",
            name: "Domain Account",
            async authorize(credentials, req) {
                const user = {
                    /* add function to get user */
                }
                return user
            },
            credentials: {
                domain: {
                    label: "Bus App",
                    type: "text ",
                    placeholder: "CORPNET",
                    value: "CORPNET",
                },
                username: { label: "Username", type: "text ", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
        }),
        CredentialsProvider({
            id: "intranet-credentials",
            name: "Two Factor Auth",
            async authorize(credentials, req) {
                const user = {
                    /* add function to get user */
                }
                return user
            },
            credentials: {
                username: { label: "Username", type: "text ", placeholder: "jsmith" },
                "2fa-key": { label: "2FA Key" },
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
}

export default NextAuth(authConfig)