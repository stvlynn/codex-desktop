// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Capn/IPC payload size ceiling used by browser resource helpers (`fge` / `xgt`).

/** Bundle `fge` / export `xgt` — 256 MiB. */
export const BROWSER_IPC_PAYLOAD_MAX_BYTES = 256 * 1024 * 1024;

/** Bundle `dge` (co-located) — true when a payload exceeds the ceiling. */
export function isBrowserIpcPayloadTooLarge(byteLength: number): boolean {
  return byteLength > BROWSER_IPC_PAYLOAD_MAX_BYTES;
}
