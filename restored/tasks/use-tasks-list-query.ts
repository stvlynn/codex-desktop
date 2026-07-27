// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mQr`) / export `pY`.

export type UseTasksListQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  P: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  environmentLabel: (...args: unknown[]) => unknown;
  environment_label: (...args: unknown[]) => unknown;
  hQr: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  limit: (...args: unknown[]) => unknown;
  taskFilter: (...args: unknown[]) => unknown;
  yM: (...args: unknown[]) => unknown;
};

let peers: UseTasksListQueryPeers | null = null;

/** Wire useTasksListQuery peers once companions land. */
export function setUseTasksListQueryPeers(next: UseTasksListQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `pY` / internal `mQr`.
 */
export function useTasksListQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useTasksListQuery peers are not configured");
  }

  let t = (0, peers.iN.c)(13),
    { authMethod: n } = peers.yM(),
    r = e?.limit,
    i = e?.taskFilter,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = [`tasks`, r, i]), (t[0] = r), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] !== e?.limit || t[4] !== e?.taskFilter
    ? ((o = async () =>
        (
          await peers.Uh.safeGet(`/wham/tasks/list`, {
            parameters: {
              query: {
                limit: e?.limit,
                task_filter: e?.taskFilter,
              },
            },
          })
        ).items),
      (t[3] = e?.limit),
      (t[4] = e?.taskFilter),
      (t[5] = o))
    : (o = t[5]);
  let s = e?.enabled !== !1 && n === `chatgpt`,
    c;
  t[6] === e
    ? (c = t[7])
    : ((c = e?.environmentLabel
        ? (t) =>
            t.filter(
              (t) =>
                t.task_status_display?.environment_label === e.environmentLabel,
            )
        : void 0),
      (t[6] = e),
      (t[7] = c));
  let l;
  return (
    t[8] !== a || t[9] !== o || t[10] !== s || t[11] !== c
      ? ((l = {
          queryKey: a,
          queryFn: o,
          enabled: s,
          select: c,
          placeholderData: peers.P,
          staleTime: peers.Hf.ONE_MINUTE,
          refetchInterval: peers.hQr,
          refetchIntervalInBackground: !0,
        }),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    peers.jt(l)
  );
}
