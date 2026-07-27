// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sti`) / export `gG`.

export type GGPeers = {
  Ati: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  bP: (...args: unknown[]) => unknown;
  tQn: (...args: unknown[]) => unknown;
};
let peers: GGPeers | null = null;

/** Wire gG peers once companions land. */
export function setGGPeers(next: GGPeers): void {
  peers = next;
}

/**
 * Bundle export `gG` / internal `Sti`.
 */
export function gG(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("gG peers are not configured");
  }
  let n = e.get(peers.bP);
  n != null &&
    (e.set(peers.Ati, {
      ...n,
      type: "create",
      mentionPath: t,
    }),
    peers.Ub(e, peers.tQn, {
      ...n,
    }));
}
