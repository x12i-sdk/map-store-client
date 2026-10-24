# @x12i/map-store-client usage example

Browser HTTP client for map-store /map-store/v1 (Memorix estate via map-store only).

This consuming application demonstrates **read map-store health using a local http fixture** using the published npm package, pinned to `0.1.8`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Read the estate's supported map-store working products from a browser client.
- Normalize paged products and surface service errors in a consuming interface.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/map-store-client)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Browser bundler consumption

The package is a browser client and its published internal imports require bundler resolution. [`src/browser-example.mjs`](src/browser-example.mjs) is the web-compatible consumer. `npm start` builds it with the pinned esbuild version for the browser, then exercises the bundled API with an offline fetch fixture in Node. No DOM view or live backend is tested. Native unbundled Node import is not the mode demonstrated here.
