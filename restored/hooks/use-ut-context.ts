// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `THt`) / export `xrt`.

export type UseUtContextPeers = {
  useContext: (context: unknown) => unknown;
  utContext: unknown;
};

let peers: UseUtContextPeers | null = null;

/** Wire UT context peers once companions land. */
export function setUseUtContextPeers(next: UseUtContextPeers): void {
  peers = next;
}

/**
 * Bundle export `xrt` / internal `THt`.
 * Read the UT React context value.
 */
export function useUtContext(): unknown {
  if (peers == null) {
    throw new Error("UseUtContext peers are not configured");
  }
  return peers.useContext(peers.utContext);
}
