// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UQr`) / export `aY`.

export type UseTaskActionMutationPeers = {
  WQr: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseTaskActionMutationPeers | null = null;

/** Wire useTaskActionMutation peers once companions land. */
export function setUseTaskActionMutationPeers(
  next: UseTaskActionMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aY` / internal `UQr`.
 */
export function useTaskActionMutation() {
  if (peers == null) {
    throw new Error("useTaskActionMutation peers are not configured");
  }

  let e = (0, peers.iN.c)(2),
    t = peers.rt(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: peers.WQr,
          onSuccess: () => {
            t.invalidateQueries({
              queryKey: [`tasks`],
            });
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    peers.qt(n)
  );
}
