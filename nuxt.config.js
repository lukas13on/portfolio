export default {
    cli: {
        badgeMessages:
            [
                'Iniciado com sucesso.'
            ]
    },
    generate: {
        dir: 'dist'
    },
    target: 'static', // 'static' or 'server'
    router: {
        base: '/portfolio/' // remove router for server
    },
    ssr: false // true for static, false for server
};