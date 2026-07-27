// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `mKr`) / export `NX`.

export type FkrDataBridgePeers = {
  useAtomValue: (atom: unknown) => { data: unknown; isLoading: boolean };
  fkrAtom: unknown;
};

let peers: FkrDataBridgePeers | null = null;

/** Wire FkrDataBridge peers once companions land. */
export function setFkrDataBridgePeers(next: FkrDataBridgePeers): void {
  peers = next;
}

/**
 * Bundle export `NX` / internal `mKr`.
 * Bridge fKr query atom into a stable { data, isLoading } object.
 */
export function FkrDataBridge(): { data: unknown; isLoading: boolean } {
  if (peers == null) {
    throw new Error("FkrDataBridge peers are not configured");
  }
  const value = peers.useAtomValue(peers.fkrAtom);
  return { data: value.data, isLoading: value.isLoading };
}
