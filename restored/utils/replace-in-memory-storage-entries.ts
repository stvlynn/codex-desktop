// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hMe`) / export `Aft`.

export type ReplaceInMemoryStorageEntriesPeers = {
  AMe: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  kMe: (...args: unknown[]) => unknown;
  pMe: (...args: unknown[]) => unknown;
  uMe: (...args: unknown[]) => unknown;
};

let peers: ReplaceInMemoryStorageEntriesPeers | null = null;

/** Wire replaceInMemoryStorageEntries peers once companions land. */
export function setReplaceInMemoryStorageEntriesPeers(next: ReplaceInMemoryStorageEntriesPeers): void {
  peers = next;
}

/**
 * Bundle export `Aft` / internal `hMe`.
 */
export function replaceInMemoryStorageEntries(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("replaceInMemoryStorageEntries peers are not configured");
  }

  (peers.pMe(), (AMe += 1));
  let n = new Set([...peers.id.keys(), ...Object.keys(e)]);
  (peers.id.clear(),
    Object.entries(e).forEach(([e, t]) => {
      t !== void 0 && peers.id.set(e, t);
    }),
    (kMe = t),
    n.forEach((e) => peers.uMe(e)));
}
