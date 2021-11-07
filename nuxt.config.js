export default {
    cli: {
        badgeMessages:
            [
                'Iniciado com sucesso.'
            ]
    },
    generate: {
        dir: 'dist',
        subFolders: true
    },
    target: 'static', // 'static' or 'server'
    ssr: true // true for static, false for server
};