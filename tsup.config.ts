import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        join: 'src/join.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    watch: true,
    splitting: true,
    treeshake: true,
    minify: true,
    sourcemap: true,
    esbuildOptions(options) {
        options.keepNames = true;
    },
});
