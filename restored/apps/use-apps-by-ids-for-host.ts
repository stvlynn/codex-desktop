// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yei`) / export `RG`.

export type UseAppsByIdsForHostPeers = {
  Cei: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Sei: (...args: unknown[]) => unknown;
  vei: (...args: unknown[]) => unknown;
  yM: (...args: unknown[]) => unknown;
  z7r: (...args: unknown[]) => unknown;
};

let peers: UseAppsByIdsForHostPeers | null = null;

/** Wire useAppsByIdsForHost peers once companions land. */
export function setUseAppsByIdsForHostPeers(
  next: UseAppsByIdsForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `RG` / internal `yei`.
 */
export function useAppsByIdsForHost(e: unknown) {
  if (peers == null) {
    throw new Error("useAppsByIdsForHost peers are not configured");
  }

  let t = (0, peers.Sei.c)(7),
    { appIds: n, enabled: r, hostId: i } = e,
    a = r === void 0 ? !0 : r,
    o = i ?? `local`,
    s = peers.yM(),
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = {
        hostId: o,
      }),
      (t[0] = o),
      (t[1] = c));
  let l = peers.z7r(c),
    u = a && l && !s.isLoading && s.userId != null,
    d;
  t[2] === u
    ? (d = t[3])
    : ((d = {
        enabled: u,
      }),
      (t[2] = u),
      (t[3] = d));
  let f = peers.Fo(peers.Cei, o, d);
  if (f == null) return;
  let p;
  return (
    t[4] !== f || t[5] !== n
      ? ((p = peers.vei(f, n)), (t[4] = f), (t[5] = n), (t[6] = p))
      : (p = t[6]),
    p
  );
}
