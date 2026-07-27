// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `THt`) / export `xrt`.

export type UseUtContextPeers = {
  _Ut: (...args: unknown[]) => unknown;
  qv: (...args: unknown[]) => unknown;
};

let peers: UseUtContextPeers | null = null;

/** Wire useUtContext peers once companions land. */
export function setUseUtContextPeers(next: UseUtContextPeers): void {
  peers = next;
}

/**
 * Bundle export `xrt` / internal `THt`.
 */
export function useUtContext() {
  if (peers == null) {
    throw new Error("useUtContext peers are not configured");
  }

  return (0, peers.qv.useContext)(peers._Ut);
}
