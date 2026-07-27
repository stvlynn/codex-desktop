// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MFo`) / export `AO`.

export type BrowserUseMutationFacadesPeers = {
  NFo: (...args: unknown[]) => unknown;
  Sq: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
};

let peers: BrowserUseMutationFacadesPeers | null = null;

/** Wire browserUseMutationFacades peers once companions land. */
export function setBrowserUseMutationFacadesPeers(next: BrowserUseMutationFacadesPeers): void {
  peers = next;
}

/**
 * Bundle export `AO` / internal `MFo`.
 */
export function browserUseMutationFacades() {
  if (peers == null) {
    throw new Error("browserUseMutationFacades peers are not configured");
  }

  let e = (0, peers.Sq.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          mutationFn: peers.NFo,
        }),
        (e[0] = t))
      : (t = e[0]),
    peers.qt(t)
  );
}
