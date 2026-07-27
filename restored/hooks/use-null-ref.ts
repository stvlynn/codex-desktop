// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `R3s`) / export `nh`.

export type UseNullRefPeers = {
  useRef: <T>(initial: T) => { current: T };
};

let peers: UseNullRefPeers | null = null;

/** Wire null-ref peers once companions land. */
export function setUseNullRefPeers(next: UseNullRefPeers): void {
  peers = next;
}

/**
 * Bundle export `nh` / internal `R3s`.
 * Return a ref initialized to null (args ignored, matching bundle).
 */
export function useNullRef(..._args: unknown[]): { current: null } {
  if (peers == null) {
    throw new Error("UseNullRef peers are not configured");
  }
  return peers.useRef(null);
}
