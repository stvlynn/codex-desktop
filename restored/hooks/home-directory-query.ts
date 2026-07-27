// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y8n`) / export `Q4`.

export type BindHomeDirectoryQueryAtomPeers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
};

let peers: BindHomeDirectoryQueryAtomPeers | null = null;

/** Wire bindHomeDirectoryQueryAtom peers once companions land. */
export function setBindHomeDirectoryQueryAtomPeers(next: BindHomeDirectoryQueryAtomPeers): void {
  peers = next;
}

/**
 * Bundle export `Q4` / internal `Y8n`.
 */
export function bindHomeDirectoryQueryAtom() {
  if (peers == null) {
    throw new Error("bindHomeDirectoryQueryAtom peers are not configured");
  }

  return peers.tp(peers.Q, `home-directory`, () => ({
    staleTime: peers.Hf.FIVE_SECONDS,
  }));
}
