
import { NextResponse } from 'next/server';



export const config = {
  matcher: [
    // include any files in the api or trpc folders that might have an extension
    '/(api|trpc)(.*)',
    // include the /
    '/',
  ],
};

const defaultMiddleware = () => NextResponse.next();


export default defaultMiddleware
