// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yQr`) / export `fY`.

export type UseTaskTurnLogsQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
};

let peers: UseTaskTurnLogsQueryPeers | null = null;

/** Wire useTaskTurnLogsQuery peers once companions land. */
export function setUseTaskTurnLogsQueryPeers(next: UseTaskTurnLogsQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `fY` / internal `yQr`.
 */
export function useTaskTurnLogsQuery(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("useTaskTurnLogsQuery peers are not configured");
  }

  let r = (0, peers.iN.c)(10),
    i;
  r[0] !== e || r[1] !== t
    ? ((i = [`task`, e, `turn`, t, `logs`]), (r[0] = e), (r[1] = t), (r[2] = i))
    : (i = r[2]);
  let a = !!e && !!t && (n?.enabled ?? !0),
    o;
  r[3] !== e || r[4] !== t
    ? ((o = async () =>
        peers.Uh.safeGet(`/wham/tasks/{task_id}/turns/{task_turn_id}/logs`, {
          parameters: {
            path: {
              task_id: e ?? ``,
              task_turn_id: t ?? ``,
            },
          },
        })),
      (r[3] = e),
      (r[4] = t),
      (r[5] = o))
    : (o = r[5]);
  let s;
  return (
    r[6] !== i || r[7] !== a || r[8] !== o
      ? ((s = {
          queryKey: i,
          enabled: a,
          staleTime: peers.Hf.FIVE_SECONDS,
          queryFn: o,
        }),
        (r[6] = i),
        (r[7] = a),
        (r[8] = o),
        (r[9] = s))
      : (s = r[9]),
    peers.jt(s)
  );
}
