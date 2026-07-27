// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uXt`) / export `qnt`.
// npm identity: pdfjs-dist (globalThis.pdfjsLib surface) — see vendor/pdfjs.ts.

import { ensurePdfjsRuntime } from "../vendor/pdfjs";

export * from "../vendor/pdfjs";

/** Legacy peers wiring — unused under the npm shim. */
export type Browser2Peers = Record<string, unknown>;

/** @deprecated No-op; pdfjs-dist is side-effect free. */
export function setBrowser2Peers(_next: Browser2Peers): void {}

/**
 * Bundle export `qnt` / internal `uXt` — ESM init for pdfjsLib.
 * No-op under the npm package.
 */
export function browser2(): void {
  ensurePdfjsRuntime();
}
