// Restored from ref/webview/assets/dagre-CwAApNzH.js
// npm shim: dagre (Mermaid layout engine aliases).
// Stock package body — CommonJS default plus layout alias exports.
// Mermaid renderer chunks (dagre-6UL2VRFP-*, dagre-KV5264BT-*) stay in diagrams/.

import dagre from "dagre";

/** Layout entry used by Mermaid flowchart/dagre renderers (bundle export `r`). */
export const layout: typeof dagre.layout = dagre.layout.bind(dagre);
export { layout as r };

/** Bundler ESM init no-op retained for export token `t`. */
export function t(): void {}

/** Optional package surface retained for consumers that import export `n`. */
export const dagrePackage = dagre;
export { dagrePackage as n };

export type { default as DagreNamespace } from "dagre";
