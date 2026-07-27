// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `CJo`) / export `QE`.

import { useContext, type Context } from "react";

export type UseGitActionsInlineVisibilityPeers = {
  visibilityContext: Context<unknown>;
};

let peers: UseGitActionsInlineVisibilityPeers | null = null;

/** Wire git-actions visibility context peers once companions land. */
export function setUseGitActionsInlineVisibilityPeers(
  next: UseGitActionsInlineVisibilityPeers,
): void {
  peers = next;
}

/**
 * Bundle export `QE` / internal `CJo`.
 * Read whether git actions should render inline.
 */
export function useGitActionsInlineVisibility(): unknown {
  if (peers == null) {
    throw new Error("UseGitActionsInlineVisibility peers are not configured");
  }
  return useContext(peers.visibilityContext);
}
