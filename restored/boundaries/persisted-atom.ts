// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kp`) / export `Out`.

export type BindCreatePersistedAtomPeers = {
  Cr: (...args: unknown[]) => unknown;
  _Me: (...args: unknown[]) => unknown;
};

let peers: BindCreatePersistedAtomPeers | null = null;

/** Wire bindCreatePersistedAtom peers once companions land. */
export function setBindCreatePersistedAtomPeers(next: BindCreatePersistedAtomPeers): void {
  peers = next;
}

/**
 * Bundle export `Out` / internal `kp`.
 */
export function bindCreatePersistedAtom(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("bindCreatePersistedAtom peers are not configured");
  }

  return peers.Cr(e, t, peers._Me(), n);
}
