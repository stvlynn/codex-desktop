// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `R3s`) / export `nh`.

export type UseNullRefPeers = {
  z3s: (...args: unknown[]) => unknown;
};

let peers: UseNullRefPeers | null = null;

/** Wire useNullRef peers once companions land. */
export function setUseNullRefPeers(next: UseNullRefPeers): void {
  peers = next;
}

/**
 * Bundle export `nh` / internal `R3s`.
 */
export function useNullRef(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useNullRef peers are not configured");
  }

  return (0, peers.z3s.useRef)(null);
}
