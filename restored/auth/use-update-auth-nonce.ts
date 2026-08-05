// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sKr`) / export `BX`.

export type UseUpdateAuthNoncePeers = {
  WGr: (...args: unknown[]) => unknown;
  lKr: (...args: unknown[]) => unknown;
};

let peers: UseUpdateAuthNoncePeers | null = null;

/** Wire useUpdateAuthNonce peers once companions land. */
export function setUseUpdateAuthNoncePeers(
  next: UseUpdateAuthNoncePeers,
): void {
  peers = next;
}

/**
 * Bundle export `BX` / internal `sKr`.
 */
export function useUpdateAuthNonce() {
  if (peers == null) {
    throw new Error("useUpdateAuthNonce peers are not configured");
  }

  let e = (0, peers.lKr.useContext)(peers.WGr);
  if (!e)
    throw Error(`useUpdateAuthNonce must be used within AuthNonceProvider`);
  return e;
}
