// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z$s`) / export `Zh`.

export type ZhPeers = {
  c1s: (...args: unknown[]) => unknown;
};
let peers: ZhPeers | null = null;

/** Wire Zh peers once companions land. */
export function setZhPeers(next: ZhPeers): void {
  peers = next;
}

/**
 * Bundle export `Zh` / internal `Z$s`.
 */
export function Zh(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("Zh peers are not configured");
  }
  return (
    e.set(peers.c1s, t, n),
    () => {
      e.get(peers.c1s, t) === n && e.set(peers.c1s, t, null);
    }
  );
}
