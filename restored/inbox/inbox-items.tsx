// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PA`) / export `kQ`.

export type BindInboxItemsPeers = {
  Au: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  MA: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  NA: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  dMr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fMr: (...args: unknown[]) => unknown;
  jA: (...args: unknown[]) => unknown;
  mMr: (...args: unknown[]) => unknown;
  pMr: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  uMr: (...args: unknown[]) => unknown;
};

let peers: BindInboxItemsPeers | null = null;

/** Wire bindInboxItems peers once companions land. */
export function setBindInboxItemsPeers(next: BindInboxItemsPeers): void {
  peers = next;
}

/**
 * Bundle export `kQ` / internal `PA`.
 */
export function bindInboxItems() {
  if (peers == null) {
    throw new Error("bindInboxItems peers are not configured");
  }

  return peers.e(() => {
    ((uMr = peers.r(peers.Mo(), 1)),
      peers.Ho(),
      peers.Au(),
      peers.ed(),
      (dMr = {
        initialized: !1,
        revision: 0,
        isComplete: !1,
        hostsById: new Map(),
        entries: [],
        entriesByKey: new Map(),
      }),
      (jA = peers.Ta(peers.Q, !1)),
      (fMr = peers.Ta(peers.Q, !1)),
      (MA = peers.Ta(peers.Q, null)),
      (pMr = peers.Ta(peers.Q, [])),
      (NA = peers.Ta(peers.Q, peers.dMr)),
      (mMr = peers.Da(peers.Q, (e) => null, {
        isEqual: peers.uMr.default,
      })));
  });
}
