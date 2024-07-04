// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    const userRole = token.role;
    const url = req.nextUrl;

    // Protect admin dashboard route
    if (url.pathname.startsWith("/admin/dashboard")) {
        if (userRole !== "admin") {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    // Protect user dashboard route
    if (url.pathname.startsWith("/dashboard")) {
        if (!userRole || userRole === "admin") {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/admin/dashboard"], // Protect both dashboards
};
