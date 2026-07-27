// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `sKr`) / export `BX`.

export type UseUpdateAuthNoncePeers = {
  useContext: (context: unknown) => unknown;
  authNonceContext: unknown;
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
 * Read AuthNonceProvider updater context.
 */
export function useUpdateAuthNonce(): unknown {
  if (peers == null) {
    throw new Error("UseUpdateAuthNonce peers are not configured");
  }
  const value = peers.useContext(peers.authNonceContext);
  if (!value) {
    throw new Error("useUpdateAuthNonce must be used within AuthNonceProvider");
  }
  return value;
}
