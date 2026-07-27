// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LQr`) / export `nY`.

export type UseCreateTaskMutationPeers = {
  RQr: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseCreateTaskMutationPeers | null = null;

/** Wire useCreateTaskMutation peers once companions land. */
export function setUseCreateTaskMutationPeers(next: UseCreateTaskMutationPeers): void {
  peers = next;
}

/**
 * Bundle export `nY` / internal `LQr`.
 */
export function useCreateTaskMutation() {
  if (peers == null) {
    throw new Error("useCreateTaskMutation peers are not configured");
  }

  let e = (0, peers.iN.c)(2),
    t = peers.rt(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: peers.RQr,
          onSuccess: (e, n) => {
            (t.invalidateQueries({
              queryKey: [`tasks`],
            }),
              t.invalidateQueries({
                queryKey: [`task`, n.taskId],
              }),
              t.invalidateQueries({
                queryKey: [`task`, n.taskId, `turns`],
              }),
              t.invalidateQueries({
                queryKey: [`task`, n.taskId, `turn`, n.turnId],
              }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    peers.qt(n)
  );
}
