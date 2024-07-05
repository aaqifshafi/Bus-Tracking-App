import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        // Redirect to home page if no valid token is found
        return NextResponse.redirect(new URL("/", req.url));
    }

    const userRole = token.role;
    console.log(token);
    const url = req.nextUrl;

    // Function to clear cookies and redirect
    const clearCookiesAndRedirect = (destination) => {
        const response = NextResponse.redirect(new URL(destination, req.url));
        response.cookies.set('next-auth.session-token', '', { maxAge: -1, path: '/' });
        response.cookies.set('next-auth.csrf-token', '', { maxAge: -1, path: '/' });
        return response;
    };

    // Protect admin dashboard route
    if (url.pathname.startsWith("/admin/dashboard")) {
        if (userRole === "user") {
            // Clear cookies and redirect to admin login page
            return clearCookiesAndRedirect("/");
        }
    }

    // Protect user dashboard route
    if (url.pathname.startsWith("/dashboard")) {
        if (userRole === "admin") {
            // Clear cookies and redirect to home page
            return clearCookiesAndRedirect("/");
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/dashboard/:path*', '/dashboard/:path*'],
};
