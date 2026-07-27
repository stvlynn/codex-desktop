// Restored from ref/webview/assets/src-aUHGwSbR.js
// npm shim: d3-axis + d3-selection (Mermaid diagram axis/selection runtime).
// Bundled chunk also carried d3-zoom/transition inits; consumers only need
// axisTop/axisBottom/select plus rolldown-style side-effect init thunks.

export { axisTop, axisBottom } from "d3-axis";
export { select } from "d3-selection";

/** Bundler ESM init no-op retained for export token `n`. */
export function ensureSelectionRuntimeN(): void {}

/** Bundler ESM init no-op retained for export token `o` (axis constants). */
export function ensureAxisRuntimeO(): void {}

/** Bundler ESM init no-op retained for export token `t` (combined runtime). */
export function ensureD3SelectionRuntimeT(): void {}
