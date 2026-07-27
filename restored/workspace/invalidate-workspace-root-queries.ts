// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Y3n`) / export `j3`.

export type InvalidateWorkspaceRootQueriesPeers = {
  suffixesByChangeType: Record<string, string[]>;
  rootQueryKey: (
    commonDir: unknown,
    root: unknown,
    hostKey: unknown,
  ) => unknown[];
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
 * Invalidate workspace-root query keys for a given change type.
 */
export async function invalidateWorkspaceRootQueries(
  queryClient: {
    invalidateQueries: (
      filters: { queryKey: unknown[] },
      opts: { cancelRefetch: boolean; throwOnError: boolean },
    ) => Promise<unknown>;
  },
  dirs: { commonDir: unknown; root: unknown },
  opts: {
    changeType: string;
    hostKey: unknown;
    cancelRefetch?: boolean;
    throwOnError?: boolean;
  },
): Promise<unknown[]> {
  if (peers == null) {
    throw new Error("InvalidateWorkspaceRootQueries peers are not configured");
  }
  const cancelRefetch = opts.cancelRefetch ?? true;
  const throwOnError = opts.throwOnError ?? false;
  const suffixes = peers.suffixesByChangeType[opts.changeType] ?? [];
  return Promise.all(
    suffixes.map((suffix) =>
      queryClient.invalidateQueries(
        {
          queryKey: [
            ...peers!.rootQueryKey(dirs.commonDir, dirs.root, opts.hostKey),
            suffix,
          ],
        },
        { cancelRefetch, throwOnError },
      ),
    ),
  );
}
