import { sessionStatus } from '@/utils/constants';
import { NextRequest, NextResponse } from 'next/server';

const { createMiddleware } = require('next-intl');
const path = require('path'); 

const messages = {
  en: require(path.join(__dirname, 'dictionaries/en.json')), // Correct the file path
  ar: require(path.join(__dirname, 'dictionaries/ar.json')), // Correct the file path
};

const middleware = createMiddleware({
  // Configure your middleware options here.
  locales: ['en', 'ar'], // List of supported locales.
  defaultLocale: 'en',   // Default locale.
  messages,
});

// Define protected routes for each locale
const protectedRoutes = {
  en: ["/en/dashboard"],
  ar: ["/ar/dashboard"],
  
  // Add more routes for each locale as needed
};

export default function middleware(NextRequest) {
  // Determine the current locale based on your application logic
  const currentLocale = "en"; 

  // Check if the requested route is protected for the current locale
  if (!sessionStatus && protectedRoutes[currentLocale].includes(NextRequest.pathname)) {
    const absoluteURL = new URL("/", NextRequest.nextUrl.origin);
    console.log(absoluteURL, "CORRECT PATH");
    return NextResponse.redirect(absoluteURL.toString());
  }
}
// Use the middleware in your custom server.
server.use(middleware);
