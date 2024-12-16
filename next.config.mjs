
/*

/** @type {import('next').NextConfig} */

/*const nextConfig = {};

export default nextConfig;*/

const withPWA = require('next-pwa')({
    dest: 'public', // Specifies where the service worker and manifest are stored
    register: true, // Registers the service worker automatically
    skipWaiting: true, // Activates the new service worker without waiting
});

module.exports = withPWA({
    reactStrictMode: true, // Other Next.js config
});