// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `r1o`) / export `pE`.
// Branch panel peers bind via setOpenConversationBranchPanelPeers.

export type OpenConversationBranchPanelPeers = {
  openPanel: (store: unknown, kind: "branch") => void;
  applyComment: (store: unknown, comment: unknown) => void;
  applyPath: (store: unknown, path: unknown) => void;
  snapshot: (store: unknown) => unknown;
};

let peers: OpenConversationBranchPanelPeers | null = null;

/** Wire branch-panel helpers once companions land. */
export function setOpenConversationBranchPanelPeers(
  next: OpenConversationBranchPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pE` / internal `r1o`.
 * Open the conversation branch panel, optionally seeding path/comment.
 */
export function openConversationBranchPanel(
  store: unknown,
  options: { comment?: unknown; path?: unknown } = {},
): unknown {
  if (peers == null) {
    throw new Error("Open conversation branch panel peers are not configured");
  }
  peers.openPanel(store, "branch");
  const snapshot = peers.snapshot(store);
  if (options.comment == null) {
    if (options.path != null) peers.applyPath(store, options.path);
  } else {
    peers.applyComment(store, options.comment);
  }
  return snapshot;
}
