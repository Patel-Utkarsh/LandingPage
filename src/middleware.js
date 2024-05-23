import { NextResponse } from 'next/server'
import { parseCookies } from 'nookies';

export function middleware(request) {
    const cookie = parseCookies();
    const tokenInfo = request.cookies.get("token")?.value;
    const token = tokenInfo ? tokenInfo : null;

    const requestURL = new URL(request.url, `http://localhost:3000/`);

    if (!token && requestURL.pathname !== '/login') {
        // Redirect to the login page if there's no token and the user is not already on the login page
        return NextResponse.redirect(new URL('/login', `http://localhost:3000/`).toString());
    } else if (token && requestURL.pathname === '/login') {
        // Redirect to the homepage if the user is already logged in and tries to access the login page
        return NextResponse.redirect(new URL('/', `http://localhost:3000/`).toString());
    } else {
        // Allow the request to proceed without redirection
        return NextResponse.next();
    }
 
}

export const config = {
    matcher: ['/login', '/']
}
