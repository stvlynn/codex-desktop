// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QYn`) / export `u8`.

export type U8Peers = {
  $Yn: (...args: unknown[]) => unknown;
  HYn: (...args: unknown[]) => unknown;
};
let peers: U8Peers | null = null;

/** Wire u8 peers once companions land. */
export function setU8Peers(next: U8Peers): void {
  peers = next;
}

/**
 * Bundle export `u8` / internal `QYn`.
 */
export function u8(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("u8 peers are not configured");
  }
  peers.HYn(t);
  e.set(peers.$Yn, t, true);
}
