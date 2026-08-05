// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TQr`) / export `mY`.

export type UseEnvironmentsByRepoQueryPeers = {
  DQr: (...args: unknown[]) => unknown;
  EQr: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  OQr: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  o$r: (...args: unknown[]) => unknown;
  yM: (...args: unknown[]) => unknown;
};

let peers: UseEnvironmentsByRepoQueryPeers | null = null;

/** Wire useEnvironmentsByRepoQuery peers once companions land. */
export function setUseEnvironmentsByRepoQueryPeers(
  next: UseEnvironmentsByRepoQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mY` / internal `TQr`.
 */
export function useEnvironmentsByRepoQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useEnvironmentsByRepoQuery peers are not configured");
  }

  let t = (0, peers.iN.c)(12),
    { authMethod: n } = peers.yM(),
    r = e?.enabled ?? !0,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = [`workspace`, `environments-by-repo`]), (t[0] = i))
    : (i = t[0]);
  let a = r && n === `chatgpt`,
    o;
  t[1] === a
    ? (o = t[2])
    : ((o = {
        queryKey: i,
        queryFn: peers.OQr,
        staleTime: peers.Hf.ONE_MINUTE,
        enabled: a,
      }),
      (t[1] = a),
      (t[2] = o));
  let { data: s } = peers.jt(o),
    c,
    l;
  if (t[3] !== s) {
    let e = (0, peers.o$r.default)(s, [`owner`, `repoName`]).flatMap(peers.DQr);
    ((l = peers.jt),
      (c = [`workspace`, `environments-by-repo`, ...e]),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l));
  } else ((c = t[4]), (l = t[5]));
  let u = r && !!s && n === `chatgpt`,
    d;
  t[6] === s
    ? (d = t[7])
    : ((d = async () => {
        let e = (await Promise.all((s ?? []).map(peers.EQr))).flat();
        return (
          (0, peers.o$r.default)(e, [`is_pinned`, `task_count`, `label`]),
          e
        );
      }),
      (t[6] = s),
      (t[7] = d));
  let f;
  return (
    t[8] !== c || t[9] !== u || t[10] !== d
      ? ((f = {
          queryKey: c,
          enabled: u,
          staleTime: peers.Hf.ONE_MINUTE,
          queryFn: d,
        }),
        (t[8] = c),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    l(f)
  );
}
