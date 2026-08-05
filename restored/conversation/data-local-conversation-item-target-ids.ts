// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `l1s`) / export `Xh`.

export type BindDataLocalConversationItemTargetIdsPeers = {
  Da: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  c1s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  o1s: (...args: unknown[]) => unknown;
  s1s: (...args: unknown[]) => unknown;
};

let peers: BindDataLocalConversationItemTargetIdsPeers | null = null;

/** Wire bindDataLocalConversationItemTargetIds peers once companions land. */
export function setBindDataLocalConversationItemTargetIdsPeers(
  next: BindDataLocalConversationItemTargetIdsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Xh` / internal `l1s`.
 */
export function bindDataLocalConversationItemTargetIds() {
  if (peers == null) {
    throw new Error(
      "bindDataLocalConversationItemTargetIds peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.gT(),
      (o1s = `data-local-conversation-item-target-ids`),
      (s1s = 1e3),
      (c1s = peers.Da(peers.hT, (e) => null)));
  });
}
