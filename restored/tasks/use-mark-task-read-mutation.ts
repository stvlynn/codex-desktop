// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `e$r`) / export `oY`.

export type UseMarkTaskReadMutationPeers = {
  Uh: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
};

let peers: UseMarkTaskReadMutationPeers | null = null;

/** Wire useMarkTaskReadMutation peers once companions land. */
export function setUseMarkTaskReadMutationPeers(next: UseMarkTaskReadMutationPeers): void {
  peers = next;
}

/**
 * Bundle export `oY` / internal `e$r`.
 */
export function useMarkTaskReadMutation(e: unknown) {
  if (peers == null) {
    throw new Error("useMarkTaskReadMutation peers are not configured");
  }

  let t = (0, peers.iN.c)(8),
    n = peers.vE(),
    r;
  t[0] === e
    ? (r = t[1])
    : ((r = () =>
        peers.Uh.safePost(`/wham/tasks/{task_id}/mark_read`, {
          parameters: {
            path: {
              task_id: e,
            },
          },
        })),
      (t[0] = e),
      (t[1] = r));
  let i;
  t[2] !== n || t[3] !== e
    ? ((i = async () => {
        await Promise.all([n([`tasks`]), n([`task`, e])]);
      }),
      (t[2] = n),
      (t[3] = e),
      (t[4] = i))
    : (i = t[4]);
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = {
          mutationFn: r,
          onSuccess: i,
        }),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    peers.qt(a)
  );
}
