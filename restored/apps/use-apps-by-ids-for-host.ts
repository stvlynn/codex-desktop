// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `yei`) / export `RG`.

export type UseAppsByIdsForHostArgs = {
  appIds: unknown[];
  enabled?: boolean;
  hostId?: unknown;
};

export type UseAppsByIdsForHostPeers = {
  useHostHasMatchingEntries: (args: { hostId: unknown }) => boolean;
  useUserQuery: () => { isLoading: boolean; userId?: unknown };
  appsAtom: unknown;
  useAtomValue: (
    atom: unknown,
    hostId: unknown,
    options: { enabled: boolean },
  ) => unknown;
  selectByIds: (apps: unknown, appIds: unknown[]) => unknown;
};

let peers: UseAppsByIdsForHostPeers | null = null;

/** Wire apps-by-ids peers once companions land. */
export function setUseAppsByIdsForHostPeers(
  next: UseAppsByIdsForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `RG` / internal `yei`.
 * Resolve apps by id for a host when entries/user are ready.
 */
export function useAppsByIdsForHost(args: UseAppsByIdsForHostArgs): unknown {
  if (peers == null) {
    throw new Error("UseAppsByIdsForHost peers are not configured");
  }
  const { appIds, enabled = true, hostId } = args;
  const resolvedHostId = hostId ?? "local";
  const hasEntries = peers.useHostHasMatchingEntries({
    hostId: resolvedHostId,
  });
  const user = peers.useUserQuery();
  const queryEnabled =
    enabled && hasEntries && !user.isLoading && user.userId != null;
  const apps = peers.useAtomValue(peers.appsAtom, resolvedHostId, {
    enabled: queryEnabled,
  });
  if (apps == null) return undefined;
  return peers.selectByIds(apps, appIds);
}
