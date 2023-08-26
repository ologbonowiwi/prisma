import { build } from '../../../helpers/compile/build'
import { copyWasmPlugin } from '../../../helpers/compile/plugins/copyWasmPlugin'

void build([
  {
    name: 'default',
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index',
    bundle: true,
    plugins: [copyWasmPlugin],
    sourcemap: true,
  },
])
