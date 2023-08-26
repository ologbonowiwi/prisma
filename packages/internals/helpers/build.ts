import { build } from '../../../helpers/compile/build'
import { copyWasmPlugin } from '../../../helpers/compile/plugins/copyWasmPlugin'

void build([
  {
    name: 'default',
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index',
    bundle: true,
    minify: true,
    plugins: [copyWasmPlugin],
    external: [
      '@prisma/debug',
      '@prisma/engines',
      '@prisma/fetch-engine',
      '@prisma/generator-helper',
      '@prisma/get-platform',
      '@prisma/prisma-schema-wasm',
    ],
    sourcemap: true,
    emitTypes: true,
  },
])
