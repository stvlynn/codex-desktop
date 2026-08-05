// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Qvu`) / export `X`.

export type CollectUniqueMappedPresenceEntriesPeers = {
  cyu: (...args: unknown[]) => unknown;
  kvu: (...args: unknown[]) => unknown;
  ryu: (...args: unknown[]) => unknown;
};

let peers: CollectUniqueMappedPresenceEntriesPeers | null = null;

/** Wire collectUniqueMappedPresenceEntries peers once companions land. */
export function setCollectUniqueMappedPresenceEntriesPeers(
  next: CollectUniqueMappedPresenceEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `X` / internal `Qvu`.
 */
export function collectUniqueMappedPresenceEntries(
  e: unknown,
  t: unknown,
  n: unknown,
) {
  if (peers == null) {
    throw new Error(
      "collectUniqueMappedPresenceEntries peers are not configured",
    );
  }

  let r = [],
    i = new Set();
  for (let a of e) {
    let e = peers.kvu(a, t, n);
    if (e == null) continue;
    let o = peers.ryu(
      {
        metrics: e,
        process: a,
      },
      n,
    );
    (o != null && o < peers.cyu) ||
      i.has(e.pid) ||
      (i.add(e.pid),
      r.push({
        metrics: e,
        process: a,
      }));
  }
  return r;
}
