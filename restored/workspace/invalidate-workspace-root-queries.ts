// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y3n`) / export `j3`.

export type InvalidateWorkspaceRootQueriesPeers = {
  K3n: (...args: unknown[]) => unknown;
  i6n: (...args: unknown[]) => unknown;
};
let peers: InvalidateWorkspaceRootQueriesPeers | null = null;

/** Wire invalidateWorkspaceRootQueries peers once companions land. */
export function setInvalidateWorkspaceRootQueriesPeers(
  next: InvalidateWorkspaceRootQueriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `j3` / internal `Y3n`.
 */
export function invalidateWorkspaceRootQueries(
  e: unknown,
  { commonDir, root }: Record<string, unknown>,
  {
    changeType,
    hostKey,
    cancelRefetch = true,
    throwOnError = false,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("invalidateWorkspaceRootQueries peers are not configured");
  }
  let s = peers.i6n[changeType];
  return Promise.all(
    s.map((item) => {
      return e.invalidateQueries(
        {
          queryKey: [...peers.K3n(commonDir, root, hostKey), item],
        },
        {
          cancelRefetch,
          throwOnError,
        },
      );
    }),
  );
}
