// Restored from ref/webview/assets/esm-C58sDLre.js
// npm shim: @tanstack/react-form — bundle exports n/r/t map to inits + useForm.
// Soft-shell replaced; do not hand-rewrite the form-core body.

export { useForm as useTanstackForm } from "@tanstack/react-form";

/** Bundle export `n` / `Ze` — rolldown __esm init; no-op under the npm package. */
export function ensureTanstackReactFormInit(): void {}

/** Bundle export `t` / `Qe` — companion API init; no-op under the npm package. */
export function ensureTanstackReactFormApiInit(): void {}

/**
 * Soft-shell bind hook alias. Prefer `useTanstackForm` (`useForm`).
 * Kept so consumers that imported the bindable name still resolve.
 */
export { useForm as bindUseTanstackForm } from "@tanstack/react-form";
