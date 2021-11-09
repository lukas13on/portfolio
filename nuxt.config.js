export default {
    head: function () {
        const data = {
            title: "Lucas de Oliveira Neitzke",
            viewport: "width=device-width, initial-scale=1",
            seo: {
                type: "article",
                description:
                    "Desenvolvedor e programador de sites e sistemas para a internet.",
                keywords: ["desenvolvedor", "programador", "backend", "frontend"],
                url: "https://lukas13on.github.io/portfolio/",
                image: "https://lukas13on.github.io/portfolio/_nuxt/img/og-image.jpg",
            }
        };
        return {
            title: data.title,
            meta: [
                {
                    hid: "viewport",
                    name: "viewport",
                    content: data.viewport,
                },
                {
                    hid: "description",
                    name: "description",
                    content: data.seo.description,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: data.seo.keywords.join(","),
                },
                {
                    hid: "og:type",
                    property: "og:type",
                    content: data.seo.type,
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: data.seo.title,
                },
                {
                    hid: "og:url",
                    property: "og:url",
                    content: data.seo.url,
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: data.seo.image,
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