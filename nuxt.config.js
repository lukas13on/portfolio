export default {
    googleAnalytics: {
        id: "G-TD0Z6Y0SD7"
    },
    head: function () {
        const info = {
            viewport: "width=device-width, initial-scale=1",
            seo: {
                title: "Lucas de Oliveira Neitzke",
                type: "article",
                description:
                    "Desenvolvedor e programador de sites e sistemas para a internet.",
                keywords: ["desenvolvedor", "programador", "backend", "frontend"],
                url: "https://lukas13on.github.io/portfolio/",
                image: {
                    url: "https://lukas13on.github.io/portfolio/_nuxt/img/og-image.jpg",
                },
            },
        };
        return {
            title: info.seo.title,
            meta: [
                {
                    hid: "viewport",
                    name: "viewport",
                    content: info.viewport,
                },
                {
                    hid: "description",
                    name: "description",
                    content: info.seo.description,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: info.seo.keywords.join(","),
                },
                {
                    hid: "og:type",
                    property: "og:type",
                    content: info.seo.type,
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: info.seo.title,
                },
                {
                    hid: "og:url",
                    property: "og:url",
                    content: info.seo.url,
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: info.seo.image.url,
                },
            ],
        };
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
    },
    router: {
        base: '/portfolio/',
    },
    target: 'static', // 'static' or 'server'
    ssr: false // true for static, false for server
};