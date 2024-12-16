import withPWA from 'next-pwa';

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/estate-utility\.vercel\.app\/.*/, // Cache your own domain assets
            handler: 'NetworkFirst', // Use network first, then fallback to cache
            options: {
                cacheName: 'pages-cache',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
                },
            },
        },
        {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp)$/, // Cache images
            handler: 'CacheFirst',
            options: {
                cacheName: 'images-cache',
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
                },
            },
        },
        {
            urlPattern: /\.(?:js|css|woff2|woff|ttf|eot)$/, // Cache static resources
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'static-resources-cache',
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
                },
            },
        },
        {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/, // Cache Google Fonts
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                    maxEntries: 20,
                    maxAgeSeconds: 365 * 24 * 60 * 60, // Cache for 1 year
                },
            },
        },
    ],
});