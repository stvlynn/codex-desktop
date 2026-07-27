// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `s5n`) / export `U4`.

export type UseLocalCwdModeHostConfigPeers = {
  CE: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  I5n: (...args: unknown[]) => unknown;
  M5n: (...args: unknown[]) => unknown;
  SE: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  c5n: (...args: unknown[]) => unknown;
  cwdMode: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  l5n: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseLocalCwdModeHostConfigPeers | null = null;

/** Wire useLocalCwdModeHostConfig peers once companions land. */
export function setUseLocalCwdModeHostConfigPeers(next: UseLocalCwdModeHostConfigPeers): void {
  peers = next;
}

/**
 * Bundle export `U4` / internal `s5n`.
 */
export function useLocalCwdModeHostConfig(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useLocalCwdModeHostConfig peers are not configured");
  }

  let n = (0, peers.M5n.c)(11),
    r = t?.hostId ?? `local`,
    i = peers.Y(peers.CE),
    a = peers.Y(peers.SE),
    o = t?.cwdMode !== `preserve-null` && e == null,
    s = t?.cwdMode === `preserve-null` ? (e ?? null) : (e ?? i),
    c = peers.rt(),
    l;
  n[0] !== r || n[1] !== s
    ? ((l = [...peers.I5n, r, s]), (n[0] = r), (n[1] = s), (n[2] = l))
    : (l = n[2]);
  let u;
  n[3] !== r || n[4] !== c || n[5] !== s
    ? ((u = () => peers.l5n(c, r, s)),
      (n[3] = r),
      (n[4] = c),
      (n[5] = s),
      (n[6] = u))
    : (u = n[6]);
  let d = (t?.enabled ?? !0) && !(o && a),
    f;
  return (
    n[7] !== l || n[8] !== u || n[9] !== d
      ? ((f = {
          queryKey: l,
          queryFn: u,
          staleTime: peers.Hf.FIVE_MINUTES,
          enabled: d,
          select: peers.c5n,
        }),
        (n[7] = l),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    peers.jt(f)
  );
}
