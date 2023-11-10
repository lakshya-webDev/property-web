// Import the dotenv package to load environment variables
const dotenv = require('dotenv');

// Load environment variables from a .env file (if it exists)
dotenv.config();

// Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/webp'],
    // domains: ['mdbcdn.b-cdn.net'], // Define allowed image domains
  },
  env: {
    COGNITO_REGION : 'ap-south-1',
    COGNITO_DOMAIN : 'https://usersauth.auth.ap-south-1.amazoncognito.com',
    COGNITO_CLIENT_ID:'7r9ld5r7o24f8mspc73tjlodos ',
    COGNITO_USER_POOL_ID: 'ap-south-1_Dqof3rTP6',
    COGNITO_CLIENT_SECRET: '16k0h43ibfvmn8bv4mh5koo8q874rme6q382btc2ru5iiu03ehb2',
    NEXTAUTH_URL:'http://localhost:3000/',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

// Import the next-intl plugin
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.js'
);

// Export the combined configuration
module.exports = withNextIntl(nextConfig);
