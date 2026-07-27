// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `i5n`) / export `W4`.

export type UseHostWorkspaceRootPeers = {
  useAtomValue: (atom: unknown) => unknown;
  activeWorkspaceRootAtom: unknown;
  isWorkspaceRootLoadingAtom: unknown;
  useQuery: (opts: Record<string, unknown>) => unknown;
  queryKeyPrefix: unknown[];
  queryFn: (args: {
    hostId: string;
    workspaceRoot: unknown;
  }) => Promise<unknown>;
};

let peers: UseHostWorkspaceRootPeers | null = null;

/** Wire useHostWorkspaceRoot peers once companions land. */
export function setUseHostWorkspaceRootPeers(
  next: UseHostWorkspaceRootPeers,
): void {
  peers = next;
}

/**
 * Bundle export `W4` / internal `i5n`.
 * Resolve host workspace root via query + active workspace atoms.
 */
export function useHostWorkspaceRoot(
  workspaceRoot?: string | null,
  options?: {
    hostId?: string;
    useActiveWorkspaceRoot?: boolean;
    enabled?: boolean;
  },
): unknown {
  if (peers == null) {
    throw new Error("UseHostWorkspaceRoot peers are not configured");
  }
  const hostId = options?.hostId ?? "local";
  const activeRoot = peers.useAtomValue(peers.activeWorkspaceRootAtom);
  const isLoading = peers.useAtomValue(peers.isWorkspaceRootLoadingAtom);
  const useActive = options?.useActiveWorkspaceRoot ?? hostId === "local";
  const root = workspaceRoot ?? (useActive ? activeRoot : null);
  const enabled =
    (options?.enabled ?? true) &&
    !(workspaceRoot == null && useActive && isLoading);
  return peers.useQuery({
    queryKey: [...peers.queryKeyPrefix, hostId, root],
    enabled,
    queryFn: () => peers!.queryFn({ hostId, workspaceRoot: root }),
  });
}
