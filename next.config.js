/** @type {import('next').NextConfig} */
const path = require('path')
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: 'AIzaSyBTOPQi6J-yLn1yw38UaO_i7fE9GGtnv9o',
    NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY: '6LdzSJ0mAAAAAEOQo01kWyEaLkJPc96EBhx1tYee',
    NEXT_PUBLIC_TEAM_MEMBERS_COUNT: 20,
    NEXT_PUBLIC_API_ROOT: 'http://89.117.62.130:6543/api/v1/',
    NEXT_PUBLIC_CASH_TIME: 0
  },


};

module.exports = withNextIntl(nextConfig);
