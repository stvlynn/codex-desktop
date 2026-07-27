// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z$s`) / export `setKeyedAtomValueWithCleanup`.

export type KeyedAtomValueWithCleanupPeers = {
  c1s: (...args: unknown[]) => unknown;
};
let peers: KeyedAtomValueWithCleanupPeers | null = null;

/** Wire setKeyedAtomValueWithCleanup peers once companions land. */
export function setKeyedAtomValueWithCleanupPeers(next: KeyedAtomValueWithCleanupPeers): void {
  peers = next;
}

/**
 * Bundle export `setKeyedAtomValueWithCleanup` / internal `Z$s`.
 */
export function setKeyedAtomValueWithCleanup(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("setKeyedAtomValueWithCleanup peers are not configured");
  }
  return (
    e.set(peers.c1s, t, n),
    () => {
      e.get(peers.c1s, t) === n && e.set(peers.c1s, t, null);
    }
  );
}
