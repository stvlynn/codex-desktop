// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dJs`) / export `Bg`.

export type ToWorktreePeers = {
  _Js: (...args: unknown[]) => unknown;
  tr: (...args: unknown[]) => unknown;
};

let peers: ToWorktreePeers | null = null;

/** Wire ToWorktree peers once companions land. */
export function setToWorktreePeers(next: ToWorktreePeers): void {
  peers = next;
}

/**
 * Bundle export `Bg` / internal `dJs`.
 */
export function ToWorktree() {
  if (peers == null) {
    throw new Error("ToWorktree peers are not configured");
  }

  return peers.tr(peers._Js);
}
