const ESbuild = require('esbuild')
const path = require('path')
ESbuild.build({
    outdir:path.resolve(__dirname, '..', '..' , 'dist'),
    entryNames:'bundle.min',
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: true,
    entryPoints: [path.resolve(__dirname, '..', '..' , 'src' , 'index.jsx')]
})