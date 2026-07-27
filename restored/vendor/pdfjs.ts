// Restored from ref/webview/assets/app-initial-C-fROkKo.js (inlined pdfjsLib / uXt / qnt)
// npm shim: pdfjs-dist.
// Bundle bindings: browser2≈pdfjsLib namespace init; DrawLayer/SignatureExtractor companions.
//
// Use `export *` so Node-side vendor preflight does not have to load the browser
// build (DOMMatrix). Consumers still get the full stock pdfjs-dist surface.

export * from "pdfjs-dist";

/**
 * Bundle `uXt` / export `qnt` — rolldown ESM init that assigned `globalThis.pdfjsLib`.
 * No-op under the npm package (side-effect free).
 */
export function ensurePdfjsRuntime(): void {}
