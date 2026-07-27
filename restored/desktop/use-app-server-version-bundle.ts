// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ffs`) / export `sS`.

export type UseAppServerVersionBundlePeers = {
  Fo: (...args: unknown[]) => unknown;
  QE: (...args: unknown[]) => unknown;
  eD: (...args: unknown[]) => unknown;
  inr: (...args: unknown[]) => unknown;
  nnr: (...args: unknown[]) => unknown;
  pfs: (...args: unknown[]) => unknown;
  rnr: (...args: unknown[]) => unknown;
};

let peers: UseAppServerVersionBundlePeers | null = null;

/** Wire useAppServerVersionBundle peers once companions land. */
export function setUseAppServerVersionBundlePeers(next: UseAppServerVersionBundlePeers): void {
  peers = next;
}

/**
 * Bundle export `sS` / internal `ffs`.
 */
export function useAppServerVersionBundle(e: unknown) {
  if (peers == null) {
    throw new Error("useAppServerVersionBundle peers are not configured");
  }

  let t = (0, peers.pfs.c)(9),
    n = peers.Fo(peers.eD, e),
    r = peers.Fo(peers.QE, e),
    i = peers.Fo(peers.rnr, e),
    a = peers.Fo(peers.nnr, e),
    o = peers.Fo(peers.inr, e);
  if (n == null) {
    let e;
    return (
      t[0] !== i || t[1] !== a || t[2] !== o
        ? ((e = {
            appServerVersion: i,
            error: a,
            installedCodexVersion: o,
            state: null,
          }),
          (t[0] = i),
          (t[1] = a),
          (t[2] = o),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let s;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o || t[7] !== r
      ? ((s = {
          appServerVersion: i,
          error: a,
          installedCodexVersion: o,
          state: r,
        }),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = r),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
