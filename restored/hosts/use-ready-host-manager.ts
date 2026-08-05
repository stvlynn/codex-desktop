// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DGr`) / export `KX`.

export type UseReadyHostManagerPeers = {
  Fo: (...args: unknown[]) => unknown;
  NGr: (...args: unknown[]) => unknown;
  _M: (...args: unknown[]) => unknown;
  frr: (...args: unknown[]) => unknown;
  gM: (...args: unknown[]) => unknown;
};

let peers: UseReadyHostManagerPeers | null = null;

/** Wire useReadyHostManager peers once companions land. */
export function setUseReadyHostManagerPeers(
  next: UseReadyHostManagerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `KX` / internal `DGr`.
 */
export function useReadyHostManager(e: unknown) {
  if (peers == null) {
    throw new Error("useReadyHostManager peers are not configured");
  }

  let t = (0, peers.NGr.c)(3),
    n = peers.Fo(peers.frr, e),
    r = peers.gM();
  if (n.status === `ready`) return n.manager;
  let i;
  return (
    t[0] !== r || t[1] !== n.hostId
      ? ((i = r.waitForManagerForHostId(n.hostId)),
        (t[0] = r),
        (t[1] = n.hostId),
        (t[2] = i))
      : (i = t[2]),
    (0, peers._M.use)(i)
  );
}
