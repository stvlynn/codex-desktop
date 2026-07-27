// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PN`) / export `cq`.

export type UseClearPrewarmedThreadsForHostPeers = {
  Bf: (...args: unknown[]) => unknown;
  OJr: (...args: unknown[]) => unknown;
  _tr: (...args: unknown[]) => unknown;
  c3r: (...args: unknown[]) => unknown;
  l3r: (...args: unknown[]) => unknown;
  zM: (...args: unknown[]) => unknown;
};

let peers: UseClearPrewarmedThreadsForHostPeers | null = null;

/** Wire useClearPrewarmedThreadsForHost peers once companions land. */
export function setUseClearPrewarmedThreadsForHostPeers(next: UseClearPrewarmedThreadsForHostPeers): void {
  peers = next;
}

/**
 * Bundle export `cq` / internal `PN`.
 */
export function useClearPrewarmedThreadsForHost(e: unknown) {
  if (peers == null) {
    throw new Error("useClearPrewarmedThreadsForHost peers are not configured");
  }

  let t = (0, peers.l3r.c)(7),
    n = e === void 0 ? null : e,
    {
      draftSettings: r,
      isNewThreadDraft: i,
      updateDraftSettings: a,
    } = peers.OJr(),
    { modelSettings: o } = peers.zM(n),
    s = peers.c3r(n, o, r.serviceTier, i),
    c = n == null && i && s.hasManagedNewThreadSettings,
    l;
  t[0] !== s || t[1] !== c || t[2] !== a
    ? ((l = async (e, t) => {
        (c &&
          (a((t) => ({
            ...t,
            isManuallyChanged: !0,
            serviceTier: {
              value: peers._tr(e),
            },
          })),
          await peers.Bf(`clear-prewarmed-threads-for-host`, {
            hostId: s.hostId,
          })),
          await s.setServiceTier(e, t));
      }),
      (t[0] = s),
      (t[1] = c),
      (t[2] = a),
      (t[3] = l))
    : (l = t[3]);
  let u = l,
    d;
  return (
    t[4] !== s || t[5] !== u
      ? ((d = {
          ...s,
          setServiceTier: u,
        }),
        (t[4] = s),
        (t[5] = u),
        (t[6] = d))
      : (d = t[6]),
    d
  );
}
