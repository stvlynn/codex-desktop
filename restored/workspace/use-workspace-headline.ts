// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aXr`) / export `zY`.

export type UseWorkspaceHeadlinePeers = {
  eXr: (...args: unknown[]) => unknown;
  lXr: (...args: unknown[]) => unknown;
  oXr: (...args: unknown[]) => unknown;
};

let peers: UseWorkspaceHeadlinePeers | null = null;

/** Wire useWorkspaceHeadline peers once companions land. */
export function setUseWorkspaceHeadlinePeers(
  next: UseWorkspaceHeadlinePeers,
): void {
  peers = next;
}

/**
 * Bundle export `zY` / internal `aXr`.
 */
export function useWorkspaceHeadline() {
  if (peers == null) {
    throw new Error("useWorkspaceHeadline peers are not configured");
  }

  let e = (0, peers.lXr.c)(5),
    { data: t, shouldFetch: n } = peers.oXr(),
    r;
  e[0] !== t || e[1] !== n
    ? ((r = n ? peers.eXr(t) : null), (e[0] = t), (e[1] = n), (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === r
      ? (i = e[4])
      : ((i = {
          headline: r,
        }),
        (e[3] = r),
        (e[4] = i)),
    i
  );
}
