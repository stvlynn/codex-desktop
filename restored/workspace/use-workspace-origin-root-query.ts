// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `XAs`) / export `xv`.

export type UseWorkspaceOriginRootQueryPeers = {
  useOriginsQuery: (
    atom: unknown,
    args: { params: unknown; source: unknown },
  ) => {
    data?: { origins?: Array<{ dir: unknown; root?: unknown }> };
    isLoading: boolean;
  };
  originsAtom: unknown;
  toGitRoot: (root: unknown) => unknown;
};

let peers: UseWorkspaceOriginRootQueryPeers | null = null;

/** Wire useWorkspaceOriginRootQuery peers once companions land. */
export function setUseWorkspaceOriginRootQueryPeers(
  next: UseWorkspaceOriginRootQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xv` / internal `XAs`.
 * Resolve the git root for a workspace origin directory.
 */
export function useWorkspaceOriginRootQuery(
  dir: unknown,
  opts: { enabled?: boolean; hostId?: unknown; source: unknown },
): { gitRoot: unknown; isLoading: boolean } {
  if (peers == null) {
    throw new Error("UseWorkspaceOriginRootQuery peers are not configured");
  }
  const enabled = !!dir && (opts?.enabled ?? true);
  const params =
    !enabled || dir == null
      ? { dirs: [] as unknown[] }
      : opts?.hostId == null
        ? { dirs: [dir] }
        : { dirs: [dir], hostId: opts.hostId };
  const { data, isLoading } = peers.useOriginsQuery(peers.originsAtom, {
    params,
    source: opts.source,
  });
  const root =
    data?.origins?.find((origin) => origin.dir === dir)?.root ??
    data?.origins?.[0]?.root ??
    null;
  return {
    gitRoot: root ? peers.toGitRoot(root) : null,
    isLoading,
  };
}
