// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vQr`) / export `dY`.

export type UseTaskTurnQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  refetchInterval: (...args: unknown[]) => unknown;
};

let peers: UseTaskTurnQueryPeers | null = null;

/** Wire useTaskTurnQuery peers once companions land. */
export function setUseTaskTurnQueryPeers(next: UseTaskTurnQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `dY` / internal `vQr`.
 */
export function useTaskTurnQuery(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("useTaskTurnQuery peers are not configured");
  }

  let r = (0, peers.iN.c)(11),
    i;
  r[0] !== e || r[1] !== t
    ? ((i = [`task`, e, `turn`, t]), (r[0] = e), (r[1] = t), (r[2] = i))
    : (i = r[2]);
  let a = !!e && !!t && (n?.enabled ?? !0),
    o = n?.refetchInterval,
    s;
  r[3] !== e || r[4] !== t
    ? ((s = async () =>
        peers.Uh.safeGet(`/wham/tasks/{task_id}/turns/{task_turn_id}`, {
          parameters: {
            path: {
              task_id: e ?? ``,
              task_turn_id: t ?? ``,
            },
          },
        })),
      (r[3] = e),
      (r[4] = t),
      (r[5] = s))
    : (s = r[5]);
  let c;
  return (
    r[6] !== i || r[7] !== a || r[8] !== o || r[9] !== s
      ? ((c = {
          queryKey: i,
          enabled: a,
          staleTime: peers.Hf.FIVE_SECONDS,
          refetchInterval: o,
          queryFn: s,
        }),
        (r[6] = i),
        (r[7] = a),
        (r[8] = o),
        (r[9] = s),
        (r[10] = c))
      : (c = r[10]),
    peers.jt(c)
  );
}
