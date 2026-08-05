// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ZRc`) / export `Vd`.

export type BindBindUnifiedSidebarChatOrderV13Peers = {
  GRc: (...args: unknown[]) => unknown;
  JRc: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: BindBindUnifiedSidebarChatOrderV13Peers | null = null;

/** Wire bindBindUnifiedSidebarChatOrderV13 peers once companions land. */
export function setBindBindUnifiedSidebarChatOrderV13Peers(
  next: BindBindUnifiedSidebarChatOrderV13Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Vd` / internal `ZRc`.
 */
export function bindBindUnifiedSidebarChatOrderV13() {
  if (peers == null) {
    throw new Error(
      "bindBindUnifiedSidebarChatOrderV13 peers are not configured",
    );
  }

  return peers.Ma(peers.Q, ({ get: e }) => e(peers.JRc) ?? peers.GRc);
}
