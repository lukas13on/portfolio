const pk = require('./package.json');

const config = {
    title: pk.author.name,
    description: pk.description,
    image: "src/assets/profile.png",
};

export default {
    pwa: {
        meta: {
            name: config.title,
            lang: "pt-BR",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            mobileApp: true,
            mobileAppIOS: true,
            appleStatusBarStyle: "black-translucent",
            favicon: true,
            theme_color: "#0d6efd",
            ogType: "website",
            ogTitle: config.title,
            ogDescription: "aaaaaaaa",
            ogImage: config.image,
            ogUrl: "https://lukas13on.github.io/portfolio/",
            /** configurar o twitter */
            twitterCard: "",
            twitterSite: "",
            twitterCreator: "",
        },
        manifest: {
            name: config.title,
            short_name: config.title,
            description: config.description,
            lang: "pt-BR",
            useWebmanifestExtension: false,
        },
        icon: {
            purpose: 'any',
        },
    },
    googleAnalytics: {
        id: "G-TD0Z6Y0SD7"
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
    buildModules: [
        '@nuxtjs/pwa',
    ],
    target: 'static', // 'static' or 'server'
    ssr: false // true for static, false for server
};