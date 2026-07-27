// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DN`) / export `qq`.

export type AccountInfoPeers = {
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f2r: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
};

let peers: AccountInfoPeers | null = null;

/** Wire accountInfo peers once companions land. */
export function setAccountInfoPeers(next: AccountInfoPeers): void {
  peers = next;
}

/**
 * Bundle export `qq` / internal `DN`.
 */
export function accountInfo() {
  if (peers == null) {
    throw new Error("accountInfo peers are not configured");
  }
  return peers.e(() => {
    f2r = peers.c(), peers.ap(), peers.xM();
  });
}
