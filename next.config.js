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
    GOOGLE_MAP_API_KEY: 'AIzaSyBTOPQi6J-yLn1yw38UaO_i7fE9GGtnv9o',
    NEXT_PUBLIC_SITE_URL: 'http://localhost:3000'
  },

};

module.exports = withNextIntl(nextConfig);
