const esbuild = require('esbuild')
const { readdirSync, statSync } = require("fs")
const { join } = require("path")

const entryPoints = readdirSync(join(process.cwd(), "src"))
    .filter((file) =>
        file.endsWith(".ts") &&
        statSync(join(process.cwd(), "src", file)).isFile()
    )
    .map((file) => `src/${file}`);

esbuild.build({
    entryPoints: entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,
    target: 'node14',
    define: { 'require.resolve': undefined },
    platform: 'node',
    outdir: './dist/layer/nodejs/node_modules'
}).catch(() => process.exit(1))