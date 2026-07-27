// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `hMe`) / export `Aft`.

export type ReplaceInMemoryStorageEntriesPeers = {
  ensureReady: () => void;
  bumpGeneration: () => void;
  getMap: () => Map<string, unknown>;
  setExpiry: (expiry: unknown) => void;
  notifyKey: (key: string) => void;
};

let peers: ReplaceInMemoryStorageEntriesPeers | null = null;

/** Wire replaceInMemoryStorageEntries peers once companions land. */
export function setReplaceInMemoryStorageEntriesPeers(
  next: ReplaceInMemoryStorageEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Aft` / internal `hMe`.
 * Replace in-memory storage map entries and notify listeners.
 */
export function replaceInMemoryStorageEntries(
  entries: Record<string, unknown>,
  expiry: unknown,
): void {
  if (peers == null) {
    throw new Error("ReplaceInMemoryStorageEntries peers are not configured");
  }
  peers.ensureReady();
  peers.bumpGeneration();
  const map = peers.getMap();
  const keys = new Set([...map.keys(), ...Object.keys(entries)]);
  map.clear();
  for (const [key, value] of Object.entries(entries)) {
    if (value !== undefined) map.set(key, value);
  }
  peers.setExpiry(expiry);
  for (const key of keys) peers.notifyKey(key);
}
