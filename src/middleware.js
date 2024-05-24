import { NextResponse } from 'next/server'
import { parseCookies } from 'nookies';

export function middleware(request) {
    const cookie = parseCookies();
    const tokenInfo = request.cookies.get("token")?.value;
    const token = tokenInfo ? tokenInfo : null;

    const requestURL = new URL(request.url, `https://assignment121.vercel.app/`);

    if (!token && requestURL.pathname !== '/login') {
        
        return NextResponse.redirect(new URL('/login', `https://assignment121.vercel.app/`).toString());
    } else if (token && requestURL.pathname === '/login') {
        
        return NextResponse.redirect(new URL('/', `https://assignment121.vercel.app/`).toString());
    } else {
        return NextResponse.next();
    }
 
}

export const config = {
    matcher: ['/login', '/']
}