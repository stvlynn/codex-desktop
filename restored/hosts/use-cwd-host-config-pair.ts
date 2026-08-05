// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_Ko`) / export `yD`.

export type UseCwdHostConfigPairPeers = {
  Fo: (...args: unknown[]) => unknown;
  YHo: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  retainRepoWatch: (...args: unknown[]) => unknown;
  vKo: (...args: unknown[]) => unknown;
};

let peers: UseCwdHostConfigPairPeers | null = null;

/** Wire useCwdHostConfigPair peers once companions land. */
export function setUseCwdHostConfigPairPeers(
  next: UseCwdHostConfigPairPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yD` / internal `_Ko`.
 */
export function useCwdHostConfigPair(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown,
) {
  if (peers == null) {
    throw new Error("useCwdHostConfigPair peers are not configured");
  }

  let i = (0, peers.vKo.c)(8),
    a = r?.enabled ?? !0,
    o;
  i[0] !== e || i[1] !== t
    ? ((o =
        e == null
          ? null
          : {
              cwd: e,
              hostConfig: t,
            }),
      (i[0] = e),
      (i[1] = t),
      (i[2] = o))
    : (o = i[2]);
  let s = r?.retainRepoWatch,
    c;
  return (
    i[3] !== n || i[4] !== a || i[5] !== o || i[6] !== s
      ? ((c = {
          enabled: a,
          operationSource: n,
          lookup: o,
          retainRepoWatch: s,
        }),
        (i[3] = n),
        (i[4] = a),
        (i[5] = o),
        (i[6] = s),
        (i[7] = c))
      : (c = i[7]),
    peers.Fo(peers.YHo, c)
  );
}
