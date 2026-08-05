// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sqa`) / export `_M`.

export type BindPluginsMentionModulePeers = {
  Au: (...args: unknown[]) => unknown;
  JT: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindPluginsMentionModulePeers | null = null;

/** Wire bindPluginsMentionModule peers once companions land. */
export function setBindPluginsMentionModulePeers(
  next: BindPluginsMentionModulePeers,
): void {
  peers = next;
}

/**
 * Bundle export `_M` / internal `sqa`.
 */
export function bindPluginsMentionModule() {
  if (peers == null) {
    throw new Error("bindPluginsMentionModule peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(), peers.JT());
  });
}
