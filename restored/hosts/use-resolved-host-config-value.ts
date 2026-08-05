// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kX`) / export `EC`.

export type UseResolvedHostConfigValuePeers = {
  GM: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  LVr: (...args: unknown[]) => unknown;
  WM: (...args: unknown[]) => unknown;
  Yrs: (...args: unknown[]) => unknown;
  mj: (...args: unknown[]) => unknown;
};

let peers: UseResolvedHostConfigValuePeers | null = null;

/** Wire useResolvedHostConfigValue peers once companions land. */
export function setUseResolvedHostConfigValuePeers(
  next: UseResolvedHostConfigValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `EC` / internal `kX`.
 */
export function useResolvedHostConfigValue(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("useResolvedHostConfigValue peers are not configured");
  }

  let r = (0, peers.Yrs.c)(7),
    i = peers.Io(peers.GM),
    a;
  r[0] === i.value
    ? (a = r[1])
    : ((a = peers.WM(i.value)), (r[0] = i.value), (r[1] = a));
  let o = a,
    s;
  r[2] === o ? (s = r[3]) : ((s = () => peers.LVr(o)), (r[2] = o), (r[3] = s));
  let c;
  (r[4] !== n || r[5] !== s
    ? ((c = {
        ...n,
        isActive: s,
      }),
      (r[4] = n),
      (r[5] = s),
      (r[6] = c))
    : (c = r[6]),
    peers.mj(e, t, c));
}
