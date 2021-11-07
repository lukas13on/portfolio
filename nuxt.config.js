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
    router: {
        base: '/portfolio/'
    },
    target: 'static', // 'static' or 'server'
    ssr: false // true for static, false for server
};