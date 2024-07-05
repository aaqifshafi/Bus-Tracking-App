import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
                    role: "user", // Add role for the user
                };

                const staticAdmin = {
                    email: "admin@busapp.com",
                    password: "admin@123",
                    name: "Admin User",
                    image: "https://github.com/shadcn.png",
                    role: "admin", // Add role for the admin
                };

                if (credentials) {
                    if (
                        credentials.email === staticUser.email &&
                        credentials.password === staticUser.password
                    ) {
                        return {
                            email: staticUser.email,
                            name: staticUser.name,
                            image: staticUser.image,
                            role: staticUser.role,
                        };
                    }

                    if (
                        credentials.email === staticAdmin.email &&
                        credentials.password === staticAdmin.password
                    ) {
                        return {
                            email: staticAdmin.email,
                            name: staticAdmin.name,
                            image: staticAdmin.image,
                            role: staticAdmin.role,
                        };
                    }
                }

                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: "user", // Assign the default role as 'user' for Google sign-ins
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role; // Add role to the token
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role; // Add role to the session
            }
            return session;
        },
        async signIn({ user, account }) {
            if (account.provider === "google") {
                user.role = "user"; // Ensure Google users have the 'user' role
            }
            return true;
        },
    },
    pages: {
        signIn: "/signin",
    },
});

export { handler as GET, handler as POST };
