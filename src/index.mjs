import { build } from 'esbuild';

// This package targets a browser bundler. Bundle its web-compatible consumer before execution.
const result = await build({ entryPoints: ['src/browser-example.mjs'], bundle: true, platform: 'browser', format: 'esm', write: false, logLevel: 'warning' });
const module = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].contents).toString('base64'));
await module.runExample();
console.log('Bundled browser-client fixture passed.');
