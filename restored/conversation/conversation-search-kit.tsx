// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B2s`) / export `Lh`.

export type BindBindConversationSearchKitPeers = {
  C2s: (...args: unknown[]) => unknown;
  D2s: (...args: unknown[]) => unknown;
  M2s: (...args: unknown[]) => unknown;
  N2s: (...args: unknown[]) => unknown;
  j2s: (...args: unknown[]) => unknown;
  n2s: (...args: unknown[]) => unknown;
  o2s: (...args: unknown[]) => unknown;
  y2s: (...args: unknown[]) => unknown;
};

let peers: BindBindConversationSearchKitPeers | null = null;

/** Wire bindBindConversationSearchKit peers once companions land. */
export function setBindBindConversationSearchKitPeers(
  next: BindBindConversationSearchKitPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Lh` / internal `B2s`.
 */
export function bindBindConversationSearchKit() {
  if (peers == null) {
    throw new Error("bindBindConversationSearchKit peers are not configured");
  }

  return Object.assign(peers.M2s, {
    Frame: peers.j2s,
    Surface: peers.N2s,
    Input: peers.y2s,
    DomainToggle: peers.o2s,
    Navigation: peers.C2s,
    ResultLabel: peers.D2s,
    Close: peers.n2s,
  });
}
