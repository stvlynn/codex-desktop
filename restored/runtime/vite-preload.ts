// Restored from ref/webview/assets/app-initial-C-fROkKo.js (inlined vite preload helpers)
// Runtime shim: Vite modulepreload / __vitePreload used by mermaid layout loaders.
// Bundle bindings: Ql exported as Wmt ≈ __vitePreload; Gmt ≈ modulepreload polyfill init.

/** No-op for Vite's modulepreload polyfill side-effect init. */
export function ensureViteModulepreloadRuntime(): void {}

/** Run a dynamic-import factory; dep/importer args are Vite preload metadata. */
export async function vitePreload<T>(
  factory: () => Promise<T>,
  _deps?: readonly string[],
  _importer?: string,
): Promise<T> {
  return factory();
}
