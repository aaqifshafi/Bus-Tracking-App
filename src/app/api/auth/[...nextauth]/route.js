import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                const staticUser = {
                    email: "user@busapp.com",
                    password: "pass@123",
                    name: "Test User",
                    image: "https://github.com/shadcn.png",
                };

                if (
                    credentials &&
                    credentials.email === staticUser.email &&
                    credentials.password === staticUser.password
                ) {
                    return {
                        email: staticUser.email,
                        name: staticUser.name,
                        image: staticUser.image,
                    };
                }

                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
    },
    pages: {
        signIn: "/signin",
    },

})

export { handler as GET, handler as POST }