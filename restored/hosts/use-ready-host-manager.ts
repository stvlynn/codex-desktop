// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `DGr`) / export `KX`.

export type UseReadyHostManagerPeers = {
  hostManagerAtom: unknown;
  useAtomValue: (
    atom: unknown,
    hostId: unknown,
  ) => { status: string; manager?: unknown; hostId: unknown };
  useHostManagerRegistry: () => {
    waitForManagerForHostId: (hostId: unknown) => Promise<unknown>;
  };
  use: (promise: Promise<unknown>) => unknown;
};

let peers: UseReadyHostManagerPeers | null = null;

/** Wire ready host-manager peers once companions land. */
export function setUseReadyHostManagerPeers(
  next: UseReadyHostManagerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `KX` / internal `DGr`.
 * Return a ready host manager, waiting via registry when needed.
 */
export function useReadyHostManager(hostId: unknown): unknown {
  if (peers == null) {
    throw new Error("UseReadyHostManager peers are not configured");
  }
  const state = peers.useAtomValue(peers.hostManagerAtom, hostId);
  const registry = peers.useHostManagerRegistry();
  if (state.status === "ready") return state.manager;
  return peers.use(registry.waitForManagerForHostId(state.hostId));
}
