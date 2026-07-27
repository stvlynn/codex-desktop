// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `YFo`) / export `TO`.

export type UseSelectedHostPeers = {
  fallbackHostId: unknown;
};

let peers: UseSelectedHostPeers | null = null;

/** Wire selected-host fallback once companions land. */
export function setUseSelectedHostPeers(next: UseSelectedHostPeers): void {
  peers = next;
}

/**
 * Bundle export `TO` / internal `YFo`.
 * Keep hostId when local or present in available hosts; else fallback.
 */
export function useSelectedHost(
  hostId: unknown,
  availableHosts: Array<{ hostId: unknown }> | null | undefined,
): unknown {
  if (peers == null) {
    throw new Error("UseSelectedHost peers are not configured");
  }
  if (
    availableHosts == null ||
    hostId === "local" ||
    availableHosts.some((host) => host.hostId === hostId)
  ) {
    return hostId;
  }
  return peers.fallbackHostId;
}
