// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eS`) / export `P7`.

export type IsTunAtomEqualToNSPeers = {
  nS: (...args: unknown[]) => unknown;
  tun: (...args: unknown[]) => unknown;
};

let peers: IsTunAtomEqualToNSPeers | null = null;

/** Wire isTunAtomEqualToNS peers once companions land. */
export function setIsTunAtomEqualToNSPeers(
  next: IsTunAtomEqualToNSPeers,
): void {
  peers = next;
}

/**
 * Bundle export `P7` / internal `eS`.
 */
export function isTunAtomEqualToNS(e: unknown) {
  if (peers == null) {
    throw new Error("isTunAtomEqualToNS peers are not configured");
  }

  return e(peers.tun) === peers.nS;
}
