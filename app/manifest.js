export default function manifest() {
    return {
        name: 'Estate Utility',
        short_name: 'Est. Utility',
        description: 'Utility Mudah untuk Kegunaan Kerani Estate',
        start_url: '/',
        display: 'standalone',
        background_color: '#E8F6F3',
        theme_color: '#16A085',
        icons: [
            {
                purpose: 'maskable',
                src: '/icon512_maskable.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                purpose: 'any',
                src: '/icon512_rounded.png',
                sizes: '512x512',
                type: 'image/png',
            }
        ]
    }
}