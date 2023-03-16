/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com','fastly.picsum.photos'],
  },
}

const path = require('path');

module.exports = {
  reactStrictMode: true,
  i18n: {
    // The locales you want to support in your app
    locales: ["en", "de"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
};

module.exports = nextConfig
