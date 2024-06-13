import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define the secret for token verification
const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
    // Get the token from the request
    const token = await getToken({ req, secret });
    console.log(token)

    // If no token is found, redirect to the login page
    if (!token) {
        const loginUrl = new URL('/api/auth/signin', req.url);
        loginUrl.searchParams.set('callbackUrl', req.url);
        return NextResponse.redirect(loginUrl);
    }

    // Continue to the requested page
    return NextResponse.next();
}

// Specify the routes for which this middleware should run
export const config = {
    matcher: ['/dashboard', '/feedback', '/portfolio/:path*','/ingo/:path*'],
};
