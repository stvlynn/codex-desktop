// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `_Me`) / export `Dft`.

export type CreateInMemoryStorageAdapterPeers = {
  ensureInit: () => void;
  store: Map<string, unknown>;
  validateKey: (key: string) => void;
  write: (key: string, value: unknown, notify: boolean) => void;
  subscribers: Map<
    string,
    Set<{ callback: (value: unknown) => void; fallback: unknown }>
  >;
};

let peers: CreateInMemoryStorageAdapterPeers | null = null;

/** Wire createInMemoryStorageAdapter peers once companions land. */
export function setCreateInMemoryStorageAdapterPeers(
  next: CreateInMemoryStorageAdapterPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Dft` / internal `_Me`.
 * In-memory storage adapter with subscribe + fallback defaults.
 */
export function createInMemoryStorageAdapter(): {
  getItem: (key: string, fallback?: unknown) => unknown;
  setItem: (key: string, value: unknown) => void;
  removeItem: (key: string) => void;
  subscribe: (
    key: string,
    callback: (value: unknown) => void,
    fallback?: unknown,
  ) => () => void;
} {
  if (peers == null) {
    throw new Error("CreateInMemoryStorageAdapter peers are not configured");
  }
  return {
    getItem: (key, fallback) => {
      peers!.ensureInit();
      return peers!.store.has(key) ? peers!.store.get(key) : fallback;
    },
    setItem: (key, value) => {
      peers!.ensureInit();
      peers!.validateKey(key);
      if (value === undefined) {
        peers!.write(key, undefined, true);
        return;
      }
      peers!.write(key, value, true);
    },
    removeItem: (key) => {
      peers!.ensureInit();
      peers!.validateKey(key);
      peers!.write(key, undefined, true);
    },
    subscribe: (key, callback, fallback) => {
      peers!.ensureInit();
      const entry = { callback, fallback };
      let set = peers!.subscribers.get(key);
      if (!set) {
        set = new Set();
        peers!.subscribers.set(key, set);
      }
      set.add(entry);
      return () => {
        set!.delete(entry);
        if (set!.size === 0) peers!.subscribers.delete(key);
      };
    },
  };
}
