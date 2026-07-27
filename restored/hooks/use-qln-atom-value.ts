// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Aln`) / export `V7`.

export type UseQlnAtomValuePeers = {
  Y: (...args: unknown[]) => unknown;
  qln: (...args: unknown[]) => unknown;
};

let peers: UseQlnAtomValuePeers | null = null;

/** Wire useQlnAtomValue peers once companions land. */
export function setUseQlnAtomValuePeers(next: UseQlnAtomValuePeers): void {
  peers = next;
}

/**
 * Bundle export `V7` / internal `Aln`.
 */
export function useQlnAtomValue() {
  if (peers == null) {
    throw new Error("useQlnAtomValue peers are not configured");
  }

  return peers.Y(peers.qln);
}
