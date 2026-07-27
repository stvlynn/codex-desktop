// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r1o`) / export `pE`.

export type OpenConversationBranchPanelPeers = {
  IP: (...args: unknown[]) => unknown;
  J$o: (...args: unknown[]) => unknown;
  RVi: (...args: unknown[]) => unknown;
  zVi: (...args: unknown[]) => unknown;
};
let peers: OpenConversationBranchPanelPeers | null = null;

/** Wire openConversationBranchPanel peers once companions land. */
export function setOpenConversationBranchPanelPeers(
  next: OpenConversationBranchPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pE` / internal `r1o`.
 */
export function openConversationBranchPanel(e: unknown, t: unknown = {}) {
  if (peers == null) {
    throw new Error("openConversationBranchPanel peers are not configured");
  }
  peers.IP(e, "branch");
  let n = peers.J$o(e);
  return (
    t.comment == null
      ? t.path != null && peers.RVi(e, t.path)
      : peers.zVi(e, t.comment),
    n
  );
}
