// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XAs`) / export `xv`.

export type UseWorkspaceOriginRootQueryPeers = {
  Fo: (...args: unknown[]) => unknown;
  ZAs: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  find: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  nxe: (...args: unknown[]) => unknown;
  origins: (...args: unknown[]) => unknown;
  root: (...args: unknown[]) => unknown;
  xA: (...args: unknown[]) => unknown;
};

let peers: UseWorkspaceOriginRootQueryPeers | null = null;

/** Wire useWorkspaceOriginRootQuery peers once companions land. */
export function setUseWorkspaceOriginRootQueryPeers(
  next: UseWorkspaceOriginRootQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xv` / internal `XAs`.
 */
export function useWorkspaceOriginRootQuery(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useWorkspaceOriginRootQuery peers are not configured");
  }

  let n = (0, peers.ZAs.c)(15),
    r = !!e && (t?.enabled ?? !0),
    i;
  n[0] !== e || n[1] !== r || n[2] !== t.hostId
    ? ((i =
        !r || e == null
          ? {
              dirs: [],
            }
          : t?.hostId == null
            ? {
                dirs: [e],
              }
            : {
                dirs: [e],
                hostId: t.hostId,
              }),
      (n[0] = e),
      (n[1] = r),
      (n[2] = t.hostId),
      (n[3] = i))
    : (i = n[3]);
  let a = i,
    o;
  n[4] !== t.source || n[5] !== a
    ? ((o = {
        params: a,
        source: t.source,
      }),
      (n[4] = t.source),
      (n[5] = a),
      (n[6] = o))
    : (o = n[6]);
  let { data: s, isLoading: c } = peers.Fo(peers.xA, o),
    l;
  n[7] !== e || n[8] !== s?.origins
    ? ((l =
        s?.origins.find((t) => t.dir === e)?.root ??
        s?.origins[0]?.root ??
        null),
      (n[7] = e),
      (n[8] = s?.origins),
      (n[9] = l))
    : (l = n[9]);
  let u = l,
    d;
  n[10] === u
    ? (d = n[11])
    : ((d = u ? peers.nxe(u) : null), (n[10] = u), (n[11] = d));
  let f;
  return (
    n[12] !== c || n[13] !== d
      ? ((f = {
          gitRoot: d,
          isLoading: c,
        }),
        (n[12] = c),
        (n[13] = d),
        (n[14] = f))
      : (f = n[14]),
    f
  );
}
