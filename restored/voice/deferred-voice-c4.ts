// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z7n`) / export `C4`.

export type BindDeferredVoiceC4Peers = {
  L7n: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  R7n: (...args: unknown[]) => unknown;
};

let peers: BindDeferredVoiceC4Peers | null = null;

/** Wire bindDeferredVoiceC4 peers once companions land. */
export function setBindDeferredVoiceC4Peers(next: BindDeferredVoiceC4Peers): void {
  peers = next;
}

/**
 * Bundle export `C4` / internal `z7n`.
 */
export function bindDeferredVoiceC4() {
  if (peers == null) {
    throw new Error("bindDeferredVoiceC4 peers are not configured");
  }

  return peers.Pm(peers.L7n, peers.R7n);
}
