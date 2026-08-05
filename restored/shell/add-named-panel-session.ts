// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kzi`) / export `lU`.

export type AddNamedPanelSessionPeers = {
  Nf: (...args: unknown[]) => unknown;
  Qzi: (...args: unknown[]) => unknown;
  eBi: (...args: unknown[]) => unknown;
  iBi: (...args: unknown[]) => unknown;
};

let peers: AddNamedPanelSessionPeers | null = null;

/** Wire addNamedPanelSession peers once companions land. */
export function setAddNamedPanelSessionPeers(
  next: AddNamedPanelSessionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lU` / internal `Kzi`.
 */
export function addNamedPanelSession(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("addNamedPanelSession peers are not configured");
  }

  let n = peers.iBi(e);
  if (n == null) return;
  let r = peers.Nf.addSessionForConversation(n.conversationId);
  (peers.eBi(e, n, t), peers.Qzi(e, n, r, !0, t, r));
}
