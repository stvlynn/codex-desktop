// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Err`) / export `Z0`.

export type HostFeatureConfigTogglesPeers = {
  AE: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  Drr: (...args: unknown[]) => unknown;
  Pbe: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  krr: (...args: unknown[]) => unknown;
  previousFeatures: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
};

let peers: HostFeatureConfigTogglesPeers | null = null;

/** Wire HostFeatureConfigToggles peers once companions land. */
export function setHostFeatureConfigTogglesPeers(next: HostFeatureConfigTogglesPeers): void {
  peers = next;
}

/**
 * Bundle export `Z0` / internal `Err`.
 */
export function HostFeatureConfigToggles(e: unknown) {
  if (peers == null) {
    throw new Error("HostFeatureConfigToggles peers are not configured");
  }

  let t = (0, peers.Drr.c)(17),
    { hostId: n } = e,
    r = peers.rt(),
    i;
  t[0] === n ? (i = t[1]) : ((i = [...peers.krr, n]), (t[0] = n), (t[1] = i));
  let a = i,
    o = peers.vE(),
    s;
  t[2] === n
    ? (s = t[3])
    : ((s = async (e) => {
        let { featureName: t, enabled: r } = e;
        return peers.Bf(`batch-write-config-value`, {
          hostId: n,
          edits: [
            {
              keyPath: peers.Pbe(t),
              value: r,
              mergeStrategy: `upsert`,
            },
          ],
          filePath: null,
          expectedVersion: null,
        });
      }),
      (t[2] = n),
      (t[3] = s));
  let c, l;
  t[4] !== a || t[5] !== r
    ? ((c = (e) => {
        let { featureName: t, enabled: n } = e,
          i = r.getQueryData(a);
        return (
          i &&
            r.setQueryData(
              a,
              i.map((e) =>
                e.name === t
                  ? {
                      ...e,
                      enabled: n,
                    }
                  : e,
              ),
            ),
          {
            previousFeatures: i,
          }
        );
      }),
      (l = (e, t, n) => {
        (peers.Wf.error(`Failed to update experimental feature`, {
          safe: {
            error: String(e),
          },
          sensitive: {},
        }),
          n?.previousFeatures && r.setQueryData(a, n.previousFeatures));
      }),
      (t[4] = a),
      (t[5] = r),
      (t[6] = c),
      (t[7] = l))
    : ((c = t[6]), (l = t[7]));
  let u;
  t[8] !== a || t[9] !== o || t[10] !== r
    ? ((u = async (e, t, n) => {
        await Promise.all([
          r.invalidateQueries({
            queryKey: a,
          }),
          n.featureName === `memories` ? o(peers.AE) : Promise.resolve(),
        ]);
      }),
      (t[8] = a),
      (t[9] = o),
      (t[10] = r),
      (t[11] = u))
    : (u = t[11]);
  let d;
  return (
    t[12] !== s || t[13] !== c || t[14] !== l || t[15] !== u
      ? ((d = {
          mutationFn: s,
          onMutate: c,
          onError: l,
          onSettled: u,
        }),
        (t[12] = s),
        (t[13] = c),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    peers.qt(d)
  );
}
