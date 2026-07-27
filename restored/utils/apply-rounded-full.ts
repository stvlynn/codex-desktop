// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Qe`) / export `wut`.

export type BindApplyRoundedFullPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  QQe: (...args: unknown[]) => unknown;
  ZQe: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindApplyRoundedFullPeers | null = null;

/** Wire bindApplyRoundedFull peers once companions land. */
export function setBindApplyRoundedFullPeers(next: BindApplyRoundedFullPeers): void {
  peers = next;
}

/**
 * Bundle export `wut` / internal `$Qe`.
 */
export function bindApplyRoundedFull() {
  if (peers == null) {
    throw new Error("bindApplyRoundedFull peers are not configured");
  }

  return peers.e(() => {
    ZQe = peers.c(), peers.sd(), peers.$u(), QQe = peers.J();
  });
}
