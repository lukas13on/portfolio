const pk = require('./package.json');

/** seo and meta config */
const config = {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    lang: "pt-BR",
    themeColor: "#0d6efd",
    barStyle: "black-translucent",
    title: pk.author.name,
    description: pk.description,
    homepage: pk.homepage,
    googleAnalytics: {
        id: "G-TD0Z6Y0SD7"
    },
    twitterCard: {
        card: "summary",
        site: "@lucas_o_neitzke",
        creator: "@lucas_o_neitzke",
        title: pk.author.name,
        description: pk.description,
        image: pk.homepage + "seo.png",
    },
    openGraph: {
        type: "website",
        url: pk.homepage,
        title: pk.author.name,
        description: pk.description,
        image: pk.homepage + "seo.png",
        siteName: pk.author.name,
    },
};

export default {
    head: {
        title: config.title,
        meta: [
            { name: 'twitter:card', content: config.twitterCard.card },
            { name: 'twitter:site', content: config.twitterCard.site },
            { name: 'twitter:creator', content: config.twitterCard.creator },
            { name: 'twitter:title', content: config.twitterCard.title },
            { name: 'twitter:description', content: config.twitterCard.description },
            { name: 'twitter:image', content: config.twitterCard.image },
        ]
    },
    pwa: {
        meta: {
            lang: config.lang,
            charset: config.charset,
            viewport: config.viewport,
            mobileApp: true,
            mobileAppIOS: true,
            appleStatusBarStyle: config.barStyle,
            favicon: true,
            theme_color: config.themeColor,
            ogType: config.openGraph.type,
            ogUrl: config.openGraph.url,
            ogTitle: config.openGraph.title,
            ogDescription: config.openGraph.description,
            ogImage: config.openGraph.image,
            ogSiteName: config.openGraph.siteName,
        },
        manifest: {
            name: config.title,
            short_name: config.title,
            description: config.description,
            lang: config.lang,
            useWebmanifestExtension: false,
        },
        icon: {
            purpose: 'any',
        },
    },
    googleAnalytics: {
        id: config.googleAnalytics.id,
    },
    cli: {
        badgeMessages:
            [
                'Criado por Lucas de Oliveira Neitzke.'
            ]
    },
    ignore: [
        '.nuxt', // buildDir
        'static', // dir.static
        'script', // dir.script
        'dist', // generate.dir
        'node_modules',
        '.**/*',
        '.*',
        'README.md',
        'LICENSE'
    ],
    generate: {
        dir: 'dist/'
    },
    dir: {
        pages: 'src/pages/',
        assets: 'src/assets/',
        static: 'src/static/',
    },
    router: {
        base: '/portfolio/',
    },
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/google-analytics',
    ],
    target: 'static', // 'static' or 'server'
    ssr: false // true for static, false for server
};