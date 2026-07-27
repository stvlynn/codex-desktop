// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KQr`) / export `eY`.

export type UseCancelTaskMutationPeers = {
  iN: (...args: unknown[]) => unknown;
  qQr: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseCancelTaskMutationPeers | null = null;

/** Wire useCancelTaskMutation peers once companions land. */
export function setUseCancelTaskMutationPeers(next: UseCancelTaskMutationPeers): void {
  peers = next;
}

/**
 * Bundle export `eY` / internal `KQr`.
 */
export function useCancelTaskMutation() {
  if (peers == null) {
    throw new Error("useCancelTaskMutation peers are not configured");
  }

  let e = (0, peers.iN.c)(2),
    t = peers.rt(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: peers.qQr,
          onSuccess: (e, n) => {
            (t.invalidateQueries({
              queryKey: [`tasks`],
            }),
              t.invalidateQueries({
                queryKey: [`task`, n],
              }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    peers.qt(n)
  );
}
