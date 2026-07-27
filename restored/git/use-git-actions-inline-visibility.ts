// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CJo`) / export `QE`.

export type UseGitActionsInlineVisibilityPeers = {
  AJo: (...args: unknown[]) => unknown;
  jJo: (...args: unknown[]) => unknown;
};

let peers: UseGitActionsInlineVisibilityPeers | null = null;

/** Wire useGitActionsInlineVisibility peers once companions land. */
export function setUseGitActionsInlineVisibilityPeers(next: UseGitActionsInlineVisibilityPeers): void {
  peers = next;
}

/**
 * Bundle export `QE` / internal `CJo`.
 */
export function useGitActionsInlineVisibility() {
  if (peers == null) {
    throw new Error("useGitActionsInlineVisibility peers are not configured");
  }

  return (0, peers.AJo.useContext)(peers.jJo);
}
