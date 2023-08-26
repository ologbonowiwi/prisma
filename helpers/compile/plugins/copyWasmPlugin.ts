import type * as esbuild from 'esbuild'
import fs from 'fs/promises'
import path from 'path'

export const copyWasmPlugin: esbuild.Plugin = {
  name: 'copyWasmPlugin',
  setup(build) {
    build.onEnd(async () => {
      // as a convention, we install all Prisma's Wasm modules in the internals package
      const wasmResolveDir = path.join(__dirname, '..', '..', '..', 'packages', 'internals', 'node_modules')
      const wasmResolvePath = path.join('@prisma', 'prisma-schema-wasm', 'src', 'prisma_schema_build_bg.wasm')
      const wasmFilePath = path.join(wasmResolveDir, wasmResolvePath)

      if (build.initialOptions.outfile && build.initialOptions.bundle) {
        const outdir = path.dirname(build.initialOptions.outfile)
        const target = path.join(outdir, 'prisma_schema_build_bg.wasm')
        await fs.copyFile(wasmFilePath, target)
      }
    })
  },
}
