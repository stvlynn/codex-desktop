// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `v5n`) / export `G4`.

export type UseToggleMcpServerEnabledMutationPeers = {
  Bf: (...args: unknown[]) => unknown;
  M5n: (...args: unknown[]) => unknown;
  N5n: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  jE: (...args: unknown[]) => unknown;
  previousConfigResponses: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
  x5n: (...args: unknown[]) => unknown;
  y5n: (...args: unknown[]) => unknown;
};

let peers: UseToggleMcpServerEnabledMutationPeers | null = null;

/** Wire useToggleMcpServerEnabledMutation peers once companions land. */
export function setUseToggleMcpServerEnabledMutationPeers(next: UseToggleMcpServerEnabledMutationPeers): void {
  peers = next;
}

/**
 * Bundle export `G4` / internal `v5n`.
 */
export function useToggleMcpServerEnabledMutation(e: unknown) {
  if (peers == null) {
    throw new Error(
      "useToggleMcpServerEnabledMutation peers are not configured",
    );
  }

  let t = (0, peers.M5n.c)(20),
    n = e?.hostId ?? `local`,
    r = peers.rt(),
    i = peers.vE(),
    a;
  t[0] === n ? (a = t[1]) : ((a = [...peers.N5n, n]), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === n ? (s = t[3]) : ((s = [...peers.jE, n]), (t[2] = n), (t[3] = s));
  let c = s,
    l;
  t[4] === n
    ? (l = t[5])
    : ((l = (e) => {
        let { key: t, enabled: r } = e;
        return peers.Bf(`write-config-value`, {
          hostId: n,
          keyPath: `mcp_servers.${t}.enabled`,
          value: r,
          mergeStrategy: `upsert`,
          filePath: null,
          expectedVersion: null,
        });
      }),
      (t[4] = n),
      (t[5] = l));
  let u;
  t[6] !== c || t[7] !== o || t[8] !== r
    ? ((u = async (e) => {
        let { key: t, enabled: n } = e;
        await Promise.all([
          r.cancelQueries({
            queryKey: o,
          }),
          r.cancelQueries({
            queryKey: c,
          }),
        ]);
        let i = [...peers.y5n(r, o), ...peers.y5n(r, c)];
        for (let [e, a] of i) r.setQueryData(e, peers.x5n(a, t, n));
        return {
          previousConfigResponses: i,
        };
      }),
      (t[6] = c),
      (t[7] = o),
      (t[8] = r),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === r
    ? (d = t[11])
    : ((d = (e, t, n) => {
        peers.Wf.error(`Failed to update MCP server enabled state`, {
          safe: {},
          sensitive: {
            error: e,
          },
        });
        for (let [e, t] of n?.previousConfigResponses ?? [])
          r.setQueryData(e, t);
      }),
      (t[10] = r),
      (t[11] = d));
  let f;
  t[12] !== n || t[13] !== i
    ? ((f = async () => {
        (await i([...peers.jE, n]), await i([...peers.N5n, n]));
      }),
      (t[12] = n),
      (t[13] = i),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== l || t[16] !== u || t[17] !== d || t[18] !== f
      ? ((p = {
          mutationFn: l,
          onMutate: u,
          onError: d,
          onSettled: f,
        }),
        (t[15] = l),
        (t[16] = u),
        (t[17] = d),
        (t[18] = f),
        (t[19] = p))
      : (p = t[19]),
    peers.qt(p)
  );
}
