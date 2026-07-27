// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ijs`) / export `vv`.

export type BindComposerUserInputStateApiPeers = {
  aU: (...args: unknown[]) => unknown;
  active: (...args: unknown[]) => unknown;
};

let peers: BindComposerUserInputStateApiPeers | null = null;

/** Wire bindComposerUserInputStateApi peers once companions land. */
export function setBindComposerUserInputStateApiPeers(next: BindComposerUserInputStateApiPeers): void {
  peers = next;
}

/**
 * Bundle export `vv` / internal `ijs`.
 */
export function bindComposerUserInputStateApi(e: unknown) {
  if (peers == null) {
    throw new Error("bindComposerUserInputStateApi peers are not configured");
  }

  return peers.aU.getState(e)?.active === !0;
}
