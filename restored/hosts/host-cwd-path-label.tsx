// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SYr`) / export `KY`.

export type HostCwdPathLabelPeers = {
  DYr: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  OYr: (...args: unknown[]) => unknown;
  xYr: (...args: unknown[]) => unknown;
};

let peers: HostCwdPathLabelPeers | null = null;

/** Wire HostCwdPathLabel peers once companions land. */
export function setHostCwdPathLabelPeers(next: HostCwdPathLabelPeers): void {
  peers = next;
}

/**
 * Bundle export `KY` / internal `SYr`.
 */
export function HostCwdPathLabel(e: unknown) {
  if (peers == null) {
    throw new Error("HostCwdPathLabel peers are not configured");
  }

  let t = (0, peers.DYr.c)(4),
    { hostId: n, cwd: r } = e,
    i = peers.Fo(peers.OYr, n),
    a;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((a = {
          hostId: n,
          cwd: r,
          isHostRegistered: i,
          waitForModelList: !0,
        }),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    peers.xYr(a)
  );
}
