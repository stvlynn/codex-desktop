// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `i5n`) / export `W4`.

export type UseHostWorkspaceRootPeers = {
  CE: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  M5n: (...args: unknown[]) => unknown;
  N5n: (...args: unknown[]) => unknown;
  SE: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  a5n: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  l5n: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  useActiveWorkspaceRoot: (...args: unknown[]) => unknown;
};

let peers: UseHostWorkspaceRootPeers | null = null;

/** Wire useHostWorkspaceRoot peers once companions land. */
export function setUseHostWorkspaceRootPeers(next: UseHostWorkspaceRootPeers): void {
  peers = next;
}

/**
 * Bundle export `W4` / internal `i5n`.
 */
export function useHostWorkspaceRoot(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useHostWorkspaceRoot peers are not configured");
  }

  let n = (0, peers.M5n.c)(11),
    r = t?.hostId ?? `local`,
    i = peers.Y(peers.CE),
    a = peers.Y(peers.SE),
    o = t?.useActiveWorkspaceRoot ?? r === `local`,
    s = e ?? (o ? i : null),
    c = (t?.enabled ?? !0) && !(e == null && o && a),
    l = peers.rt(),
    u;
  n[0] !== r || n[1] !== s
    ? ((u = [...peers.N5n, r, s]), (n[0] = r), (n[1] = s), (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] !== r || n[4] !== l || n[5] !== s
    ? ((d = () => peers.l5n(l, r, s)),
      (n[3] = r),
      (n[4] = l),
      (n[5] = s),
      (n[6] = d))
    : (d = n[6]);
  let f;
  return (
    n[7] !== c || n[8] !== u || n[9] !== d
      ? ((f = {
          queryKey: u,
          queryFn: d,
          staleTime: peers.Hf.FIVE_MINUTES,
          enabled: c,
          select: peers.a5n,
        }),
        (n[7] = c),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    peers.jt(f)
  );
}
