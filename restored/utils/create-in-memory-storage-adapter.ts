// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_Me`) / export `Dft`.

export type CreateInMemoryStorageAdapterPeers = {
  OMe: (...args: unknown[]) => unknown;
  dMe: (...args: unknown[]) => unknown;
  fMe: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  td: (...args: unknown[]) => unknown;
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
 */
export function createInMemoryStorageAdapter() {
  if (peers == null) {
    throw new Error("createInMemoryStorageAdapter peers are not configured");
  }

  return {
    getItem: (e, t) => (peers.td(), peers.id.has(e) ? peers.id.get(e) : t),
    setItem: (e, t) => {
      if ((peers.td(), peers.fMe(e), t === void 0)) {
        peers.dMe(e, void 0, !0);
        return;
      }
      peers.dMe(e, t, !0);
    },
    removeItem: (e) => {
      (peers.td(), peers.fMe(e), peers.dMe(e, void 0, !0));
    },
    subscribe: (e, t, n) => {
      peers.td();
      let r = {
          callback: t,
          fallback: n,
        },
        i = peers.OMe.get(e) ?? new Set();
      return (
        i.add(r),
        peers.OMe.set(e, i),
        () => {
          let t = peers.OMe.get(e);
          t && (t.delete(r), t.size === 0 && peers.OMe.delete(e));
        }
      );
    },
  };
}
